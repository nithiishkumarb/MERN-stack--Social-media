import "./profile.css"
import Sidebar from "../../components/sidebar/Sidebar.jsx"
import Topbar from "../../components/topbar/Topbar"
import Rightbar from "../../components/rightbar/Rightbar"
import Feed from "../../components/feed/Feed"
export default function Profile(){
  return(
    <>
      <Topbar/>
      <div className="profile">
        <Sidebar/>
        <div className="profileright">
          <div className="profilerighttop">
            <div className="profilecover">
            <img src="../../assests/gift.jpg" alt="Profilecoverimg" className="profilecoverimg" />
            <img src="../../assests/person/profile1.jpg" alt="profilepicture" className="profilepicture" />
            </div>
            <div className="profileinfo">
              <h4 className="profilename">Nithish</h4>
              <span className="profiledesc">hi my friends</span>
            </div>
          </div>
          <div className="profilerightbottom">
            <Feed/>
            <Rightbar/>
          </div>
        </div>
      </div>
   </>
  )
}