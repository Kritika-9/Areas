import React from 'react'
import "./sidebar.css"
import { LineStyle,Timeline,TrendingUp,Home,Storefront,AttachMoney,Report,Mail,DynamicFeed,ChatBubbleOutline,LocalMall} from '@material-ui/icons'
import { Link } from 'react-router-dom'

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sideWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">

                        <li className="sidebarListItem active">
                          <LineStyle className="sidebarIcon"/>
                          Home 
                        </li>

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
                      <Link to="/Areas" className="link">
                      <li className="sidebarListItem">
                          <Home className="sidebarIcon"/>
                          Areas
                        </li>
                      </Link>
                        
                       <li className="sidebarListItem">
                          <Storefront className="sidebarIcon"/>
                          Products
                        </li>
                      
                        

                        <li className="sidebarListItem">
                          <AttachMoney className="sidebarIcon"/>
                           Transaction
                        </li>

                        <li className="sidebarListItem">
                          <Report className="sidebarIcon"/>
                          Reports
                        </li>

                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">

                        <li className="sidebarListItem">
                          <Mail className="sidebarIcon"/>
                          Mail
                        </li>

                        <li className="sidebarListItem">
                          <DynamicFeed className="sidebarIcon"/>
                          Feedback 
                        </li>

                        <li className="sidebarListItem">
                          <ChatBubbleOutline className="sidebarIcon"/>
                          Messages 
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">

                        <li className="sidebarListItem">
                          <LocalMall className="sidebarIcon"/>
                          Manage
                        </li>

                        <li className="sidebarListItem">
                          <Timeline className="sidebarIcon"/>
                          Analytics 
                        </li>

                        <li className="sidebarListItem">
                          <Report className="sidebarIcon"/>
                          Reports
                        </li>
                    </ul>
                </div>


            </div>
        </div>
    )
}

