import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';


import cx from 'classnames'
import styles from './Card.module.css'

function Cards() {
    return (

        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} sm={12} md={3} className={cx (styles.card, styles.Infected)}>
                    <CardContent>
                        <Typography color='textSecondary' guterbottem>Infected</Typography>
                        <Typography varaint="h5">Real data</Typography>
                        <Typography color='textSecondary'>Real data</Typography>
                        <Typography varaint="body2">Number of Active Cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} sm={12} md={3} className={cx (styles.card, styles.Deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' guterbottem>Deaths</Typography>
                        <Typography varaint="h5">Real data</Typography>
                        <Typography color='textSecondary'>Real data</Typography>
                        <Typography varaint="body2">Number of Deaths Cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} sm={12} md={3} className={cx (styles.card, styles.Recoveries)}>
                    <CardContent>
                        <Typography color='textSecondary' guterbottem>Recoveries</Typography>
                        <Typography varaint="h5">Real data</Typography>
                        <Typography color='textSecondary'>Real data</Typography>
                        <Typography varaint="body2">Number of Recoveries of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
