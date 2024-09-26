
import "./post.css";
import bgImg from "../../images/Atenza.jpg";
import { Card } from "antd";

export default function Post() {
    return (
        <div className="post">
            <Card style={{ width: "100%", height: "60%"}}>
                <img style={{ width: "100%", height: "100%"}}
                    src={bgImg}
                    alt=""
                />
            </Card>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Miriam Nyachae</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Note that the development build is not optimized.
                To create a production build, use npm run build.
                webpack compiled successfully
                Note that the development build is not optimized.
                To create a production build, use npm run build.
                webpack compiled successfully
                Note that the development build is not optimized.
                To create a production build, use npm run build.
                webpack compiled successfully
                Note that the development build is not optimized.
                To create a production build, use npm run build.
                webpack compiled successfully
            </p>
        </div>
    )
}