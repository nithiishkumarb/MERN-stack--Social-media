import "./friendlist.css"

export default function Friendlist({list}) {
  return (
    <div>
        <li className="sidebarfrnd">
            <img className="sidebarfrndlisticon" src={list.profilePicture} alt="friendimg"/>
            <span className="sidebarfrndlistname">{list.username}</span>
          </li>
    </div>
  )
}
