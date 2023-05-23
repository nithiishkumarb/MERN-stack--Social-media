import "./share.css"
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TagFacesIcon from '@mui/icons-material/TagFaces';
export default function Share() {
  return (
    <div className="sharecontainer">
        <div className="sharewrapper">
            <div className="sharetop">
                <img src="/assests/person/download.jfif" alt="profile" className="shareprofileimg" />
                <input type="text" placeholder="what's in your mind nithish" className="shareprofileinput"/>
            </div>
            <hr className="sharehr"/>
            <div className="sharebottom">
                <div className="shareprofileitems">
                    <div className="shareprofileitem">
                        <PhotoLibraryIcon htmlColor="red" className="shareprofileicon"/>
                        <span className="shareprofileitemtext">Photo or video</span>
                    </div>
                    <div className="shareprofileitem">
                        <LabelImportantIcon htmlColor="blue" className="shareprofileicon"/>
                        <span className="shareprofileitemtext">Tag</span>
                    </div>
                    <div className="shareprofileitem">
                        <LocationOnIcon htmlColor="green" className="shareprofileicon"/>
                        <span className="shareprofileitemtext">Location</span>
                    </div>
                    <div className="shareprofileitem">
                        <TagFacesIcon htmlColor="goldenrod"className="shareprofileicon"/>
                        <span className="shareprofileitemtext">Feelings</span>
                    </div>
                </div>
                <button className="shareprofilebtn">Share</button>
            </div>
        </div>
    </div>
  )
}
