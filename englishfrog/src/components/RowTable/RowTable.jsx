import React, { Component, useState, useEffect } from 'react';
import cn from 'classnames';
import styles from './RowTable.module.css'
import Input from '../Input/Input'

function RowTable({ word, editprops }) {
    const [edit, setEdit] = useState(editprops)
    const [wordValid, setWordValid] = useState(false)
    const [russianError, setRussianError] = useState(false)
    const [inglishError, setInglishError] = useState(false)
    const [transcriptionError, setTranscriptionError] = useState(false)

    const InputValue = (value, lang, error) => {
        console.log(value, lang, error)
        if (lang = 'russian') { setRussianError(error) }
        if (lang = 'english') { setInglishError(error) }
        if (lang = 'transcription') { setTranscriptionError(error) }

    }



    useEffect(() => {
        if (russianError || inglishError || transcriptionError) {
            setWordValid(false)
        } else {
            setWordValid(true)
        }
    }, [russianError, inglishError, transcriptionError])

    const handleWord = () => {
        setEdit(prevedit => !prevedit)

    }

    return (<>
        {(russianError || inglishError || transcriptionError) ? <div style={{ color: 'red' }}> заполните все поля </div> : ''}

        <div className={styles.table}>
            <Input
                word={word}
                edit={edit}
                lang='russian'
                error={russianError}
                onBlur={InputValue}
            />
            <Input
                word={word}
                edit={edit}
                lang='english'
                error={inglishError}
                onBlur={InputValue}
            />
            <Input
                word={word}
                edit={edit}
                lang='transcription'
                error={transcriptionError}
                onBlur={InputValue}
            />

            {edit ?
                <button
                    disabled={!wordValid}
                    className={styles.button_edit}
                    onClick={handleWord}>&#128190; </button>
                : <button
                    className={styles.button_edit}
                    onClick={handleWord}>&#9998;</button>}
            <button
                className={styles.button_no}>
                &#10006;</button>
        </div>
    </>
    );

}


export default RowTable;