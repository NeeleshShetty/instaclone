import "./VideoHeader.css"
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
const VideoHeader = () => {
  return (
    <>
    <div className="videoHeader">
        <ArrowBackIcon />
        <h3>Reels</h3>
        <CameraAltIcon />
    </div>
    </>
  )
}

export default VideoHeader