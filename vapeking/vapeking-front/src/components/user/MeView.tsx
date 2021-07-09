import * as React from 'react';
import { Query } from 'react-apollo';
import { gql } from "apollo-boost";

const meQuery = gql`
    query MeQuery {
        userEmail {
            
        }
    }
`

export class MeView extends React.PureComponent {
    render() {
        return <Query<MeQuery> query={meQuery}>
            {({data, loading}) => {
                if (loading) {
                    return null;
                }

                if (!data) {
                    return <div>Dane nie są zidentyfikowane</div>
                }

                if (!data.me) {
                    return <div>Nie znaleziono użytkownika</div>
                }

                return <div>{data.me.email}</div>
            }}
            <div>{email}</div>
            )</Query>;
    }
}