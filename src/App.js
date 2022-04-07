import "./styles.css";
import React, { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <MyForm />
    </div>
  );
}

const MyForm = () => {
  const [LoggedIn, setLoggedIn] = useState(false);

  const toggleLogIn = () => {
    if (userInfo.uname === "admin" && userInfo.pword === "adminpassword") {
      setLoggedIn(!LoggedIn);
    }
  };

  function Header(props) {
    switch (props.headerType) {
      case "adminLoggedIn":
        return (
          <div className="greeting-header">
            <h1>Hello, {props.text}!</h1>
          </div>
        );
      default:
        return <h1>{props.text}</h1>;
    }
  }

  const [userInfo, setUserInfo] = useState({
    uname: "",
    pword: ""
  });

  return (
    <div>
      {LoggedIn ? (
        <Header headerType="adminLoggedIn" text={userInfo.uname} />
      ) : (
        <form>
          <Header text="Login Page" />
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              value={userInfo.uname}
              onChange={(e) =>
                setUserInfo((value) => {
                  return { ...value, uname: e.target.value };
                })
              }
            />
          </div>

          <label>Password</label>
          <input
            type="password"
            value={userInfo.pword}
            onChange={(e) =>
              setUserInfo((value) => {
                return { ...value, pword: e.target.value };
              })
            }
          />
        </form>
      )}
      <button onClick={toggleLogIn}>{LoggedIn ? "Log Out" : "Log In"}</button>
    </div>
  );
};
