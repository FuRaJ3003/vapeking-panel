import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';


export class MeView extends React.PureComponent<RouteComponentProps<{}>> {

    render() {
        return <div style={{ display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "120px",
}}> KOXUWA :D </div>
    }
}
