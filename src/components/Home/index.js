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
    console.log("componentDidMount triggered");
    this.getUsersDataFromAPI();
  }

  getUsersDataFromAPI = async () => {
    let usersData = localStorage.getItem("usersData");
    console.log("userData", usersData);
    if (usersData == null) {
      console.log("inside the if loop");
      const apiUrl =
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
      const response = await fetch(apiUrl);
      usersData = await response.json();
      const users = JSON.stringify(usersData);
      localStorage.setItem("usersData", users);
    }
    /**
     * handle the
     */

    // this.setState({
    //   filteredUsersData: usersData,
    //   existingUserList: usersData,
    // });
  };

  getFilteredUsersData = () => {
    const users = localStorage.getItem("usersData");
    console.log("line 43 from Home", users);
    const existingUserList = JSON.parse(users);
    const { searchInput, deletedUserIdList } = this.state;
    const searchFilter = existingUserList.filter((user) => {
      const { name, email, role } = user;

      return (
        name.toLowerCase().includes(searchInput.toLowerCase()) ||
        email.toLowerCase().includes(searchInput.toLowerCase()) ||
        role.toLowerCase().includes(searchInput.toLowerCase())
      );
    });
    // this.setState({ filteredUsersData: searchFilter });
    return searchFilter;
  };

  onSearch = (event) => {
    this.setState(
      { searchInput: event.target.value },
      this.getFilteredUsersData
    );
  };

  deleteUser = (id) => {
    // const { existingUserList } = this.state;
    const { existingUserList } = JSON.parse(localStorage.getItem("usersData"));
    const data = existingUserList.filter((user) => !(user.id === id));
    this.setState({ existingUserList: data });
    localStorage.setItem("usersData", data);
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

    localStorage.setItem("usersData", data);

    // this.setState({
    //   selectedCheckBoxIdList: [],
    //   existingUserList: data,
    //   filteredUsersData: data,
    // });
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
    const { searchInput, isAllChecked, selectedCheckBoxIdList } = this.state;
    const filteredUsersData = this.getFilteredUsersData();

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
