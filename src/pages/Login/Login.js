
import { Button, Form } from "antd";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="Login" 
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
            <span className="LoginTitle" 
                style=
                    {{
                        fontSize: "50px"
                    }}
            >Login</span>
            <Form className="LoginForm" 
                style=
                    {{ 
                        marginTop: "20px", 
                        display: "flex", 
                        flexDirection: "column"
                    }}
            >
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
                            backgroundColor: "lightcoral",
                            color: "white",
                            padding: "10px"
                        }}
                ><Link to="/Write">Login</Link></Button>
            </Form>
            <Button className="loginRegisterButton" 
                style=
                    {{
                        position: "absolute",
                        top: "60px",
                        right: "20px",
                        backgroundColor: "teal",
                        cursor: "pointer",
                        padding: "10px",
                        color: "white"
                    }}><Link to="/Contact">Register</Link></Button>
        </div>
    )
}