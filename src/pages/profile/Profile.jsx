import "./profile.css"
import Sidebar from "../../components/sidebar/sidebar.jsx"
import Topbar from "../../components/topbar/Topbar"
import Rightbar from "../../components/rightbar/Rightbar"
export default function Profile() {
  return(
    <>
    <Topbar/>
    <div className="profile">
        <Sidebar/>
        <Rightbar/>
    </div>
    </>
  )
}


