
import bgImg from "../../images/gradient.png";
import "./header.css";

export default function Header() {
    return (
        <div className="Header">
            <div className="HeaderTitles">
                <span className="HeaderTitlesm" style={{ paddingTop: "30px"}}>React & Node</span>
                <span className="HeaderTitlesm" style={{ paddingTop: "130px"}}>BLOG</span>
            </div> 
            <div className="image">
                <img src={bgImg} alt="" style={{ width: "1263px", height: "85vh"}}/>
            </div>          
        </div>
    )
}