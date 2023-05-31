// Input

import cn from 'classnames';
import styles from './Input.module.css';
import React, { Component, useState, useEffect } from 'react';

function Input(props) {
    const edit = props.edit
    const lang = props.lang
    const word = props.word
    const errorLang = props.error
    const InputValue = props.onBlur
    const [value, setValue] = useState(word[lang])
    const [error, setError] = useState(errorLang)
    const Handler = (e) => {
        setValue(e.target.value)

    }
    const handleBlure = (event) => {
        if (!value) {
            setError(true)
            console.log(error)
            console.log(!value)
        }
        else {
            setError(prevedit => false)
            console.log(error)
        }

    }
    useEffect(() => {
        console.log(value, lang, error)
        InputValue(value, lang, error)
    }, [error])




    return (

        <>

            {edit ?
                <input
                    onChange={e => Handler(e)}
                    value={value}
                    onBlur={handleBlure}
                    name={lang}
                    className={error ? styles.inputError : styles.input}
                    type="text"
                    placeholder={word[lang]}
                /> :
                <p className={styles.text} >{word[lang]}</p>}
            {/*  */}

        </>

    );
}

export default Input;