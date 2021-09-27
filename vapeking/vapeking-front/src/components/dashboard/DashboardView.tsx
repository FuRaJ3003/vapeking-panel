import * as React from 'react';
import { Query, Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { RouteComponentProps } from 'react-router-dom';
import { Markup } from 'interweave';

// React Icons
import { BsFillCircleFill } from "react-icons/bs";
import { FcShop, FcAlarmClock, FcCalendar, FcBusinessman, FcDepartment } from "react-icons/fc";

import { VerifyToken, VerifyTokenVariables } from '../../schemaTypes';
import { UserQuery, UserQueryVariables } from '../../schemaTypes';
import Clock from "./DateTimeComponent";
import Cookies from 'universal-cookie';
import '../styles/dashboard.css';


const cookies = new Cookies();
const token: string = cookies.get('jws_token');
const email: string = cookies.get('user_email');


const verifyTokenMutation = gql`
    mutation VerifyToken($token: String!){
        verifyToken(token: $token){
            payload
        }
    }
    `

const userQuery = gql`
    query UserQuery($email: String!){
      userEmail(email: $email){
        id
        email
        name
        surename
        store{
          id
          city
          name
        }
        isstaff
        isadmin
        isactive
        ismanager
        isSuperuser
      }
    }
    `;



export class DashboardView extends React.PureComponent<RouteComponentProps<{}>> {

    state = {
        token: token
    }
     
    render() {
        return (
            
            <Mutation<VerifyToken, VerifyTokenVariables> mutation={verifyTokenMutation}>
                {mutate => (
                    
            <Query<UserQuery, UserQueryVariables> query={userQuery} variables={{email}}>
                {
                
                ({ data, loading }) => {
                    if (loading) return null;
                    if (!data) return <div> data is undefined </div>;

                    // Premission setting
                    if (data) var rank = "[?]"
                    if (data.userEmail.isSuperuser) rank = "<span id='rank_superuser'>[S-ADMINISTRATOR]</span>";
                    else if (data.userEmail.isadmin) rank = "<span id='rank_admin'>[ADMINISTRATOR]</span>";
                    else if (data.userEmail.ismanager) rank = "<span id='rank_manager'>[KIEROWNIK]</span>";
                    else if (data.userEmail.isstaff) rank = "<span id='rank_staff'>[PRACOWNIK]</span>";
                    else if (!data.userEmail.isactive) return <div> User in unactive </div>;
                
                    return (        
                    <div>
                        <div id="sidenav">
                            <div id="nav_top">
                                <img src="https://i.imgur.com/zgdzTJU.png"></img>
                                <p id="side_name"> {data.userEmail.name} {data.userEmail.surename} </p> 
                                <p id="side_status"> <span id="status_i"><BsFillCircleFill/></span> Online<Markup content={rank}/></p>
                            </div>
            
                            <div id="nav_info">
                                <p><FcDepartment/> {data.userEmail.store.city}</p>
                                <p><FcShop/> {data.userEmail.store.name} [ID: {data.userEmail.store.id}] </p>
                                <p><FcAlarmClock/> <Clock /></p>
                                <p><FcCalendar/> {new Date().toLocaleDateString() + ''}</p> 
                            </div>
            
                            <div id="nav_store">
                                <h3><FcBusinessman/> Twój Sklep</h3>
                                <a href="#about">Osoba 1</a>
                                <p><span id="status_i_on"><BsFillCircleFill/></span> Online <span id="rank_admin">[ADMINISTRATOR]</span></p>
                                <a href="#services">Osoba 2</a>
                                <p><span id="status_i_on"><BsFillCircleFill/></span> Online <span id="rank_manager">[KIEROWNIK]</span></p>
                                <a href="#clients">Osoba 3</a>
                                <p><span id="status_i_of"><BsFillCircleFill/></span> Offline <span id="rank_staff">[PRACOWNIK]</span></p>
                                <a href="#contact">Osoba 4</a>
                                <p><span id="status_i_of"><BsFillCircleFill/></span> Offline <span id="rank_staff">[PRACOWNIK]</span></p>
                            </div>
            
                        </div>
                        <button onClick={async () => {this.props.history.push('/login');}}>
                            <div id="nav_logout">
                                <p>WYLOGUJ SIĘ</p>
                            </div>
                        </button>
            
                        <div id="main">
                          <h2>JustVape</h2>
                          <p>Jak tu jest ku#%a pięknie!</p>
                          <p>O jak ja was wszystkich kocham! </p>
                          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    );
                }}
            
            </Query>
                )}
            </Mutation>
        );
        }
    }


                                {/* <button onClick={ async() => {
                                const response = await mutate({
                                    variables: this.state
                                });
                                console.log(response);
                                }}>
                            </button> */}