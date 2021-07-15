import * as React from 'react';
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { RouteComponentProps } from 'react-router-dom';

// ICONS
import { BsFillCircleFill } from "react-icons/bs";
import { FcShop, FcAlarmClock, FcCalendar, FcBusinessman } from "react-icons/fc";

import '../styles/dashboard.css';


export class DashboardView extends React.PureComponent<RouteComponentProps<{}>> {

    render() {
        return ( 
        <div>
            <div id="sidenav">
                <div id="nav_top">
                    <img src="https://i.imgur.com/zgdzTJU.png"></img>
                    <p id="side_name"> Rafael Kamecky </p>
                    <p id="side_status"> <span id="status_i"><BsFillCircleFill/></span> Online </p>
                </div>

                <div id="nav_info">
                    <p><FcShop/> JustVape WŁB</p>
                    <p><FcAlarmClock/> 09:34</p>
                    <p><FcCalendar/> 13/07/21</p> 
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
    }
}
