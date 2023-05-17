import React, { Component, useState } from 'react';
import cn from 'classnames';
import styles from './RowTable.module.css'
function RowTable(props) {
    const { word } = props
    const [edit, setEdit] = useState(false)
    const handleWord = () => {
        setEdit(prevedit => !prevedit)
        console.log(edit);
    }

    return (<>

        <div className={styles.table}>
            {edit ? <input className={styles.input} type="text" autofocus placeholder={word.russian} /> : <p className={styles.text}>{word.russian}</p>}
            {edit ? <input className={styles.input} type="text" autofocus placeholder={word.english} /> : <p className={styles.text}>{word.english}</p>}
            {edit ? <input className={styles.input} type="text" autofocus placeholder={word.transcription} /> : <p className={styles.text}>{word.transcription}</p>}
            <button className={styles.button_edit} onClick={handleWord}>&#9998;</button>
            <button className={styles.button_no}>&#10006;</button>



        </div>
    </>
    );

}


export default RowTable;