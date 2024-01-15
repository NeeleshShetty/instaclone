import { useRef, useState } from "react"
import "./VideoCard.css"
import VideoHeader from "./VideoHeader"
import VideoFooter from "./VideoFooter"
const VideoCard = ({src,likes,shares,channel,avatar,song}) => {
    const [isVideoPlaying , setIsVideoPlaying] = useState(false)
    const videoRef  = useRef(null)
    const onVideoPress=()=>{
        if(isVideoPlaying){
            videoRef.current.pause()
            setIsVideoPlaying(false)
        }else{
            videoRef.current.play()
            setIsVideoPlaying(true)
        }
    }
  return (
    <div className='videoCard'>
        <VideoHeader/>
        <video 
          ref={videoRef} 
          onClick={()=> onVideoPress()}
          className="videoCard_player"
          src=""
          alt="IG reels"
          loop={true}
         />
         <VideoFooter channel={channel} song={song} likes={likes} shares={shares}  avatar={avatar}/>
    </div>
  )
}

export default VideoCard