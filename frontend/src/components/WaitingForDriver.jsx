// import React from 'react'

// const WaitingForDriver = (props) => {
//   return (
//     <div>
//       <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
//         props.waitingForDriver(false)
//       }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>

//       <div className='flex items-center justify-between'>
//         <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
//         <div className='text-right'>
//           <h2 className='text-lg font-medium capitalize'><span>Driver Name </span>{props.ride?.captain.fullname.firstname}</h2>
//           <h4 className='text-xl font-semibold -mt-1 -mb-1'><span>Number Plate </span>{props.ride?.captain.vehicle.plate}</h4>
//           <p className='text-sm text-gray-600'><span>Car Name </span>Maruti Suzuki Alto</p>
//           <h1 className='text-lg font-semibold'><span>OTP is </span>  {props.ride?.otp} </h1>
//         </div>
//       </div>

//       <div className='flex gap-2 justify-between flex-col items-center'>
//         <div className='w-full mt-5'>
//           <div className='flex items-center gap-5 p-3 border-b-2'>
//             <i className="ri-map-pin-user-fill"></i>
//             <div>
//               <h3 className='text-lg font-medium'>Pickup Location</h3>
//               <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
//             </div>
//           </div>
//           <div className='flex items-center gap-5 p-3 border-b-2'>
//             <i className="text-lg ri-map-pin-2-fill"></i>
//             <div>
//               <h3 className='text-lg font-medium'>Destination</h3>
//               <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
//             </div>
//           </div>
//           <div className='flex items-center gap-5 p-3'>
//             <i className="ri-currency-line"></i>
//             <div>
//               <h3 className='text-lg font-medium'>₵{props.ride?.fare} </h3>
//               <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default WaitingForDriver 

import React from 'react';

const WaitingForDriver = (props) => {
  return (
    <div className="relative p-3 pb-24">
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
        props.waitingForDriver(false);
      }}>
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>

      <div className='flex items-center justify-between'>
        <img className='h-12 rounded-md' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="Car" />
        <div className='text-right'>
          <h2 className='text-lg font-medium capitalize'><span>Driver Name: </span>{props.ride?.captain.fullname.firstname}</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'><span>Number Plate: </span>{props.ride?.captain.vehicle.plate}</h4>
          <p className='text-sm text-gray-600'><span>Car Name: </span>Maruti Suzuki Alto</p>
          <h1 className='text-lg font-semibold'><span>OTP is: </span>{props.ride?.otp}</h1>
        </div>
      </div>

      <div className='flex gap-2 justify-between flex-col items-center'>
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="ri-map-pin-user-fill text-xl text-blue-600"></i>
            <div>
              <h3 className='text-lg font-medium'>Pickup Location</h3>
              <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="text-lg text-green-600 ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>Destination</h3>
              <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3'>
            <i className="ri-currency-line text-yellow-600 text-xl"></i>
            <div>
              <h3 className='text-lg font-medium'>₵{props.ride?.fare}</h3>
              <p className='text-sm -mt-1 text-gray-600'>Payment: Cash</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Buttons */}
      <div className="fixed bottom-3 left-0 w-full px-4">
        <div className="flex gap-4">
          <button
            onClick={() => window.open(`tel:${props.ride?.captain?.phone || ''}`)}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl shadow-lg"
          >
            <i className="ri-phone-fill text-xl"></i>
            Call Driver
          </button>
          <button
            onClick={() => alert('Messaging feature coming soon')}
            className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl shadow-lg"
          >
            <i className="ri-message-3-line text-xl"></i>
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
