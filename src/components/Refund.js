import React from 'react';

const Refund = () => {
    return (
        <div className="max-w-7xl mt-20 mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-4xl text-left font-bold mb-6">Refund Policy,</h1>

            <p className="text-xl mb-4">
                At <strong>Binge Hall</strong>, we strive to make your event unforgettable. Please review our refund policy carefully.
            </p>

            <ul className="list-disc pl-6 text-xl mb-4">
                <li>A non-refundable advance of ₹700 is required to confirm your booking. Cancellations made within 72 hours of the event will receive a partial refund of ₹500. No refunds are available for cancellations after this window.</li>
                <li>Rescheduling is allowed at no extra charge if requested at least 5 days before the event. Late requests may incur a fee based on availability.</li>
                <li>No refunds will be provided in case of a no-show. Please ensure timely arrival to make the most of your event.</li>
                <li>Refunds will be processed within 7 business days and credited to the original payment method. For any questions or to request a cancellation, please contact us via WhatsApp at <strong>9948954545</strong>.</li>
            </ul>

            <p className="text-xl mt-6">
                Thank you for choosing Binge Hall. We look forward to hosting your memorable event!
            </p>
        </div>
    );
};

export default Refund;
