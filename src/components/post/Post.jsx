import "./post.css"
import {useState} from "react"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import {Users} from "../../dummydata"
export default function Post({post}) {
  const[like,setlike]=useState(post.like)
  const[islike,setislike]=useState(false)
  const likehandler=()=>{
    console.log("clicked")
    setlike(islike? like-1:like+1);
    setislike(!islike)
  }
    return (
    <div className="postcontainer">
      <div className="postwrapper">
        <div className="posttop">
          <div className="PostTopLeft">
            <img src={Users.filter(u=>u.id===post.id)[0].profilePicture} alt="profile" className="postprofile"/>
            <span className="Postname">{Users.filter(u=>u.id===post.userId)[0].username}</span>
            <span className="posttiming">{post.date}</span>
          </div>
          <div className="PostTopRight">
            <MoreVertIcon className="postoptionicon"/>
          </div>
        </div>
        <div className="postcenter">
          <span className="text">{post?.desc}</span>
          <img className="postimage" src={post.photo} alt="" />
        </div>
        <div className="postbottom">
          <div className="postbottomleft">
          <ThumbUpIcon htmlColor="blue"className="likeicon" onClick={likehandler}/>
          <FavoriteIcon htmlColor="red" className="likeicon" onClick={likehandler}/>
          <span className="likes">{like}</span>
          </div>
          <div className="postbottomright">
            <CommentIcon className="likeicon"/>
            <span className="likes">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
