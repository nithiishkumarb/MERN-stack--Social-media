import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import {Posts} from "../../dummydata"
export default function feed(){
  return(
    <div className="feedcontainer">
      <div className="feedwrapper">
        <Share/>
        {Posts.map((p)=>(
          <Post key={p.id} post={p}/>
        ))}
      </div>
    </div>
  )
}
