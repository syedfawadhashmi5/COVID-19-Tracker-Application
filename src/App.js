import React, { Component } from 'react'
import { Cards, Chart, CountryPicker } from './components';
import { getData } from './Api'

import styles from './App.module.css' 

export class App extends Component {
  state = {
    data: {}
  }
  async componentDidMount() {
      const fetchapi = await getData();
      this.setState({data: fetchapi})
    }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data}/>
      </div>
    )
  }
}

export default App
