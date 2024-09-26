
import "./single.css";
import Sidebar from "../../Components/sidebar/Sidebar"
import SinglePost from "../../Components/singlepost/SinglePost"

export default function Single() {
    return (
        <div className="Single">
            <SinglePost />
            <Sidebar />
        </div>
    )
}