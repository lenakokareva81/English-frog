import React,
{
    Component,
    useState
} from 'react';
import cn from 'classnames';
import styles from './slider_kart.module.css';
import Karta from '../karta/karta';
import words from '../json/json'


function SliderKart() {
    const long = words.length
    const [number, setNumber] = useState(0)
    function back() {
        setNumber((prevnumber) => (prevnumber == 0) ? long - 1 : prevnumber - 1
        )
    }
    function forward() {

        setNumber((prevnumber) => (prevnumber == long - 1) ? 0 : prevnumber + 1

        )
    }

    return (<div>
        <div className={styles.root}>
            <div className={styles.back} onClick={back}>
                <div className={cn([styles.arrow_back])}>
                </div></div>
            < Karta word={words[number]} />
            <div className={styles.forward} onClick={forward}>
                <div className={cn([styles.arrow_forward])}></div>
            </div>
        </div>
    </div>);

}


export default SliderKart;