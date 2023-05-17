import React from 'react';
import cn from 'classnames';
import styles from './Mainpage.module.css';
import mainFrog from '../img/mainFrog.png'
// import mainFrog from '../img/mainFrog.png'
// import mainFrog from '../img/mainFrog.png'
// import mainFrog from '../img/Mask_group.png'
function Mainpage() {

    return (

        <>

            <div className={styles.Banner}>
                <div className={styles.fonimg}>
                    <div className={styles.fonfrog}>
                        {/* <img className={styles.img} src={mainFrog} alt="лягушка читает книгу" /> */}

                        <div className={styles.about}>
                            <p className={styles.h1}>Учи английский легко </p>
                            <p className={styles.text}> съешь лягушку по частям </p>
                            <div className={styles.button__root}>
                                <button className={styles.button}> учить слова </button>
                            </div>
                            <div className={styles.button__root}>
                                <button className={cn([styles.button], [styles.button_blue])}> играть в игру </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.whiteblock}>
                <p className={styles.h1}>Для кого этот сайт? </p>

            </div>
        </>

    );
}

export default Mainpage;
