import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from "react-ticker"
import "./VideoFooter.css"
const VideoFooter = ({likes,shares,channel,avatar,song}) => {
  return (
    <>
    <div className="videoFooter">
        <div className='videoFooter_text'>
        <Avatar src={avatar}/>
        <h3>{channel} <Button>Follow</Button> </h3>
        </div>
        <div className="videoFooter_ticker">
            <MusicNoteIcon className='videoFooter_icon'/>
            <Ticker>
                {({index})=>(
                    <>
                    <h1>{song}</h1>
                    </>
                )}
            </Ticker>
        </div>

    </div>
    </>
  )
}

export default VideoFooter