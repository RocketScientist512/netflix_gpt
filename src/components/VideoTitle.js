import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-right from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/2'>{overview}</p>
        <div >
            <button className='bg-white text-xl text-black p-2 px-16 rounded-lg hover:bg-opacity-80'>▶️ Play</button>
            <button className='mx-2 bg-gray-500 text-xl text-white p-2 px-16 bg-opacity-50 rounded-lg hover:bg-opacity-80'> ℹ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle