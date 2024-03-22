import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <Header />
        <div className='col-6'>
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default App;
