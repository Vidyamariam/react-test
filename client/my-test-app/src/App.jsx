import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import "./App.css";
import Signup from "./components/Signup";
import UserTable from "./components/UserTable";

function App() {
  return (
    <>
      <Popup trigger={<button> Add user</button>} position="right center">
        <div className="popup-div">
          <Signup />
        </div>
      </Popup>

      <UserTable />
    </>
  );
}

export default App;
