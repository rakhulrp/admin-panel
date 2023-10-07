
import "./Topbar.css"
import { NotificationsNone, Language , Settings } from "@mui/icons-material"

export default function topbar() {
  return (
    <div className="topbar" >
        
        <div className="topbarWrapper">
            <div className="topLeft">
            <span className='logo'>Admin Panel</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                <NotificationsNone/>
                <span className="topIconBadge">2</span>
                </div>

                <div className="topbarIconContainer">
                <Language/>
                <span className="topIconBadge">2</span>
                </div>

                <div className="topbarIconContainer">
                <Settings/>
                </div>
              <img src="https://images.pexels.com/photos/18306267/pexels-photo-18306267/free-photo-of-young-woman-posing-at-a-fashion-shoot-next-to-a-building-on-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="topAvatar"/>
            </div>
        </div>
    </div>
  )
}
