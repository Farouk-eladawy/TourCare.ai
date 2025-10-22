
import { useState, useEffect, useCallback } from 'react';
import { SupplierBooking } from '../types';
import { generateMockBookings } from '../data/mockDashboardData';

const DB_KEY = 'tourcare_supplier_bookings';

export const useSupplierData = () => {
    const [bookings, setBookings] = useState<SupplierBooking[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching from a persistent local source like IndexedDB
        setTimeout(() => {
            let data: SupplierBooking[] = [];
            try {
                const storedData = localStorage.getItem(DB_KEY);
                if (storedData) {
                    data = JSON.parse(storedData);
                } else {
                    // If no data, generate and store it
                    data = generateMockBookings(25);
                    localStorage.setItem(DB_KEY, JSON.stringify(data));
                }
            } catch (error) {
                console.error("Failed to load or generate data from localStorage", error);
                // Fallback to in-memory generation
                data = generateMockBookings(25);
            }
            setBookings(data);
            setIsLoading(false);
        }, 500);
    }, []);

    // Function to update a booking (e.g., after setting pickup time)
    const updateBooking = useCallback((updatedBooking: SupplierBooking) => {
        setBookings(prevBookings => {
            const newBookings = prevBookings.map(b => b.id === updatedBooking.id ? updatedBooking : b);
            localStorage.setItem(DB_KEY, JSON.stringify(newBookings));
            return newBookings;
        });
    }, []);

    return { bookings, isLoading, updateBooking };
};
