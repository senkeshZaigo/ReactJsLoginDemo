import React from "react";
import Dashboard from "./DashBoardNew";
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
 
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <ProtectedRoute path="/dashboard">
          <Dashboard />
        </ProtectedRoute>
        <Route exact path="/">
          <Redirect exact from="/" to="dashboard" />
        </Route>
        <Route path="*">
          <Redirect from="/" to="dashboard" />
        </Route>
      </Switch>
    </Router>
  );
}

//export default App;
// import React, { Component } from 'react';
// import './App.css';
// import axios from 'axios';
// import { BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom';
// import ListPage from './ListPage';



// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = { email: '', password: '', errorMessage: '' ,toDashboard: false};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleChangePassword = this.handleChangePassword.bind(this);

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }


//   componentDidMount() {
//     // axios.get(`https://jsonplaceholder.typicode.com/users`)
//     //   .then(res => {
//     //     const persons = res.data;

//     //     console.log("Response  "+JSON.stringify(persons))

//     //     //this.setState({ persons });
//     //   })
//   }



//   handleChange(event) {
//     this.setState({ email: event.target.value });
//   }

//   handleChangePassword(event) {
//     this.setState({ password: event.target.value });
//   }

//   handleSubmit(event) {
//     //  alert('A name was submitted: ' + this.state.value);
//     console.log("inputEmail : " + this.state.email)
//     console.log("inputPassword : " + this.state.password)





//     if (this.state.email === '') {

//       alert('Enter email');

//     } else if (this.state.password === '') {


//       alert('Enter password');


//     }


//     if (this.state.email !== '' && this.state.password !== '') {



//       const user = {
//         email: this.state.email,
//         password: this.state.password
//       };

//       console.log('given Data'+JSON.stringify(user))

//       axios.post(`http://80.211.233.121/selma-housing/api/auth/login`,  user )
//         .then(res => {
//           console.log(res);
//           console.log(res.data);

//           // const dataResponse = res.data;


//           if( res.data['access_token'] == undefined ) {


//           if (res.data.hasOwnProperty("errors")) {

//             if (res.data["errors"]["email"] != undefined) {
//               // this.presentAlertMessage("",res["errors"]["email"]);
//               this.setState({ errorMessage: res.data["errors"]["email"] })


//               console.log("errrorr" + res.data["errors"]["email"]);

//             } else if(res.data["errors"]["password"] != undefined){
//             //  this.presentAlertMessage("",res["errors"]["password"]);

//             this.setState({ errorMessage: res.data["errors"]["password"] })


//             console.log("errrorr" + res.data["errors"]["password"]);


//             }


//           }else{


//             this.setState({ errorMessage: res.data["message"] })




//           }

//           }else{


//             this.setState({ errorMessage: "success",toDashboard : true })

//           }


//         })



//     }




//     event.preventDefault();
//   }

//   render() {

//     if (this.state.toDashboard) {
//       return <Router to='/ListPage' />
//     }


//     return (

   

//       <div className="App">
//         <Router>
//         <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <p>
//             Login
//               </p>
//           <form onSubmit={this.handleSubmit}>
//             <label>
//               Email:
//           <input type="text" value={this.state.email} onChange={this.handleChange} />
//             </label>

//             <br></br>

//             <label>
//               Password:
//           <input type="text" value={this.state.password} onChange={this.handleChangePassword} />
//             </label>
//             <br></br>


//             <p>{this.state.errorMessage}</p>



//             <input type="submit" value="Submit" />
//           </form>


//           <p></p>

//           {/* <a
//                  className="App-link"
//                 href="https://reactjs.org"
//                  target="_blank"
//                  rel="noopener noreferrer"
//                >
//                 Learn React
//                </a> */}
//         </header>
//         </Router>
//       </div>
//     );
//   }
// }

// export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {




//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>
//           test
//         </p>
//         {/* <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

// export default App;
