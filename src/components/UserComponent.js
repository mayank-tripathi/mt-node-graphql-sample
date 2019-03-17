import React, { Component } from 'react';
import sendCall from '../httpHelper';

class UserComponent extends Component {
    
    constructor(){
        super();

        this.state = {
            allUsers: []
        };
    }

    async getUsers(){
        
        const query = `{
          allUsers {
            id,
            company,
            email
          }
        }`;
    
        const users = await sendCall("POST", "http://localhost:4000/graphql", {query});
        
        if(users && typeof users.data === "object"){
            this.setState(users.data);
        } else {
            console.log("Cound not fetch Users.");
        }
        
    
    }

    getRows(){
        if(Array.isArray(this.state.allUsers) && this.state.allUsers.length){
            return this.state.allUsers.map((val, i) => <tr key={i}>
            <th scope="row">{val.id}</th>
            <td>{val.company}</td>
            <td>{val.email}</td>
        </tr>)
        } else {
            return <tr><td colSpan="3">Loading data. Please wait...</td></tr>;
        }
        
    }

    componentDidMount(){
        this.getUsers();
    }

    render() {
        return (
        <>
            <h4 className="text-center">User Component - External API</h4>
            <table className="table table-dark mt-4">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Company</th>
                        <th scope="col">email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.allUsers && this.getRows()
                    }
                </tbody>
            </table>
        </>
        );
    }
}

export default UserComponent;
