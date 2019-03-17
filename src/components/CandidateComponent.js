import React, { Component } from 'react';
import sendCall from '../httpHelper';

class CandidateComponent extends Component {
    
    constructor(){
        super();

        this.state = {
            allCandidates: []
        };
    }

    async getCandidates(){
        
        const query = `{
            allCandidates {
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
        if(Array.isArray(this.state.allCandidates) && this.state.allCandidates.length){
            return this.state.allCandidates.map((val, i) => <tr key={i}>
            <th scope="row">{val.id}</th>
            <td>{val.email}</td>
        </tr>)
        } else {
            return <tr><td colSpan="3">Loading data. Please wait...</td></tr>;
        }
        
    }

    componentDidMount(){
        this.getCandidates();
    }

    render() {
        return (
        <>
            <h4 className="text-center">Candidate Component - Database</h4>
            <table className="table table-dark mt-4">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.allCandidates && this.getRows()
                    }
                </tbody>
            </table>
        </>
        );
    }
}

export default CandidateComponent;
