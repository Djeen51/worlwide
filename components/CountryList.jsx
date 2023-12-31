/* eslint-disable react/prop-types */
import CountryItem from "./CountryItem"
import styles from './CountryList.module.css'
import Message from "./Message";
import Spinner from './Spinner';

function CountryList({cities,isLoading }) {
    if(isLoading) return <Spinner />
    if(!cities.length) return <Message message={'Add your first city by clicking on a city on the map'}/>

    const countries = cities.reduce((arr, current) =>{
        if(!arr.map((el) =>el.country).includes(current.country))
        return [...arr, {country: current.country, emoji: current.emoji}];
        else return arr;
    }, [])
    

    return (
        <ul className={styles.countryList}>
            {countries.map((country) => (
                <CountryItem country={country} key={country.country} />
            ))}
        </ul>
    )
}

export default CountryList