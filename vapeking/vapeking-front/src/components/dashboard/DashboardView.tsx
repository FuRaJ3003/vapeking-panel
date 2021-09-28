import * as React from 'react';
import { Query, Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { RouteComponentProps } from 'react-router-dom';
import { Markup } from 'interweave';
import  Cookies  from 'universal-cookie';

// React Icons
import { GiModernCity, GiShop } from "react-icons/gi"
import { BiTimeFive } from "react-icons/bi";
import { IoCalendarSharp } from "react-icons/io5";

import { ImUserTie } from "react-icons/im";
import { BsFillCircleFill } from "react-icons/bs";
import { FcShop, FcAlarmClock, FcCalendar, FcBusinessman, FcDepartment } from "react-icons/fc";

// Locals
import { VerifyToken, VerifyTokenVariables } from '../../schemaTypes';
import { UserQuery, UserQueryVariables, UsersStoreQuery, UsersStoreQueryVariables} from '../../schemaTypes';
import Clock from "./DateTimeComponent";
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

const usersStoreQuery = gql`
    query UsersStoreQuery($user_store_id: ID!){
      usersStore(storeId: $user_store_id){
        id
        email
        name
        surename
        isstaff
        isadmin
        isactive
        ismanager
        isSuperuser
        lastLogin
        store{
          id
          city
          name
        }
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
                    
                    if (data) var rank = "[?]"
                    if (data.userEmail.isSuperuser) rank = "<span id='rank_superuser'>[S-ADMINISTRATOR]</span>";
                    else if (data.userEmail.isadmin) rank = "<span id='rank_admin'>[ADMINISTRATOR]</span>";
                    else if (data.userEmail.ismanager) rank = "<span id='rank_manager'>[KIEROWNIK]</span>";
                    else if (data.userEmail.isstaff) rank = "<span id='rank_staff'>[PRACOWNIK]</span>";
                    else if (!data.userEmail.isactive) return <div> User in unactive </div>;
                    
                    // const user_store_id: number= +data.userEmail.store.id;
                    const user_store_id: number = data.userEmail.store.id;
                    return (        
                    <div>
                        <div id="sidenav">
                            <div id="nav_top">
                                <img src="https://i.imgur.com/zgdzTJU.png" alt="justVape LOGO"></img>
                                <p id="side_name"> {data.userEmail.name} {data.userEmail.surename} </p> 
                                <p id="side_status"> <span id="status_i"><BsFillCircleFill/></span> Online<Markup content={rank}/></p>
                            </div>
            
                            <div id="nav_info">
                                <p><GiModernCity/> {data.userEmail.store.city}</p>
                                <p><GiShop/> {data.userEmail.store.name} [ID: {data.userEmail.store.id}] </p>
                                <p><BiTimeFive/> <Clock /></p>
                                <p><IoCalendarSharp/> {new Date().toLocaleDateString() + ''}</p> 
                            </div>
            
                            <div id="nav_store">
                                <h3><ImUserTie/> Twój Sklep</h3>
                                
                                <Query<UsersStoreQuery, UsersStoreQueryVariables> query={usersStoreQuery} variables={{user_store_id}}>
                                { ({ data, loading }) => {

                                    if (loading) return null;
                                    if (!data) return <div> ERROR: On loading Store Data </div>;

                                    var users_render: string = ""

                                    for (let i in data.usersStore) {
                                        if(data.usersStore[i].name) users_render += "<a>" + data.usersStore[i].name +
                                            " " + data.usersStore[i].surename + "</a>";
                                        else users_render += "<a> Anonimowy Użytkownik </a>";

                                        var other_rank = " [NIEZNANY]";
                                        if (data.usersStore[i].isSuperuser) other_rank = "<span id='rank_superuser'>[S-ADMINISTRATOR]</span>";
                                        else if (data.usersStore[i].isadmin) other_rank = "<span id='rank_admin'>[ADMINISTRATOR]</span>";
                                        else if (data.usersStore[i].ismanager) other_rank = "<span id='rank_manager'>[KIEROWNIK]</span>";
                                        else if (data.usersStore[i].isstaff) other_rank = "<span id='rank_staff'>[PRACOWNIK]</span>";
                                        else if (data.usersStore[i].isactive) other_rank = "<span> [AKTYWNY]</span>";

                                        users_render += "<p> <span id='status_i_of'>" + "‣" + "</span> Offline" + other_rank + "</p><br>";
                                    }

                                    return (
                                        <div><Markup content={users_render}></Markup></div>
                                    )

                                }}</Query>
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