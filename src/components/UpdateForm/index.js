import React, { useState } from "react";
import "./index.css";
function UpdateForm(props) {
  //   const { user } = props.location.state;
  //   console.log(props);
  //   const { id, name, email, role } = user;
  //   const [userName, setUsername] = useState(name);
  //   const [userEmail, setUserEmail] = useState(email);
  //   const [userRole, setUserRole] = useState(role);
  //   let [userNameErrMsg, setUserNameErrMsg] = useState("");
  //   let [userEmailErrMsg, setUserEmailErrMsg] = useState("");

  //   const afterSubmit = (event) => {
  //     event.preventDefault();
  //     validateData();
  //   };

  //   const validateData = () => {
  //     userNameErrMsg = userName === "" ? "*Required" : "";
  //     userEmailErrMsg = userEmail === "" ? "*Required" : "";
  //     setUserNameErrMsg(userNameErrMsg);
  //     setUserEmailErrMsg(userEmailErrMsg);
  //   };

  //   return (
  // <div>
  //   <div>
  //     <form onSubmit={afterSubmit}>
  //       <label htmlFor="username">Name</label>
  //       <br />
  //       <input
  //         value={userName}
  //         onChange={(event) => setUsername(event.target.value)}
  //       />
  //       <br />
  //       <p className="errMsg">{userNameErrMsg}</p>
  //       <label htmlFor="email">Email</label>
  //       <br />
  //       <input
  //         value={userEmail}
  //         onChange={(event) => setUserEmail(event.target.value)}
  //       />
  //       <br />
  //       <p className="errMsg">{userEmailErrMsg}</p>
  //       <label htmlFor="role">Role</label>
  //       <br />
  //       <select onChange={(event) => setUserRole(event.target.value)}>
  //         <option selected={userRole === "member"} value="member">
  //           Member
  //         </option>
  //         <option selected={userRole === "admin"} value="admin">
  //           Admin
  //         </option>
  //       </select>
  //       <br />
  //       <input type="submit" />
  //     </form>
  //   </div>
  // </div>
  //   );
  return <h1>Update Form</h1>;
}
export default UpdateForm;
