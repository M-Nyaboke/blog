
import { Button, Form } from "antd";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="Register" 
            style=
                {{
                    height: "calc (100vh - 50px) ",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",                    
                    backGroundSize: "cover",
                    alignItems: "center"   
                }}
        >
            <span className="RegisterTitle" 
                style=
                    {{
                        fontSize: "50px"
                    }}
            >Register</span>
            <Form className="RegisterForm" 
                style=
                    {{ 
                        marginTop: "20px", 
                        display: "flex", 
                        flexDirection: "column"
                    }}
            >
                <label style={{ margin: "10px 0"}}>UserName</label>
                <input type="text" placeHolder="Enter your name..." 
                    style={{ padding: "10px", border: "none", backgroundColor: "white"}}
                />
                <label style={{ margin: "10px 0"}}>Email</label>
                <input type="text" placeHolder="Enter your email..." 
                    style={{ padding: "10px", border: "none", backgroundColor: "white"}}
                />
                <label style={{ margin: "10px 0"}}>Password</label>
                <input type="text" placeHolder="Enter your password..." 
                    style={{ padding: "10px", border: "none", backgroundColor: "white"}}
                />
                <Button className="loginButton" 
                    style=
                        {{
                            marginTop: "20px",
                            cursor: "pointer",
                            backgroundColor: "teal",
                            color: "white",
                            padding: "10px"
                        }}
                ><Link to="/Login">Register</Link></Button>
            </Form>            
        </div>
    )
}