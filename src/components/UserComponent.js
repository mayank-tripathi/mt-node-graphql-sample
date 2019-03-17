import React, { Component } from 'react';
import sendCall from '../httpHelper';

class UserComponent extends Component {
    
    constructor(){
        super();

        this.state = {
            users: null,
            email:""
        };
    }

    async getUsers(){
        
        const query = `{
          users:allUsers {
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

    async UsersByEmail(email){      
        const query = `{
            users:UserByEmail(email : "${email}") {
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
        if(Array.isArray(this.state.users)){
            if(this.state.users.length) {
                return this.state.users.map((val, i) => <tr key={i}>
                    <th scope="row">{val.id}</th>
                    <td>{val.company}</td>
                    <td>{val.email}</td>
                </tr>);
            } else {
                return <tr><td colSpan="3">No data available!</td></tr>;
            }
            
        } else {
           return <tr><td colSpan="3">Loading data. Please wait...</td></tr>;
        }
        
    }

    componentDidMount(){
        this.getUsers();
    }

    setEmail = (args) =>{
        this.setState({email: args.currentTarget.value})
    }
    getUserData = () =>{
        this.setState({users : null});
        if(this.state.email.trim() === ""){
            this.getUsers();
        }else{
            this.UsersByEmail(this.state.email);
        }
       
    }

    render() {
        return (
        <>
            <h4 className="text-center">User Component - External API</h4>   
            <div className="input-group">
                <input className="form-control" onChange={this.setEmail}></input>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={this.getUserData} type="button">Search by email</button>
                </div>
            </div>
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
                        this.getRows()
                    }
                </tbody>
            </table>
        </>
        );
    }
}

export default UserComponent;
