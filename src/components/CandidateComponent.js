import React, { Component } from 'react';
import sendCall from '../httpHelper';

class CandidateComponent extends Component {
    
    constructor(){
        super();

        this.state = {
            allCandidates: null,
            email : ""
        };
    }

    async getCandidates(){
        
        const query = `{
            candidates : allCandidates {
              id,
              email
            }
          }`;
    
        const candidates = await sendCall("POST", "http://localhost:4000/graphql", {query});

        if(candidates && typeof candidates.data === "object"){
            this.setState(candidates.data);
        } else {
            console.log("Cound not fetch Candidates.");
        }
    
    }

    async getCandidatesByEmail(email){
        
        const query = `{
            candidates : getCandidatesByEmail(email : "${email}") {
              id,
              email
            }
          }`;
    
        const candidates = await sendCall("POST", "http://localhost:4000/graphql", {query});

        if(candidates && typeof candidates.data === "object"){
            this.setState(candidates.data);
        } else {
            console.log("Cound not fetch Candidates.");
        }
    
    }

    getRows(){
        if(Array.isArray(this.state.candidates)){
            if(this.state.candidates.length){
                return this.state.candidates.map((val, i) => <tr key={i}>
                <th scope="row">{val.id}</th>
                <td>{val.email}</td>
                </tr>)
            }
            else {
                return <tr><td colSpan="3">No data available!</td></tr>;
            }
        } else {
            return <tr><td colSpan="3">Loading data. Please wait...</td></tr>;
        }
        
    }

    componentDidMount(){
        this.getCandidates();
    }
    setEmail = (args) =>{
        this.setState({email: args.currentTarget.value})
    }
    getUserData = () =>{
        this.setState({candidates : null});
        if(this.state.email.trim() === ""){
            this.getCandidates();
        }else{
            this.getCandidatesByEmail(this.state.email);
        }
       
    }

    render() {
        return (
        <>
            <h4 className="text-center">Candidate Component - Database</h4>
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

export default CandidateComponent;
