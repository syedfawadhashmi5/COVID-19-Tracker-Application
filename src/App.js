import React from 'react';
import { Cards, Chart, CountryPicker } from './components';

import styles from './App.module.css' 

console.log(Cards)
function App() {
  return (
    <div className={styles.container}>
      <Cards />

    </div>
  );
}

export default App;
