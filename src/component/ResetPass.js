import React, { Component } from "react";
import { Link} from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

// function ResetPass() {
//     constructor()
//   //const param = useParams();
//   //console.log(param);
//   //const id = param.id;
//   //console.log(id);
//   //const token = param.token;

//   //states
 
// //  const [password, setPassword] = useState("");
// //   const [password1, setPassword1] = useState("");
// //   const [err, setErr] = useState("");
// //   const [info, setInfo] = useState("");

//   //handleChange()
//   const handleChange = ({ target: { name, value } }) => {
//     if (name === "password") setPassword(value);
//     if (name === "password1") setPassword1(value);
//   };

//   //handle submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setInfo("");
//     console.log("password is:  ", password);
//     // if (password.length <= 5) {
//     //   setErr("invalid password");
//     //   return false;
//     // }
//       if (password !== password1) {
//       setErr("password doesnot matching");
//       return false;
//     }
//     console.log("next try");
//     try {
//       const res = await axios.put(
//         'http://localhost:27853/api/Employee_LMS/Update/1?pass='+{password},
//         // {
//         //   password:this.state.password
//         // }
//       );
//       console.log(res);
//       setPassword("");
//       setPassword1("");
//       setErr("");
//       setInfo("Please log in again with the new password", res.data);
//     } catch (err) {
//       console.log(err);
//       setErr("Error in reset");
//     }
//   };
//   return (
//     <>
//       <div className="bg-primary card-container">
//         <Card className="card" border="secondary">
//           <Card.Header className="text-center">
//             <h4 className="text-dark">Change Password</h4>
//           </Card.Header>
//           <Card.Body>
//             <form>
//               <div className="form-group">
//                 <label htmlFor="email">Set New password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   name="password"
                  
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">Confirm password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   name="password1"
//                   value={password1}
//                   onChange={handleChange}
//                 />
//                 <p className="error">{err}</p>
//               </div>
//               <Button type="submit" onClick={handleSubmit}>
//                 Change
//               </Button>&nbsp;
//               <Link to="/login">
//                 <Button variant="primary">Login</Button>
//               </Link>
//               <div className="text-center">
//                 <p>{info}</p>
//               </div>
//             </form>
//           </Card.Body>
//         </Card>
//       </div>
//     </>
//   );
// }

// export default ResetPass;


export default class ResetPass extends Component {
    constructor(){
        super();
        this.state={
            emp_ID:"",
            password:"",
            confirm_pass:""
        }
        this.handlechange=this.handlechange.bind(this);
    }
    handlechange(e){
        this.setState(e)
    }
    
    UpdatePass(e){
        e.preventDefault();  
        let emp_Id=this.state.emp_ID;  
        let password=this.state.password; 
        axios.put("http://localhost:27853/api/Employee_LMS/Update?id="+emp_Id+"&pass="+password).
        then(result =>
            {
              console.log(result)
            
                alert("Password changed");
                window.location="/sign-in";
                
              }).catch(error=>{
                alert("error");}
              )}
    render() {
        return (
            <div>
                 <div className="bg-primary card-container">
       <Card className="card" border="secondary">
           <Card.Header className="text-center">
             <h4 className="text-dark">Change Password</h4>
           </Card.Header>
           <Card.Body>
             <form>
             <div className="form-group">
                 <label htmlFor="email">Enter your Employee Id</label>
                 <input
                  type="number"
                  className="form-control"
                  name="password"
                  
                  onChange={(e)=>this.handlechange({emp_ID:e.target.value})}
                />
              </div>
               <div className="form-group">
                 <label htmlFor="email">Set New password</label>
                 <input
                  type="password"
                  className="form-control"
                 
                  
                  onChange={(e)=>this.handlechange({password:e.target.value})}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Confirm password</label>
                <input
                  type="password"
                  className="form-control"
                 
                 
                  onChange={(e)=>this.handlechange({confirm_pass:e.target.value})}
                />
              
              </div>
              <Button type="submit" onClick={(e)=>this.UpdatePass(e)}>
                Change
              </Button>
              <div className="text-center">
            
              </div>
            </form>
          </Card.Body>
          </Card>
            </div>
            </div>
        )
    }
}
