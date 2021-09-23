import { Component } from "react";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import "./index.css";

class User extends Component {
  // const User = (props) => {
  state = { isChecked: this.props.isAllChecked };
  onDelete = () => {
    const { user, deleteUser } = this.props;
    deleteUser(user.id);
  };

  onCheckedBox = (event) => {
    const { user, addSelectedCheckboxId } = this.props;
    // console.log(event.target.checked);
    console.log("isAllChecked status", this.props.isAllChecked);
    this.setState(
      (prevState) => ({
        isChecked: !prevState.isChecked,
      }),
      addSelectedCheckboxId(user.id)
    );
  };

  render() {
    const { isChecked } = this.state;
    // console.log(isChecked);
    const { user, isAllChecked } = this.props;
    const { id, name, email, role } = user;
    console.log(user);

    return (
      // <li className="table-header text-bold">
      //   <input
      //     type="checkbox"
      //     className=""
      //     // onChange={onCheckedBox}
      //     //   value=
      //   />
      //   <p className="">{name}</p>
      //   <p>{email}</p>
      //   <p>{role}</p>
      //   <div className="icons-container">
      //     <button type="button" className="icon">
      //       <BiEdit />
      //     </button>
      //     <button type="button" className="icon" onClick={onDelete}>
      //       <AiOutlineDelete className="trash" />
      //     </button>
      //   </div>
      // </li>

      <tr>
        <td>
          <input
            type="checkbox"
            className=""
            onChange={this.onCheckedBox}
            checked={isChecked}
            //   value=
          />
        </td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{role}</td>
        <td>
          <div className="icons-container">
            <Link to={{ pathname: `/update/${id}`, state: { user: user } }}>
              <BiEdit className="icon" />
            </Link>
            <button type="button" className="icon" onClick={this.onDelete}>
              <AiOutlineDelete className="trash" />
            </button>
          </div>
        </td>
      </tr>
    );
  }
}
// }

export default User;
