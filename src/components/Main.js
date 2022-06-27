import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
import { userDataContext } from "../contexts/userDataContext";

function Main(props) {
  const { userData } = useContext(userDataContext);
  return (
    <main>
      <SearchBar/>
      {userData && <UserCard/>}
    </main>
  );
}

export default Main;
