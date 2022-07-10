import React, { useState,useEffect, useContext} from "react";
import { userDataContext } from "../contexts/userDataContext";
import SearchIcon from "../images/icon-search.svg";
import axios from "axios";
import {Card} from "antd";
import {useSearchParams} from "react-router-dom";

function SearchBar() {
  const [inputText, setInputText] = React.useState("");
  const { error, clearError, fetchUserData } = useContext(userDataContext);
  const [users, setUsers] = useState([]);
  const [userMatch, setUsermatch] = useState([]);
  const [searchParam,setSearchParam] = useSearchParams();
  const [flag, setFlag] = useState(true);


  useEffect(() => {
    setFlag(true);
    const timeOutId = setTimeout(() => {
      (async() => {
        const response = await axios.get("https://api.github.com/search/users?"+searchParam.toString()+"&per_page=10");
        setUsers(response.data.items);
        setUsermatch(response.data.items);
      })()
    }, 400)
    return () => clearTimeout(timeOutId)
  }, [searchParam])

  function handleChange(e){ 
    const { value } = e.target;
    setInputText(value);
    clearError();
    const newSearchParam =  new URLSearchParams(searchParam);
    newSearchParam.set('q',value);
    setSearchParam(newSearchParam);
    setUsermatch(users);
}

function setter(e){
   
  if((e.target.innerHTML).length>0){
    setSearchParam({q: e.target.innerHTML});
    setInputText(e.target.innerHTML);
  }
  fetchUserData(e.target.innerHTML);
  setFlag(false);
  setUsermatch([]);
  setInputText("");
}

  function handleSubmit(e) {
    e.preventDefault();
    fetchUserData(inputText);
    setInputText("");
    setFlag(false);
  }

  return (
    <form className="user-search-bar">
      <img className="user-search-bar--icon" src={SearchIcon} alt="" />
      <input
        className="user-search-bar--input"
        type="text"
        value={inputText}
        onChange={(e)=> handleChange(e)}
        placeholder={!error ? "Search GitHub username…" : ""}
        maxLength={39} 
      />
      <button onClick={handleSubmit} className="user-search-bar--button">
        Search
      </button>
      {error && <p className="user-search-bar--no-results">No results</p>}
      {flag && userMatch && userMatch.map((item,index) => (
        <div onClick={setter} key={index} style={{marginLeft: "35%", marginTop: "5px"}}>
          <Card style={{Width: "50%"}} title={`${item.login}`}>
        </Card>
        </div>
      ))}
    </form>
  );
}

export default SearchBar;
