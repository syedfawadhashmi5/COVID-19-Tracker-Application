import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './AppBar.module.css'


function Appbar() {

  return (
    <div className={styles.container}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={styles.text}>
          <span className={styles.text}>COVID-19 CORONAVIRUS PANDEMIC</span>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Appbar