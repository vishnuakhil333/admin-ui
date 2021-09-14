import { Component } from "react";
import User from "../User";
import "./index.css";

class Home extends Component {
  state = {
    filteredUsersData: [],
    searchInput: "",
    isAllChecked: false,
    deletedUserIdList: [],
    existingUserList: [],
    selectedCheckBoxIdList: [],
  };

  componentDidMount() {
    this.getUsersDataFromAPI();
  }

  getUsersDataFromAPI = async () => {
    const apiUrl =
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
    const response = await fetch(apiUrl);
    const usersData = await response.json();
    this.setState({
      filteredUsersData: usersData,
      existingUserList: usersData,
    });
  };

  getFilteredUsersData = () => {
    const { existingUserList, searchInput, deletedUserIdList } = this.state;
    const searchFilter = existingUserList.filter((user) => {
      const { name, email, role } = user;

      return (
        name.toLowerCase().includes(searchInput.toLowerCase()) ||
        email.toLowerCase().includes(searchInput.toLowerCase()) ||
        role.toLowerCase().includes(searchInput.toLowerCase())
      );
    });
    this.setState({ filteredUsersData: searchFilter });
  };

  onSearch = (event) => {
    this.setState(
      { searchInput: event.target.value },
      this.getFilteredUsersData
    );
  };

  deleteUser = (id) => {
    const { existingUserList } = this.state;
    const data = existingUserList.filter((user) => !(user.id === id));
    this.setState({ filteredUsersData: data, existingUserList: data });
  };

  onCheckInput = (event) => {
    if (event.target.checked) {
      console.log("selected all the contactcs in this page");
    }
  };

  onDeleteSelected = () => {
    const { selectedCheckBoxIdList, existingUserList } = this.state;
    const data = existingUserList.filter((user) => {
      return !selectedCheckBoxIdList.includes(user.id);
    });
    this.setState({
      selectedCheckBoxIdList: [],
      existingUserList: data,
      filteredUsersData: data,
    });
  };

  addSelectedCheckboxId = (id) => {
    const { selectedCheckBoxIdList } = this.state;
    selectedCheckBoxIdList.push(id);
    this.setState({ selectedCheckBoxIdList });
  };

  selectAllCheckbox = (event) => {
    let { isAllChecked } = this.state;
    // if (event.target.checked) {
    //   isAllChecked = true;
    // } else {
    //   isAllChecked = false;
    // }
    this.setState({ isAllChecked: !isAllChecked });
  };

  render() {
    const {
      filteredUsersData,
      searchInput,
      isAllChecked,
      selectedCheckBoxIdList,
    } = this.state;
    // const filteredUsersData = this.getFilteredUsersData();
    const userListContainerElement = document.getElementsByClassName(
      "userlist-container"
    );

    return (
      <div>
        <div className="userlist-section">
          <input
            className="search-input"
            placeholder="Search by name,email or role"
            onChange={this.onSearch}
            value={searchInput}
          />
          <button type="button" onClick={this.onDeleteSelected}>
            Delete Selected
          </button>
          <div className="">
            {/* <ul className="userlist-container">
              <li className="table-header">
                <input
                  type="checkbox"
                  className=""
                  // onChange={onCheckedBox}
                  //   value=
                />
                <p className="">Name</p>
                <p>Email</p>
                <p>Role</p>
                <p>Actions</p>
              </li>
              {filteredUsersData.map((user) => (
                <User key={user.id} user={user} deleteUser={this.deleteUser} />
              ))}
            </ul> */}

            <table className="userlist-container">
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      className=""
                      onChange={this.selectAllCheckbox}
                      // value={}
                    />
                  </th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsersData.map((user) => (
                  <User
                    key={user.id}
                    user={user}
                    deleteUser={this.deleteUser}
                    addSelectedCheckboxId={this.addSelectedCheckboxId}
                    isAllChecked={isAllChecked}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
