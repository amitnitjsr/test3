import React from 'react';
import { withRouter } from 'react-router';

const details = (props) => {

    const HomeHadler = () => {
        props.history.push('/')
    }
    return (
        <div>
            <button onClick={() => HomeHadler()}>Back home page</button>
            <h1>Details</h1>
            <h1>State Name: {props.match.params.state}</h1>
            <h1>City Name: {props.match.params.city}</h1>

        </div>
    )
}

export default withRouter(details);