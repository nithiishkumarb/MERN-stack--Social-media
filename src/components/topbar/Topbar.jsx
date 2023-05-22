import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
export default function Topbar(){
  return (
    <>
    <div className="topbarcontainer">
        <div className="topbarLeft">
            <div className="sidebaricon">
                <FormatAlignJustifyIcon/>
            </div>
            <div className="logo">
                <h1>Netcon</h1>
            </div>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <SearchIcon className="searchicon"/>
                <input type="text" placeholder="Search for feed audio or video" className="searchinput"/>
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarlinks">
                <span className="topbarlink">Home</span>
                <span className="topbarlink">TimeLine</span>
            </div>
            <div className="topbaricons">
                <div className="topbariconitem">
                    <PersonIcon/>
                    <span className="topbariconbadge">1</span>
                </div>
                <div className="topbariconitem">
                    <NotificationsIcon/>
                    <span className="topbariconbadge">2</span>
                </div>
            </div>
           <img src="assests/person/icon11.png" alt="profile" className="topbarimg"/>
        </div>
    </div>
    </>
  )
}
