import React from 'react'

const Loading = () => {
  return (
    <div>
         <video autoPlay loop muted className="w-full h-screen object-cover">
          <source src="/PreLoader.mp4" type="video/mp4" />
        </video>
    </div>
  )
}

export default Loading