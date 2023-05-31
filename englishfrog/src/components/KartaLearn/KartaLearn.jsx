// KartaLearn
import React, { Component, useState, useEffect } from 'react';
import cn from 'classnames';
import styles from './KartaLearn.module.css'

function KartaLearn({ word, onChange, isOpenStart }) {

    const [isOpen, setIsOpen] = useState(isOpenStart)
    const [isKnow, setIsKnow] = useState(false);

    useEffect(() => {

        setIsOpen(prevedit => isOpenStart)
        return () => {
        }
    }, [word])
    const handleClick = () => {
        setIsOpen(prevedit => !prevedit)

    }

    const handlelearn = (event) => {

        onChange(1) // callback-функция
        setIsKnow(prevedit => !prevedit)

    }





    return (
        <div className={styles.root}>
            <div className={styles.karta}>
                <p className={styles.h1}>{word.english}</p>
                <p className={styles.h2}>{word.transcription}</p>
                <button className={styles.button} onClick={handlelearn}>
                    {isKnow ? "знаю +" : "знаю?"}
                </button>
                <br></br>
                <button className={cn([styles.button, styles.button_blue])} onClick={handleClick}>
                    {isOpen ? "убрать перевод" : "перевод"}
                </button>
                {isOpen ? <p className={styles.h3}>{word.russian}</p> : ""}



            </div>
        </div >
    );
}



export default KartaLearn;