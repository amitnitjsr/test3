import React, { Component } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router';

class selectCity extends Component {
    state = {
        stateName: null,
        city: null,
        cityName: 'Central delhi',
        allData: null,
    }

    componentDidMount() {
        Axios.get('/api/v1/states',
            { headers: { accept: 'application/json' } })
            .then((response) => {
                this.setState({ allData: response.data, submitValue: false })
            })
            .catch((error) => {
                console.log('error', error)
            })
    }

    selectStateHandler = (name) => {
        let state = this.state.allData && this.state.allData.filter((val) => val.stateName === name);
        this.setState({ city: state, stateName: name }, () => {
            this.setState({ cityName: this.state.city[0].city[0].cityName })
        });

    }

    selectCityHandler = (name) => {
        this.setState({ cityName: name })
    }

    submitHandler = () => {
        this.props.history.push(`/details/${this.state.stateName}/${this.state.cityName}`)
    }

    render() {

        return (
            <div>
                <br />
                <labe>Select state</labe>
                <select onClick={(event) => this.selectStateHandler(event.target.value)} >
                    {this.state.allData && this.state.allData.map((val) => {
                        return (
                            <option value={val.stateName} >{val.stateName}</option>
                        )
                    })}
                </select>

                <br />
                <br />
                <label>Select city</label>
                <select onChange={(event) => this.selectCityHandler(event.target.value)} >
                    {this.state.city && this.state.city[0].city.map((val) => {
                        return (
                            <option value={val.cityName}  >{val.cityName}</option>
                        )
                    })}
                </select>
                <br />
                <br />
                <button onClick={() => this.submitHandler()}> Submit</button>
            </div >
        )
    }
}


export default withRouter(selectCity);