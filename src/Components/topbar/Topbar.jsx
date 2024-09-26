
import "./topbar.css";
import { Button, Typography } from "antd";
import { Link } from "react-router-dom";
import bgImg from "../../images/miriam.png";

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <label className="logo">GreeksforGreeks</label>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem" style={{ fontSize: "20px" }}>
                        <Link to="/" style={{ color: "black" }}>HOME</Link>
                    </li>
                    <li className="topListItem" style={{ fontSize: "20px" }}>
                        <Link to="/Single" style={{ color: "black" }}>ABOUT</Link></li>
                    <li className="topListItem" style={{ fontSize: "20px" }}>
                        <Link to="/Settings" style={{ color: "black" }}>CONTACT</Link></li>
                    <li className="topListItem" style={{ fontSize: "20px" }}>
                        <Link to="/Write" style={{ color: "black" }}>WRITE</Link></li>
                    <li className="topListItem" style={{ fontSize: "20px" }}>
                        <Link to="/" style={{ color: "black" }}>LOGOUT</Link></li>                    
                </ul>
            </div>           
            <div className="topRight" style={{ padding: "10px 0"}}>                
                <Link to="/Single" className="profile" style={{ display: "flex", paddingLeft: "80px", paddingBottom: "10px"}}>
                    <img src={bgImg} alt="" 
                        style={{ width: "35px", height: "35px", borderRadius: "50px"}}
                    /> 
                    <Typography.Text>Miriam Nyachae</Typography.Text>
                </Link>
                <div className="topRightItems" style={{ flexDirection: "block"}}>                    
                    <Button style={{ backgroundColor: "teal"}}>
                        <Link to="/Login">Login</Link>
                    </Button >
                    <Button style={{ backgroundColor: "teal"}}><Link to="/Register">Register</Link></Button>
                </div>                
            </div>
        </div>
    )
       
}