// import React from 'react';
// import { nextSlide, prevSlide, dotSlide } from '../../features/slices/sliderSlice';
// import { useSelector, useDispatch } from 'react-redux';
// import { sliderData } from '../../assets/data/dummyData';

// function Slider() {
//   const sliderIndex = useSelector((state) => state.slider.value);
//   const dispatch = useDispatch();
//   console.log('SliderIndex', sliderIndex);

//   return (
//     <div className="relative">
//       {sliderData.map((item) => {
//         return (
//           <div
//             key={item.id}
//             className={
//               parseInt(item.id) === sliderIndex
//                 ? 'opacity-100 duration-700 ease-in-out scale-100'
//                 : 'opacity-0 duration-700 ease-in-out scale-95'
//             }
//           >
//             <div className="relative">
//               {parseInt(item.id) === sliderIndex && (
//                 <img src={item.img} alt="Shoes"
//                 // className="h-[850px] w-full" 
//                 className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-md shadow-lg shadow-gray-600 object-cover'
//                  />
//               )}
//             </div>
//             <div className="absolute top-44 mx-auto inset-x-1/4">
//               <p className="text-white text-4xl font-inter font-bold">
//                 {parseInt(item.id) === sliderIndex && item.text}
//               </p>
//             </div>
//           </div>
//         );
//       })}

//       {/* Dots */}
//       <div className="flex justify-center items-center absolute bottom-10 inset-x-0 space-x-2 sm:space-x-4">
//         {sliderData.map((dot, index) => {
//           return (
//             <div key={dot.id}>
//               <div
//                 onClick={() => dispatch(dotSlide(index))}
//                 className={
//                   index === sliderIndex
//                     ? 'bg-green-300 rounded-full p-2 sm:p-3 md:p-4 cursor-pointer'
//                     : 'bg-white rounded-full p-2 sm:p-3 md:p-4 cursor-pointer'
//                 }
//               ></div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Navigation Buttons */}
//       <div>
//         <button
//           className="absolute bg-white rounded-full top-[50%] right-4 p-2 hover:bg-green-300"
//           onClick={() => {
//             dispatch(nextSlide(sliderIndex + 1));
//           }}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
//             />
//           </svg>
//         </button>
//         <button
//           className="absolute bg-white rounded-full top-[50%] left-4 p-2 hover:bg-green-300"
//           onClick={() => {
//             dispatch(prevSlide(sliderIndex - 1));
//           }}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Slider;
import React from 'react';
import { nextSlide, prevSlide, dotSlide } from '../../features/slices/sliderSlice';
import { useSelector, useDispatch } from 'react-redux';
import { sliderData } from '../../assets/data/dummyData';

function Slider() {
  const sliderIndex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();
  console.log('SliderIndex', sliderIndex);

  return (
    <div className="relative">
      {sliderData.map((item) => {
        return (
          <div
            key={item.id}
            className={
              parseInt(item.id) === sliderIndex
                ? 'opacity-100 duration-700 ease-in-out scale-100'
                : 'opacity-0 duration-700 ease-in-out scale-95'
            }
          >
            <div className="relative">
              {parseInt(item.id) === sliderIndex && (
                <img
                  src={item.img}
                  alt="Shoes"
                  className='w-full h-auto   max-w-[100%] rounded-md shadow-lg shadow-gray-600 object-cover sm:object-cover'
                />
              )}
            </div>
            <div className="absolute top-20 sm:top-24 md:top-32 lg:top-44 mx-auto inset-x-0 sm:inset-x-1/4">
              <p className="text-white text-2xl sm:text-3xl md:text-4xl font-inter font-bold">
                {parseInt(item.id) === sliderIndex && item.text}
              </p>
            </div>
          </div>
        );
      })}

      {/* Dots */}
      <div className="flex justify-center items-center absolute bottom-10 inset-x-0 space-x-2 sm:space-x-4">
        {sliderData.map((dot, index) => {
          return (
            <div key={dot.id}>
              <div
                onClick={() => dispatch(dotSlide(index))}
                className={
                  index === sliderIndex
                    ? 'bg-green-300 rounded-full p-2 sm:p-3 md:p-4 cursor-pointer'
                    : 'bg-white rounded-full p-2 sm:p-3 md:p-4 cursor-pointer'
                }
              ></div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div>
        <button
          className="absolute bg-white rounded-full top-[50%] right-4 p-2 sm:p-4 md:p-6 hover:bg-green-300"
          onClick={() => {
            dispatch(nextSlide(sliderIndex + 1));
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 sm:w-8 sm:h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
        <button
          className="absolute bg-white rounded-full top-[50%] left-4 p-2 sm:p-4 md:p-6 hover:bg-green-300"
          onClick={() => {
            dispatch(prevSlide(sliderIndex - 1));
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 sm:w-8 sm:h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Slider;
