import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Cookies from 'universal-cookie';
import '../styles/login.css';
import MakeOnline from "../dashboard/LoginComponent";




export class LoginView extends React.PureComponent<RouteComponentProps<{}>> {
    
    state = {
        email: '',
        password: '',
    }

    handleChange = (e: any) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        const {password, email} = this.state;
        return (
            <div>
            <img src="https://i.imgur.com/zgdzTJU.png"></img>
            <div style={{ display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center"
            }}>
               
                <div id="main-box">
                    <h2>PANEL PRACOWNIKA</h2>
                    <div>
                        <input 
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <input 
                        type="password"
                        name="password"
                        placeholder="Hasło"
                        value={password}
                        onChange={this.handleChange}
                        />
                    </div>

                    <p>Mam problem z logowaniem</p>
                    <div id="checkRememberMe">
                        <input type="checkbox" value="lsRememberMe" id="rememberMe"/> 
                        <label>Zapamiętaj mnie</label>
                    </div>
                    
                    <MakeOnline state={this.state}/>

                </div>
            </div>
            </div>
            )
        }
        
    };
    


// @ts-ignore: Object is possibly 'undefined'.