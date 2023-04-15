import { useState } from "react";
import { userProfiles } from "../Data/users";
import "../Styles/SearchApp.css";
import SearchBar from "./SearchBar";
import Picture from "./Picture";
import UserInfo from "./UserInfo";

export default function SearchApp() {
  const [searchInput, setSearchInput] = useState("");
  const fullName = `{user.title} {user.firstName} {user.lastName}`;
  return (
    <div>
      <div className="searchContainer">
        <SearchBar
          text={searchInput}
          eventTitle={(event) => setSearchInput(event.target.value)}
        />
        <div className="container">
          {userProfiles
            .filter(
              (user) =>
                user.firstName
                  .toLowerCase()
                  .startsWith(searchInput.toLowerCase()) ||
                user.lastName
                  .toLowerCase()
                  .startsWith(searchInput.toLowerCase()) ||
                user.title
                  .toLowerCase()
                  .startsWith(searchInput.toLowerCase()) ||
                searchInput === ""
            )
            .map((user, index) => (
              <div key={user.id} className="profileContainer">
                <Picture picUrl={user.picture} />
                <div className="userInfo" style={{ fontSize: "13px" }}>
                  <div style={{ fontWeight: "500", color: "#848A93" }}>
                    <UserInfo id={user.id} className="userId" />
                  </div>
                  <div
                    style={{
                      fontWeight: "bold",
                      color: "#626976",
                      lineHeight: "1.5rem",
                    }}
                  >
                    <UserInfo
                      title={`${user.title}.`}
                      fName={user.firstName}
                      lName={user.lastName}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
