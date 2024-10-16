import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from "./components/Form";
import TableData from './components/TableData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      editData: null,
    };
  }

  handleAddUser = (userDetails) => {
    this.setState((prevState) => {
      const updatedUserData = [...prevState.userData];
      if (prevState.editData !== null) {
        updatedUserData[prevState.editData] = userDetails;
      } else {
        updatedUserData.push(userDetails);
      }
      return { userData: updatedUserData, editData: null };
    });
  }

  handleEditUser = (index) => {
    this.setState({
      editData: index,
    });
  }

  handleDeleteUser = (index) => {
    this.setState((prevState) => {
      const updatedData = [...prevState.userData];
      updatedData.splice(index, 1);
      return { userData: updatedData };
    });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={
                <Form
                  onAddUser={this.handleAddUser}
                  editData={this.state.editData !== null ? this.state.userData[this.state.editData] : null}
                />
              }
            />
            <Route
              path='/Table'
              element={
                <TableData
                  data={this.state.userData}
                  onEditUser={this.handleEditUser}
                  onDeleteUser={this.handleDeleteUser}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
