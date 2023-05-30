import "./onlinefriendlist.css" 
export default function onlinefriendlist({onlinelist}){
  return(
    <div>
        <li className="rightbarfriendlist">
          <div className="rightbarfriendlistitem">
          <img src={onlinelist.profilePicture} alt="" className="rightbarprofileimg" />
          <span className="rightbaronlineicon"></span>
          </div>
          <span className="rightbarfriendlistname">{onlinelist.username}</span>
        </li>
    </div>
  )
}
