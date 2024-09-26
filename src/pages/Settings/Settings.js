
import Sidebar from "../../Components/sidebar/Sidebar";
import bgImg from "../../images/Space.png";
import { Card } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function Settings() {
    return (
        <div className="Settings" style={{ display: "flex" }}>
            <div className="settingsWrapper" style={{ flex: 9, padding: "20px" }}>
                <div className="settingsTitle" 
                    style=
                        {{ 
                            display: "flex", 
                            alignItems: "center", 
                            justifyContent: "space-between"
                        }}
                >
                    <span className="settingsUpdateTitle" 
                        style=
                            {{ 
                                fontSize: "30px", 
                                marginBottom: "20px", 
                                color: "lightcoral"
                            }}
                    >Update your account</span>
                    <span className="settingsDeleteTitle" 
                        style=
                            {{ 
                                fontSize: "12px", 
                                cursor: "pointer",
                                color: "red"
                            }}
                    >Delete Account</span>
                </div>
                <form className="settingsForm" style={{ display: "flex", flexDirection: "column" }}>
                    <label>Profile Picture</label>
                    <div className="settingsPP" 
                        style=
                            {{ 
                                display: "flex", 
                                alignItems: "center", 
                                margin: "10px 0" 
                            }}
                    >
                        <Card style={{ width: "15%", height: "15%"}}>
                            <img src={bgImg} alt="" style={{width: "80px", height: "80px", objectFit: "cover" }}/>
                        </Card>
                        <label htmlFor="fileInput">
                            <UserOutlined 
                                style=
                                    {{
                                        width: "25px",
                                        height: "25px",
                                        cursor: "pointer",
                                        borderRadius: "50%",
                                        backgroundColor: "lightcoral",
                                        color: "white",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginLeft: "10px"                                        
                                    }}/>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none"}} />
                    </div>
                    <div className="FileIn" 
                        style=
                            {{ 
                                display: "flex", 
                                flexDirection: "column",
                                width: "80%",
                                marginLeft: "110px"
                            }}
                    >
                        <label style={{ fontSize: "20px", marginTop: "10px"}}>Username</label>
                        <input type="text" placeholder="Miriam" 
                            style=
                                {{ 
                                    color: "gray", 
                                    margin: "10px 0", 
                                    height: "20px", 
                                    border: "none", 
                                    borderBottom: "1px solid lightGray"
                                }}
                        />
                        <label style={{ fontSize: "20px", marginTop: "10px"}}>Email</label>
                        <input type="text" placeholder="miriamnyaboke816@gmail.com" 
                            style=
                                {{ 
                                    color: "gray", 
                                    margin: "10px 0", 
                                    height: "20px", 
                                    border: "none", 
                                    borderBottom: "1px solid lightGray"
                                }}/>
                        <label style={{ fontSize: "20px", marginTop: "10px"}}>Password</label>
                        <input type="password" 
                            style=
                                {{ 
                                    color: "gray", 
                                    margin: "10px 0", 
                                    height: "20px", 
                                    border: "none", 
                                    borderBottom: "1px solid lightGray"
                                }} 
                        />
                    </div>                    
                    <button className="settingsSubmit" 
                        style=
                            {{
                                cursor: "pointer",
                                width: "150px",
                                alignSelf: "center",
                                border: "none",
                                borderRadius: "10px",
                                color: "white",
                                backgroundColor: "teal",
                                padding: "10px",
                                marginTop: "20px"
                            }}
                    >
                    Update
                    </button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}