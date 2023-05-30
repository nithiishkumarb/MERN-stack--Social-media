import "./rightbar.css"
import {Users} from "../../dummydata"
import Onlinefriendlist from "./onlinelist/Onlinefriendlist"
export default function Rightbar() {
  return (
    <div className="rightbarcontainer">
     <div className="rightbarwrapper">
      <div className="gift">
        <img src="/assests/gift.jpg" alt="gift" className="birthdaygiftimg"/>
        <span className="gifttext">
          <b>nithish</b> and <b>3 other friends</b> have a birthday today</span>
      </div>
      <img src="/assests/adds.jpg" alt="adds" className="rightbaradds" />
      <h4 className="rightbartitle">Online Friends</h4>
      <ul className="rightbaronlinefriendlist">
        {Users.map((u)=>(
          <Onlinefriendlist key={u.id} onlinelist={u}/>
        ))}
      </ul>
     </div>
    </div>
  )
}
