
import "./sidebar.css";
import bgImg from "../../images/miriams.jpg";
import { Card } from "antd"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <Card style={{ width: "100%", height: "100%"}}>
                    <img style={{ width: "100%", height: "100%"}}
                        src={bgImg} alt=""
                    />
                </Card>                
                <p>A web developer</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Camera</li>
                </ul>
            </div>
        </div>
    );
}

