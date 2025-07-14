import React from 'react'

const Background = () => {
    return (
        <div className='h-screen w-full relative  '>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="https://videos.pexels.com/video-files/12722063/12722063-uhd_2560_1440_24fps.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Background