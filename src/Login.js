//import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import "./Login.css";
import { Redirect } from "react-router-dom";
import axios from 'axios';


class ListPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      errorMessage:'',
      loginParams: {
        email: "",
        password: ""
      }
    };
  }
  handleFormChange = event => {


   
      

    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew
    });
  };

  login = event => {
    let user_email = this.state.loginParams.email;
    let user_password = this.state.loginParams.password;



    if (user_email === "") {

      alert('Enter email');
      
    } else if (user_password === "") {
      alert('Enter password');
    }

    if (user_email !== "" && user_password !== "") {


      const user = {
                email: user_email,
                password: user_password
              };
        
              console.log('given Data'+JSON.stringify(user))
        
              axios.post(`http://80.211.233.121/selma-housing/api/auth/login`,  user )
                .then(res => {
                  console.log(res);
                  console.log(res.data);
        
                  // const dataResponse = res.data;
        
        
                  if( res.data['access_token'] == undefined ) {
        
        
                  if (res.data.hasOwnProperty("errors")) {
        
                    if (res.data["errors"]["email"] != undefined) {
                      // this.presentAlertMessage("",res["errors"]["email"]);
                      this.setState({ errorMessage: res.data["errors"]["email"] })
        
        
                      console.log("errrorr" + res.data["errors"]["email"]);
        
                    } else if(res.data["errors"]["password"] != undefined){
                    //  this.presentAlertMessage("",res["errors"]["password"]);
        
                    this.setState({ errorMessage: res.data["errors"]["password"] })
        
        
                    console.log("errrorr" + res.data["errors"]["password"]);
        
        
                    }
        
        
                  }else{
        
        
                    this.setState({ errorMessage: res.data["message"] })
        
        
        
        
                  }
        
                  }else{
        
                    localStorage.setItem("token", res.data['access_token']);
                    // this.setState({
                    //   islogged: true
                    // });
                    this.setState({ errorMessage: "success",islogged : true })
        
                  }
        
        
                })
        
        
        
            }
        

      // localStorage.setItem("token", "T");
      // this.setState({
      //   islogged: true
      // });
    
    event.preventDefault();
  };
  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <form onSubmit={this.login} className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Please log in</h1>
          <div className="row">
            <div className="col">
              <input
                type="text"
                name="email"
                onChange={this.handleFormChange}
                placeholder="Enter Username"
              />
              <input
                type="password"
                name="password"
                onChange={this.handleFormChange}
                placeholder="Enter Password"
              />
              <input type="submit" value="Login" />
            </div>
          </div>

          <p>{this.state.errorMessage}</p>
          {/* <p>user_id === "admin" && user_password === "123"</p> */}
        </form>
      </div>
    );
  }
}

export default ListPage;
