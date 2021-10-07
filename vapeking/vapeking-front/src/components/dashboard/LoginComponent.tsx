import { gql } from '@apollo/client';
import { useLazyQuery, useMutation } from "@apollo/react-hooks";
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';

const userQuery = gql`
    query UserQuery($email: String!){
      userEmail(email: $email){
        id
      }
    }
    `;

const userMakeOnlineMutation = gql`
  mutation UserMakeOnline($id: ID!){
  	userMakeOnline(id: $id){
    	user{
      	id
      	isonline
    	}
  	}
  }
`
const loginMutation = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        tokenAuth(email: $email, password: $password){
            payload
            token
        }
    }
    `

const MakeCookies = (response) => {
  const cookies = new Cookies();
  cookies.remove("user_email")
  cookies.remove("jws_token")
  if (response) {
      if (response.tokenAuth.token) {
          var token = response.tokenAuth.token
          cookies.set('jws_token', token, { path: '/'});
      }

      if (response.tokenAuth.payload.email) {
          var email = response.tokenAuth.payload.email;
          email = email.replace("%40", "@");
          cookies.set('user_email', email, { path: '/'});
      }
  }
}



const MakeOnline = (state) => {
  
  let path = '/dashboard';
  let history = useHistory();

  const [userMakeOnline] = useMutation(userMakeOnlineMutation);

  const [getId, { data }] = useLazyQuery(userQuery,
    {
      onCompleted: (data) => {
        const user_id = data.userEmail.id
        userMakeOnline( { variables: { id: user_id } } );
      }
    });
  
  const [login, { error }] = useMutation(loginMutation,
    {
      onCompleted: (data) => {
        const response = data
        if (response) {
          MakeCookies(response);
          history.push(path);
        }
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  

  return (
    <button onClick={async () => {
      console.log(state.state.email + "< EMAIL PROVIDED")
      getId( { variables: { email: state.state.email }} )
      console.log(state.state.password + "< PASSWORD PROVIDED")
      login( { variables: { email: state.state.email, password: state.state.password } } )
      
  }}>
    LOGIN
  </button>
  )
}


export default MakeOnline;