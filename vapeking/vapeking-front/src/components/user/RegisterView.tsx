import * as React from 'react';
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { RouteComponentProps } from 'react-router-dom';
import { RegisterMutation, RegisterMutationVariables } from '../../schemaTypes';


const registerMutation = gql`
    mutation RegisterMutation($email: String!, $password: String!, $name: String!, $surename: String!) {
    	userCreate(input:{
        password:$password,
        email:$email,
        name:$name,
        surename:$surename
      })
      {
        user{
          id
          email
          name
          surename
          isactive
          isstaff
          isadmin
          ismanager
        }
      }
    }
`


export class RegisterView extends React.PureComponent<RouteComponentProps<{}>> {

    state = {
        email: '',
        password: '',
        name: '',
        surename: '',
    }

    handleChange = (e: any) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        const {password, email, name, surename} = this.state;
        return (
        <Mutation<RegisterMutation, RegisterMutationVariables>mutation={registerMutation}>
            {mutate => (
            <div style={{ display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center"
            }}>

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

                <div>
                    <input 
                    type="text"
                    name="name"
                    placeholder="Imię"
                    value={name}
                    onChange={this.handleChange}
                    />
                </div>

                <div>
                    <input 
                    type="text"
                    name="surename"
                    placeholder="Nazwisko"
                    value={surename}
                    onChange={this.handleChange}
                    />
                </div>



                <button onClick={async () => {
                    const response = await mutate({
                        variables: this.state
                    });
                    console.log(response);
                    this.props.history.push('/login');
                }}>Zarejestruj się</button>
            </div>
            )}
        </Mutation>
        );
    }
}


