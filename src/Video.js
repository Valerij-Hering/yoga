
import vodeoTrack from './video-yoga.mp4'


function Video ({handleplay, refVideo, paused}) {

    return (
            <div className={paused ? 'container_video_active' : 'container_video'}>
                <i className="fi fi-rr-cross-small video_close" onClick={handleplay}></i>
                <video className='video' ref={refVideo} src={vodeoTrack}   muted loop id="myVideo" controls />
            </div>
    )
}

export default Video