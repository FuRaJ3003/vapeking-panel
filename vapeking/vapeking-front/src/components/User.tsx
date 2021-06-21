import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import { idText } from 'typescript';

const QUERY_USERS = gql`
    query{
      users{
        id
        email
        store{
          id
        	city
          name
        }
        name
        surename
        lastLogin
        password
        isactive
        isstaff
        isadmin
        isactive
        ismanager
        isSuperuser
      }
    }
`;

export function UserInfo() {
    const { data, loading } = useQuery(
        QUERY_USERS, {
            pollInterval: 2000 // result revetch interval
        }
    );

    if (loading) { 
      return <p>Ładowanie...</p>;
    }
    console.log(data.users)

    return (
      <div>
        {data && data.users.map((user: any) => (
          <tr>
            <td>ID: {user.id} ({user.email}) | {user.name} {user.surename}
             Shop: {user.store.name} ({user.store.city})</td>
          </tr>
        ))}
      </div>
    )
}
      