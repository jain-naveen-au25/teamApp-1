import React from 'react';
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddPost from "./components/addMember";
// import EditContact from "./components/EditContact";
// import Home from "./components/Home";
import Navbar from "./components/navbar/inde";
import './App.css';

function App() {
  return (
    <main>
      <ToastContainer/>
      <Navbar/>
      <Route exact path="/edit/:id" component={() => <EditContact />} />
    </main>
  );
}

export default App;