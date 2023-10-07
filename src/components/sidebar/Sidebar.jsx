
import { Link } from "react-router-dom";
import "./sidebar.css"
import { LineStyle , Timeline , TrendingUp, Person, Storefront , Paid , BarChart, MailOutline, Forum , Message, BusinessCenter, ReportProblem} from '@mui/icons-material';

export default function sidebar() {
  return (
    <div className = "sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Dashboard</h3>  
              <ul className="sidebarList">
                <Link to ="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon"/>
                Home
                </li>
                </Link>
                <li className="sidebarListItem">
                <Timeline className="sidebarIcon"/>
                Analytics
                </li>
                <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon"/>
                Sales
                </li>
              
              
              
              </ul>

            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Quick Menu</h3>  
              <ul className="sidebarList">
                <Link to="/users" className="link" >
                <li className="sidebarListItem">
                <Person className="sidebarIcon"/>
                Users
                </li>
                
                </Link>
              
              <Link to="/products" className="link">
                <li className="sidebarListItem">
                <Storefront className="sidebarIcon"/>
                Products
                </li>
                </Link>
                <li className="sidebarListItem">
                <Paid className="sidebarIcon"/>
                Transactions
                </li>
                <li className="sidebarListItem">
                <BarChart className="sidebarIcon"/>
                Reports
                </li>
              
              
              
              </ul>

            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Notifications</h3>  
              <ul className="sidebarList">
              <li className="sidebarListItem active">
                <MailOutline className="sidebarIcon"/>
                Mail
                </li>
                <li className="sidebarListItem">
                <Forum className="sidebarIcon"/>
                Feedback
                </li>
                <li className="sidebarListItem">
                <Message className="sidebarIcon"/>
                Messages
                </li>
              
              
              
              </ul>

            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Staff</h3>  
              <ul className="sidebarList">
              <li className="sidebarListItem">
                <BusinessCenter className="sidebarIcon"/>
                Manage
                </li>
                <li className="sidebarListItem">
                <Timeline className="sidebarIcon"/>
                Analytics
                </li>
                <li className="sidebarListItem">
                <ReportProblem className="sidebarIcon"/>
                Reports
                </li>
              
              
              
              </ul>

            </div>
        </div>
      

    </div>
  )
}
