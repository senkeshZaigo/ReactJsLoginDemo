

import React, { Component } from "react";
import { Redirect, Switch, Route, Link } from "react-router-dom";
//import { withRouter } from "react-router";
import "./Dashboard.css";
import axios from 'axios';


class DashBoardNew extends Component {



    constructor(props) {
        super(props);
        this.state = {
            islogout: false,
            persons: []
        };
    }


    componentDidMount() {



        console.log("Tokens : "+ localStorage.getItem('token'));


        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;

                console.log("RESPONSE" + JSON.stringify(persons))

                this.setState({ persons });
            })
    }


    signOut = () => {
        localStorage.removeItem("token");
        this.setState({
            islogout: true
        });
    };
    render() {
        if (this.state.islogout) {
            return <Redirect to="/login" />;
        }
        const { match } = this.props;
        return (
            <div>
                <ul>

<p>DashBoard</p>
                    <li className="push-right">
                        <button onClick={this.signOut} href="#">
                            Sign Out
                </button>
                    </li>
                </ul>

                <div>
                    {this.state.persons.map(person => (
                        <div key={person.name}>
                          <p><h4> Name : {person.name}</h4></p>  
                          <p><h6> Email : {person.email}</h6></p>

                            </div>

                    ))}
                </div>

                {/* {this.state.persons.map(person =>
                    <li>{person.name}</li>
                )} */}





                {/* <main role="main">
              <div className="main">
                <Switch>
                  <Route path={`${match.path}/master`}>
                    <Master />
                  </Route>
                  <Route path={`${match.path}/pos`}>
                    <Pos />
                  </Route>
                  <Route exact path={`${match.path}`}>
                    <IndexDashboard />
                  </Route> 
                   <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </div>
            </main> */}
            </div>
        );
    }
}

export default DashBoardNew;
