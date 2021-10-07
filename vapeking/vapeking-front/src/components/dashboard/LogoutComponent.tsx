import { gql } from "apollo-boost";
import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from 'react-router-dom';
import  Cookies  from 'universal-cookie';

const userMakeOfflineMutation = gql`
  mutation UserMakeOffline($id: ID!){
  	userMakeOffline(id: $id){
    	user{
      	id
      	isonline
    	}
  	}
  }
`


const MakeOffline = (id, props) => {
    const cookies = new Cookies();
    const [userMakeOffline] = useMutation(userMakeOfflineMutation, {
        onCompleted: () => {
            cookies.remove("user_email")
            cookies.remove("jws_token")
            history.push(path);
          }
    })
    let path = '/login';
    let history = useHistory();
    return(
        <div>
            <button onClick={async () => {
                    userMakeOffline( { variables: { id: id.id } } )
                }}>
                <div id="nav_logout">
                    <p>WYLOGUJ SIĘ</p>
                </div>
            </button>
        </div>
    )
}


export default MakeOffline;