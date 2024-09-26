
import { Button, Card } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import bgImg from "../../images/Space.png"

export default function Write() {
    return (
        <div className="write" style={{ paddingTop: "30px"}}>            
            <img style={{ width: "1000px", height: "300px", borderRadius: "10px"}} src={bgImg} alt="" />            
            <div className="writeForm" style={{ alignItems: "center", position: "relative"}}>
                <div className="writeFormGroup" style={{ }}>
                    <label htmlFor="fileInput">
                        <PlusCircleOutlined 
                            style=
                                {{ 
                                     
                                    width: "25px", 
                                    height: "25px", 
                                    color: "gray",
                                    fontSize: "20px",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                        />                        
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none"}}/>
                    <input 
                        type="text" 
                        placeHolder="Title" 
                        className="writeInput" 
                        autoFocus={true} 
                        style=
                            {{
                                fontSize: "30px",
                                border: "none",
                                padding: "20px",
                                width: "70vw",
                                outLine: "none"
                            }}                       
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder="Tell your story..."
                        type="text"
                        className="writeInput writeText" 
                        style=  
                            {{
                                fontSize: "20px",
                                border: "none",
                                height: "100vh",
                                width: "70vw"
                            }}                      
                    ></textarea>
                </div>
                <Button type="Submit" 
                    style=
                        {{ 
                            position: "absolute ",
                            top: "20px",
                            right: "50px",
                            color: "white",
                            backgroundColor: "teal",
                            padding: "10px",
                            border: "none",
                            borderRadius: "10px",
                            cursor: "pointer",
                            fontSize: "16px"
                        }}
                >Publish</Button>
            </div>
        </div>
    )
}