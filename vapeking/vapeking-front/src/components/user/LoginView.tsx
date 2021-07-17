import * as React from 'react';
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { RouteComponentProps } from 'react-router-dom';

import { LoginMutationVariables, LoginMutation } from '../../schemaTypes';
import Cookies from 'universal-cookie';

import '../styles/login.css';

const loginMutation = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        tokenAuth(email: $email, password: $password){
            payload
            token
        }
    }
    `

const cookies = new Cookies();

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
        <Mutation<LoginMutation, LoginMutationVariables>mutation={loginMutation}>
            {mutate => (
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
                    
                    <button onClick={async () => {
                        const response = await mutate({
                            variables: this.state
                        });
                        console.log(response);
                        console.log(response.data.tokenAuth.token);
                        console.log(response.data.tokenAuth.payload.email);
                        cookies.set('jws_token', response.data.tokenAuth.token, { path: '/'});

                        var email = response.data.tokenAuth.payload.email;
                        email = email.replace("%40", "@")

                        cookies.set('user_email', email, { path: '/'});
                        this.props.history.push('/dashboard');
                    }}>LOGIN</button>
                </div>
            </div>
            </div>
            )}
        </Mutation>
        );
    }
}
