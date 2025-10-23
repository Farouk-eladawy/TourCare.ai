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
    // FIX: Added `(import.meta as any)` to bypass TypeScript error for Vite env variables.
    const baseId = (import.meta as any).env.VITE_AIRTABLE_BASE_ID;
    // FIX: Added `(import.meta as any)` to bypass TypeScript error for Vite env variables.
    const tableName = (import.meta as any).env.VITE_AIRTABLE_TABLE_NAME;
    // FIX: Added `(import.meta as any)` to bypass TypeScript error for Vite env variables.
    const apiKey = (import.meta as any).env.VITE_AIRTABLE_API_KEY;

    if (!baseId || !tableName || !apiKey) {
        console.warn("Airtable environment variables (VITE_AIRTABLE_BASE_ID, VITE_AIRTABLE_TABLE_NAME, VITE_AIRTABLE_API_KEY) are not set. Using mock data for demonstration.");
        return generateMockSlots();
    }
    
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
        
        if (data.records && data.records.length > 0) {
            return data.records as AppointmentSlot[];
        }

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
 */
export const bookConsultation = async (payload: BookingPayload): Promise<void> => {
    // FIX: Added `(import.meta as any)` to bypass TypeScript error for Vite env variables.
    const webhookUrl = (import.meta as any).env.VITE_MAKE_BOOKING_WEBHOOK_URL;

    if (!webhookUrl) {
        console.warn("VITE_MAKE_BOOKING_WEBHOOK_URL is not set. Simulating a successful booking for demonstration purposes.");
        console.log("DEMO: Booking payload that would be sent:", payload);
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        return;
    }

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
        throw error;
    }
};