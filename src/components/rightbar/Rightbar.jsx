import "./rightbar.css"
import {Users} from "../../dummydata"
import Onlinefriendlist from "./onlinelist/Onlinefriendlist"
export default function Rightbar() {
  const homeRightbar=()=>{
    return(
      <>
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
      </>
    )
  }
  const ProfileRightbar=()=>{
    return(
      <>
      <h1 className="Profilerightbar">User's information</h1>
      <div className="rightbarinfo">
        <div className="rightbarinfoitem">
          <span rightbarinfokey>City:</span>
          <span className="rightbarinfovalue">India</span>
        </div>
        <div className="rightbarinfoitem">
          <span rightbarinfokey>From:</span>
          <span className="rightbarinfovalue">Tamil Nadu</span>
        </div>
        <div className="rightbarinfoitem">
          <span rightbarinfokey>Relationship:</span>
          <span className="rightbarinfovalue">Single</span>
        </div>
        <h1 className="Profilerightbar">User's Friends</h1>
        <div className="rightbarfollowings">
          <div className="rightbarfollowing">
            <img src="/assests/person/person1.jpg" alt="profile" className="rightbarfollowingimg" />
            <span className="rightbarusers">Nithish</span>
          </div>
          <div className="rightbarfollowing">
            <img src="/assests/person/person2.jpg" alt="profile" className="rightbarfollowingimg" />
            <span className="rightbarusers">Nithish</span>
          </div>
          <div className="rightbarfollowing">
            <img src="/assests/person/person3.jpg" alt="profile" className="rightbarfollowingimg" />
            <span className="rightbarusers">Nithish</span>
          </div>
          <div className="rightbarfollowing">
            <img src="/assests/person/person4.jpg" alt="profile" className="rightbarfollowingimg" />
            <span className="rightbarusers">Nithish</span>
          </div>
          <div className="rightbarfollowing">
            <img src="/assests/person/person5.jpg" alt="profile" className="rightbarfollowingimg" />
            <span className="rightbarusers">Nithish</span>
          </div>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className="rightbarcontainer">
     <div className="rightbarwrapper">
    <ProfileRightbar/>
     </div>
    </div>
  )
}
