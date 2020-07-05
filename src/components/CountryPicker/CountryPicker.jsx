import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import {fetchCounteryData} from '../../Api';

import styles from './CountryPicker.module.css';

function CountryPicker({ handleCountryChange }) {

    const [fetchedCountry , getcountriesdata] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            getcountriesdata(await fetchCounteryData()); 
        };


        fetchApi();   
    },[]);

    return (
            <FormControl className={styles.container}>
                <NativeSelect defaultValue=" " onChange={(e) => handleCountryChange(e.target.value)}>
                <option  value="global">Glogal</option>
                    {fetchedCountry.map((Country, i) => <option key={i} value={Country}>{Country}</option>)}
                </NativeSelect>
            </FormControl>
    )
}

export default CountryPicker
