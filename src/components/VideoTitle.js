import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] md:px-16 absolute text-white bg-gradient-to-right from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/2'>{overview}</p>
        <div className='my-4 md:m-0'>
            <button className='bg-white text-xl text-black py-2 px-3 md:py-4 px-16 rounded-lg hover:bg-opacity-80'>▶️ Play</button>
            <button className='hidden md:inline-block mx-2 bg-gray-500 text-xl text-white p-2 px-16 bg-opacity-50 rounded-lg hover:bg-opacity-80'> ℹ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle