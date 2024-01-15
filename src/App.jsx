
import "./App.css"
import VideoCard from "./components/VideoCard"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const App = () => {
  return (
    <>
    <div className="app">
      <div className="app_top">
        {/* Image the at the top */}
        <img className="app_logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="instaLogo" />

        {/* Reels text */}
        <h1>
          Reels
        </h1>
      </div>

      <div className="app_videos">
        {/* Container of app_videos (scrollable content) */}
        
        
        <VideoCard 
        channel={"channel"}
        avatar={<AccountCircleIcon />}
        song={"song"}
        src={"https://www.youtube.com/@WebDevCody"}
        likes={950}
        shares={30}/>

        {/* <VideoCard channel={"channel"}
        avatar={<AccountCircleIcon />}
        song={"song"}
        src={"https://www.youtube.com/@WebDevCody"}
        likes={950}
        shares={30} /> */}
        
      </div>
    </div>
    </>
  )
}

export default App