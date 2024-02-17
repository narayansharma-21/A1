import React from "react";
import ModuleList from "../Modules/List";
import Status from "./Status";

function Home() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1' }}>
        <h2>Home</h2>
        <ModuleList />
      </div>
      <div style={{ flexShrink: '0' }}>
        <h2>Status</h2>
        <div>
        <Status />
        </div>
      </div>
    </div>
  );
}

export default Home;
