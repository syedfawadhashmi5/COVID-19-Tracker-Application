import React, { Component } from 'react'
import { Cards, Chart, CountryPicker } from './components';
import { getData } from './Api'

import styles from './App.module.css' 

export class App extends Component {
  state = {
    data: {},
    country: '',
  }
  async componentDidMount() {
      const fetchapi = await getData();
      this.setState({data: fetchapi})
    }

  handleCountryChange = async (country) => {
    const data = await getData(country);

    this.setState({ data, country: country });
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart />
      </div>
    )
  }
}

export default App
