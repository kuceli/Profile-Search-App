import { useState } from "react";
import { userProfiles } from "../Data/users";

export default function SearchApp() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div>
      <div className="searchContainer">
        <input
          type="text"
          id="message"
          name="message"
          placeholder="Search by name..."
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
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
                <div className="picture">
                  <img src={user.picture} />
                </div>
                <div className="userInfo" style={{ fontSize: "12px" }}>
                  <div style={{ fontWeight: "400", color: "#848A93" }}>
                    {user.id}
                  </div>
                  <div style={{ fontWeight: "600", color: "#848A93" }}>
                    {user.title} {user.firstName} {user.lastName}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
