
// import React, { useContext } from 'react'
// import { CaptainDataContext } from '../context/CapatainContext'

// const CaptainDetails = () => {

//     const { captain } = useContext(CaptainDataContext)

//     return (
//         <div>
//             <div className='flex items-center justify-between'>
//                 <div className='flex items-center justify-start gap-3'>
//                     <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" />
//                     <h4 className='text-lg font-medium capitalize'>{captain.fullname.firstname + " " + captain.fullname.lastname}</h4>
//                 </div>
//                 <div>
//                     <h4 className='text-xl font-semibold'>₵295.20</h4>
//                     <p className='text-sm text-gray-600'>Earned</p>
//                 </div>
//             </div>
//             <div className='flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
//                 <div className='text-center'>
//                     <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
//                     <h5 className='text-lg font-medium'>10.2</h5>
//                     <p className='text-sm text-gray-600'>Hours Online</p>
//                 </div>
//                 <div className='text-center'>
//                     <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
//                     <h5 className='text-lg font-medium'>10.2</h5>
//                     <p className='text-sm text-gray-600'>Hours Online</p>
//                 </div>
//                 <div className='text-center'>
//                     <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
//                     <h5 className='text-lg font-medium'>10.2</h5>
//                     <p className='text-sm text-gray-600'>Hours Online</p>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default CaptainDetails

import React, { useContext } from 'react';
import { CaptainDataContext } from '../context/CapatainContext';

const CaptainDetails = () => {
  const { captain } = useContext(CaptainDataContext);

  return (
    <div className="p-4">
      {/* Profile & Earnings Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <img
            className="h-14 w-14 rounded-full object-cover border-2 border-blue-500"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s"
            alt="Captain Avatar"
          />
          <div>
            <h2 className="text-xl font-semibold capitalize">{captain.fullname.firstname} {captain.fullname.lastname}</h2>
            <p className="text-sm text-gray-500">Driver Profile</p>
          </div>
        </div>
        <div className="text-right">
          <h4 className="text-2xl font-bold text-green-600">₵295.20</h4>
          <p className="text-sm text-gray-600">Total Earned</p>
        </div>
      </div>

      {/* Metrics Panel */}
      <div className="grid grid-cols-3 gap-4 bg-gray-100 p-4 rounded-xl shadow-sm">
        <div className="text-center">
          <i className="ri-timer-2-line text-blue-600 text-3xl mb-1"></i>
          <h5 className="text-lg font-semibold">10.2</h5>
          <p className="text-xs text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="ri-speed-up-line text-yellow-500 text-3xl mb-1"></i>
          <h5 className="text-lg font-semibold">48</h5>
          <p className="text-xs text-gray-600">Rides Completed</p>
        </div>
        <div className="text-center">
          <i className="ri-booklet-line text-purple-600 text-3xl mb-1"></i>
          <h5 className="text-lg font-semibold">4.8</h5>
          <p className="text-xs text-gray-600">Average Rating</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
