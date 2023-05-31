import React,
{
    Component,
    useState
} from 'react';
import cn from 'classnames';
import styles from './slider_kart.module.css';
// import Karta from '../karta/karta';
import KartaLearn from '../KartaLearn/KartaLearn';



function SliderKart(props) {
    const { words } = props
    const long = words.length

    const [number, setNumber] = useState(0)
    const counterLearned = 0
    function back() {
        setNumber((prevnumber) => (prevnumber == 0) ? long - 1 : prevnumber - 1
        )
    }
    function forward() {

        setNumber((prevnumber) => (prevnumber == long - 1) ? 0 : prevnumber + 1

        )
    }

    const [value, setValue] = useState('<Not set>')
    const handleChange = (value) => {
        setValue(prevvalue => prevvalue + 1)
    }

    return (<div>
        <div> <span>Value is: {value}</span>
        </div>
        <div className={styles.root}>
            <div className={styles.back} onClick={back}>
                <div className={cn([styles.arrow_back])}>
                </div></div>
            <div className={styles.karta}>
                < KartaLearn
                    word={words[number]}
                    onChange={handleChange}
                    id={number}
                    isOpenStart={false} />

            </div>

            <div className={styles.forward} onClick={forward}>
                <div className={cn([styles.arrow_forward])}></div>
            </div>
        </div>
    </div>);

}


export default SliderKart;