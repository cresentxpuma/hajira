// import React from 'react';

// const Refund = () => {
//     return (
//         <div className='bg-black'>
//         <div className="max-w-7xl mt-20 mx-auto p-8 mb-20  bg-[#444444] rounded-lg shadow-lg">
//             <h1 className="text-4xl text-[#f0c137] text-left font-bold mb-6">CONTACT US,</h1>

//             <p className="text-xl text-white mb-4">
//                 At <strong>HAJIRA AIR TRAVEL SERVICE</strong>, Thank you for choosing us for your special event! We're here to assist you in creating unforgettable memories.
//             </p>

//             {/* <ul className="list-disc text-white pl-6 text-xl mb-4">
//                 <li>A non-refundable advance of ₹700 is required to confirm your booking. Cancellations made within 72 hours of the event will receive a partial refund of ₹500. No refunds are available for cancellations after this window.</li>
//                 <li>Rescheduling is allowed at no extra charge if requested at least 5 days before the event. Late requests may incur a fee based on availability.</li>
//                 <li>No refunds will be provided in case of a no-show. Please ensure timely arrival to make the most of your event.</li>
//                 <li>Refunds will be processed within 7 business days and credited to the original payment method. For any questions or to request a cancellation, please contact us via WhatsApp at <strong>+91 9100111403</strong>.</li>
//             </ul> */}

//             <p className="text-xl text-white mt-6">
//                 Thank you for choosing hajira_airtravelservices. We look forward to hosting your memorable pilgrimage session!
//             </p>
//         </div>
//         </div>
//     );
// };

// export default Refund;

import React from 'react';

const Refund = () => {
    return (
        <div className='bg-[#11111]'>
           <div 
  className="max-w-7xl mt-20 mx-auto p-8 mb-20 rounded-lg shadow-lg transition transform"
  style={{ 
    background: "linear-gradient(to bottom, #000000, rgb(1, 39, 1))"  // Black to dark green gradient
  }}
>

                <h1 className="text-4xl text-[#f0c137] text-left font-bold mb-6">CONTACT US,</h1>

                <p className="text-xl text-white mb-4">
                    At <strong>HAJIRA AIR TRAVEL SERVICES</strong>, thank you for choosing us for your special event! We're here to assist you in creating unforgettable memories.
                </p>

                <p className="text-xl text-white mt-6">
                    Thank you for choosing hajira_airtravelservices. We look forward to hosting your memorable pilgrimage session!
                </p>

                <div className="mt-6">
                    <h2 className="text-2xl text-[#f0c137] mb-4">Contact Details:</h2>
                    <p className="text-lg text-white">
                        Phone: <strong>+91 8977860730</strong> / <strong>8977860733</strong>
                    </p>
                </div>

                <div className="mt-6">
                    <h2 className="text-2xl text-[#f0c137] mb-4">Mail:</h2>
                    <p className="text-lg text-white">
                        Email: <strong>hajiraairtravelservices@gmail.com</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Refund;
