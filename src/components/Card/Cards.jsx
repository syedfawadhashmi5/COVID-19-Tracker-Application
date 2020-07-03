import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import cx from 'classnames';
import CountUp from 'react-countup';
import styles from './Card.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return <div className='lds-hourglass'></div>
    }

    // const [globalData, setGlobalData] = useState();

    // useEffect( () => {

    //     async function  fetchGlobalData() {
    //         const apiresponse = await fetch('https://api.thevirustracker.com/free-api?global=stats');
    //         const response = await apiresponse.json();
    //         console.log(response)
    //         setGlobalData(response)
    //     }
// this is secoend methot of api call and use {globalData && globalData.results && globalData.results[0].total_recovered}
    // fetchGlobalData();
    // }, []);

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} sm={12} md={3} className={cx(styles.card, styles.Infected)}>
                    <CardContent>
                        <Typography className={styles.Infect}>Infected</Typography>
                        <Typography varaint="h5">
                        <CountUp start={0} end={confirmed.value} duration={3.5}  separator=',' />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Number of Active Cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} sm={12} md={3} className={cx (styles.card, styles.Recoveries)}>
                    <CardContent>
                        <Typography className={styles.Recover}>Recoveries</Typography>
                        <Typography varaint="h5">
                        <CountUp start={0} end={recovered.value} duration={3.5}  separator=',' />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Number of Recoveries of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} sm={12} md={3} className={cx (styles.card, styles.Deaths)}>
                    <CardContent>
                        <Typography className={styles.Death}>Deaths</Typography>
                        <Typography varaint="h5">
                        <CountUp start={0} end={deaths.value} duration={3.5}  separator=',' />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Number of Deaths Cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
