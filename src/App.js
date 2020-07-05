import React, { Component } from 'react'
import { Cards, Chart, CountryPicker, AppBar } from './components';
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
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <AppBar />
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    )
  }
}

export default App
