import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
export default function Post() {
  return (
    <div className="postcontainer">
      <div className="postwrapper">
        <div className="posttop">
          <div className="PostTopLeft">
            <img src="/assests/person/download.jfif" alt="profile" className="postprofile"/>
            <span className="Postname">Nithish</span>
            <span className="posttiming">5 Min Ago</span>
          </div>
          <div className="PostTopRight">
            <MoreVertIcon className="postoptionicon"/>
          </div>
        </div>
        <div className="postcenter">
          <span className="text">Hey its my first post</span>
          <img className="postimage" src="/assests/person/img2.jpg" alt="" />
        </div>
        <div className="postbottom">
          <div className="postbottomleft">
          <ThumbUpIcon htmlColor="blue"className="likeicon"/>
          <FavoriteIcon htmlColor="red" className="likeicon"/>
          <span className="likes">32 likes</span>
          </div>
          <div className="postbottomright">
            <CommentIcon className="likeicon"/>
            <span className="likes">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
