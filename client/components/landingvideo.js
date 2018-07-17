import React from 'react'

function LandingVideo() {
  return (
    <div id="video-frame">
    {/*   <div id="video-text-overlay">
        [ghost lounge]
        </div>
    */}
      <video className="landing-video" autoPlay loop preload="true" muted>
        <source src="/videos/ghostintrobg.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default LandingVideo
