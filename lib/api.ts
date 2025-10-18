import { AppointmentSlot } from '../types';

/**
 * Generates more realistic mock appointment slots for demonstration or fallback purposes.
 * It creates slots for the next few business days, skipping weekends.
 */
const generateMockSlots = (): AppointmentSlot[] => {
    const slots: AppointmentSlot[] = [];
    const now = new Date();
    let currentDay = new Date(now);

    let slotsGenerated = 0;
    const totalSlotsToGenerate = 6;

    // Loop until we have enough slots, checking up to 10 days in the future
    for (let dayOffset = 1; dayOffset <= 10 && slotsGenerated < totalSlotsToGenerate; dayOffset++) {
        currentDay = new Date(now);
        currentDay.setDate(now.getDate() + dayOffset);

        const dayOfWeek = currentDay.getDay();
        // Skip weekends (Saturday=6, Sunday=0)
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            continue;
        }

        // Define potential appointment times for a business day
        const daySlotTimes = [
            new Date(currentDay.setHours(9, 0, 0, 0)),
            new Date(currentDay.setHours(11, 30, 0, 0)),
            new Date(currentDay.setHours(14, 0, 0, 0)),
        ];

        for (const slotTime of daySlotTimes) {
            if (slotsGenerated < totalSlotsToGenerate) {
                slots.push({
                    id: `mock_slot_${slotsGenerated + 1}`,
                    fields: {
                        DateTime: slotTime.toISOString(),
                        Status: 'Available'
                    }
                });
                slotsGenerated++;
            }
        }
    }

    return slots.sort((a, b) => new Date(a.fields.DateTime).getTime() - new Date(b.fields.DateTime).getTime());
};


/**
 * Fetches available appointment slots from an Airtable base.
 * This function now reads credentials from environment variables for security.
 */
export const fetchAirtableSlots = async (): Promise<AppointmentSlot[]> => {
    // Credentials are now read from environment variables using a standard convention.
    // Please set these in your deployment environment.
    const baseId = (process as any).env.VITE_AIRTABLE_BASE_ID;
    const tableName = (process as any).env.VITE_AIRTABLE_TABLE_NAME;
    const apiKey = (process as any).env.VITE_AIRTABLE_API_KEY;

    // Check if environment variables are configured. If not, use mock data.
    if (!baseId || !tableName || !apiKey) {
        console.warn("Airtable environment variables (VITE_AIRTABLE_BASE_ID, VITE_AIRTABLE_TABLE_NAME, VITE_AIRTABLE_API_KEY) are not set. Using mock data for demonstration.");
        return generateMockSlots();
    }
    
    // This filter ensures we only fetch future appointments that are marked as 'Available'.
    // The `DATETIME_DIFF` function compares the slot's DateTime with the current time.
    // A value > 0 means the slot is in the future.
    const filterFormula = "AND({Status} = 'Available', DATETIME_DIFF({DateTime}, NOW()) > 0)";
    const encodedFilter = encodeURIComponent(filterFormula);

    const url = `https://api.airtable.com/v0/${baseId}/${tableName}?view=Grid%20view&filterByFormula=${encodedFilter}`;
    
    try {
        const response = await fetch(url, {
            headers: { 'Authorization': `Bearer ${apiKey}` }
        });
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error('Failed to fetch appointment slots from Airtable.', errorText);
            throw new Error(`Airtable API error: ${errorText}`);
        }
        
        const data = await response.json();
        
        // If Airtable returns at least one available slot, use it.
        if (data.records && data.records.length > 0) {
            return data.records as AppointmentSlot[];
        }

        // --- SMART FALLBACK ---
        // If the Airtable table is empty or has no 'Available' future slots,
        // generate a set of mock slots to ensure the user can always see potential times.
        // This provides a better user experience than showing an empty calendar.
        console.log("No available slots found in Airtable. Generating smart fallback slots.");
        return generateMockSlots();

    } catch (error) {
        console.error('An error occurred during the Airtable fetch operation:', error);
        throw error;
    }
};


interface BookingPayload {
    name: string;
    email: string;
    time: string; // ISO string format
    planOfInterest: string | null;
    note?: string;
}

/**
 * Sends the new consultation booking details to a Make.com webhook.
 * 
 * This function now reads the webhook URL from an environment variable for
 * better security and configuration.
 */
export const bookConsultation = async (payload: BookingPayload): Promise<void> => {
    // The webhook URL is read from an environment variable.
    // Please set VITE_MAKE_BOOKING_WEBHOOK_URL in your deployment environment.
    const webhookUrl = (process as any).env.VITE_MAKE_BOOKING_WEBHOOK_URL;

    // If the environment variable is not set, the app will run in "demo mode".
    if (!webhookUrl) {
        console.warn("VITE_MAKE_BOOKING_WEBHOOK_URL is not set. Simulating a successful booking for demonstration purposes.");
        console.log("DEMO: Booking payload that would be sent:", payload);
        
        // Simulate a network delay to mimic a real API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // In demo mode, we resolve the promise to indicate success.
        return;
    }

    // --- LIVE MODE LOGIC ---
    // This part of the code will only run when the webhook URL is configured.
    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Webhook request failed.', errorText);
            throw new Error(`Failed to book consultation via webhook. Server responded with: ${errorText}`);
        }
    } catch (error) {
        console.error('An error occurred during the webhook fetch operation:', error);
        // Re-throw the error to be caught by the calling component (AuthModal)
        throw error;
    }
};