
import { Card } from "antd";
import bgImg from "../../images/miriam.png";
import { EditFilled, DeleteFilled } from "@ant-design/icons"
export default function Single() {
    return (
        <div className="SinglePost" style={{ flex: 9 }}>
           <div className="SinglePostWrapper">
                <Card style={{ width: "100%", height: "100%"}}>
                    <img 
                        style={{ width: "100%", height: "100%"}}
                        src={bgImg} 
                        alt=""
                    />
                </Card>
                <h1                     
                    style=
                    {{ 
                        textAlign: "center", 
                        margin: "10px", 
                        fontSize: "28px", 
                        fontFamily: "Lora, serif", 
                        display: "flex"
                    }}
                >
                    Note that the development build is not optimized.                    
                    <div className="SinglePostEdit" style={{ paddingLeft: "200px", cursor: "pointer"}}>
                        <EditFilled style={{ paddingRight: "10px", color: "teal"}}/>
                        <DeleteFilled style={{ color: "tomato"}}/>
                    </div>
                </h1>
                <div className="SinglePostInfo" 
                    style=
                    {{ 
                        marginBottom: "20px", 
                        display: "flex", 
                        justifyContent: "space-between",
                        fontSize: "20px",
                        color: "#b39656",
                        fontFamily: "Varela Round, sans-serif",
                        marginLeft: "10px",
                        marginRight: "10px"
                    }}
                >
                    <span className="SinglePostAuthor">
                        Author: <b>Miriam</b>
                    </span>
                    <span className="SinglePostDate">
                        1 hour ago
                    </span>                    
                </div>
                <p style={{ color: "#666", fontSize: "20px", lineHeight: "25px"}}>Notice the use of %PUBLIC_URL% in the tags above.
                   It will be replaced with the URL of the `public` folder during the build.
                   Only files inside the `public` folder can be referenced from the HTML.
                </p>
            </div>              
        </div>
    )
}