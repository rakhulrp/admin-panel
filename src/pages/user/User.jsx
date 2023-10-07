import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material";
import "./user.css";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
      <div className="usertitlecontainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
        <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="https://images.pexels.com/photos/1024403/pexels-photo-1024403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="userShowImg" />
            <div className="userShowTopTitle">
            <span className="userShowUsername">Helen Perez</span>
            <span className="usershowUserTitle">Software Enginerr</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
           
           
            <div className="userShowInfo">
            <PermIdentity className="userIcon"/>
            <span className="userShowInfoTitle">Helen_07</span>
            </div>

            <div className="userShowInfo">
            <CalendarToday className="userIcon"/>
            <span className="userShowInfoTitle">07.12.1999</span>
            </div>

            <span className="userShowTitle">Contact Details</span>
           

            <div className="userShowInfo">
            <PhoneAndroid className="userIcon"/>
            <span className="userShowInfoTitle">+1 123 456</span>
            </div>

            <div className="userShowInfo">
            <MailOutline className="userIcon"/>
            <span className="userShowInfoTitle">annabeck99@gmail.com</span>
            </div>

            <div className="userShowInfo">
            <LocationSearching className="userIcon"/>
            <span className="userShowInfoTitle">New York | USA</span>
            </div>

            


          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
           <div className="userUpdateLeft">
            <div className="userUpdateItem">


              <label >Username</label>
              <input type="text" placeholder="Helen_07" className="userUpdateInput"/>
            </div>

            <div className="userUpdateItem">
              <label >Full name</label>
              <input type="text" placeholder="Helen Perez" className="userUpdateInput"/>
            </div>

            <div className="userUpdateItem">
              <label >Email</label>
              <input type="text" placeholder="annabeck99@gmail.com" className="userUpdateInput"/>
            </div>

            <div className="userUpdateItem">
              <label >Phone</label>
              <input type="text" placeholder="+1 123 456" className="userUpdateInput"/>
            </div>

            <div className="userUpdateItem">
              <label >Address</label>
              <input type="text" placeholder="New York | USA" className="userUpdateInput"/>
            </div>

        

           </div>
           <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src="https://images.pexels.com/photos/4790584/pexels-photo-4790584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="userUpdateImg" />
               <label htmlFor = "file" > <Publish className="userUpdateIcon" /> </label>
                <input type="file" id="file" style={{display: "none"}}/>
              </div>
                <button className="userUpdateButton">Update</button>

          </div>


          </form>
        </div>


      </div>
   
      </div>
  )
}
