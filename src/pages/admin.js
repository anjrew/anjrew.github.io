import React from 'react';
import { Container } from "../components/boxes/container";

export default class AdminPage extends React.Component{

    constructor(){
        super();
       
    }

    render(){
        return <Container height="100%" width="100%">
            <h1>Welcome to Admin</h1>
        </Container>;
    }
}