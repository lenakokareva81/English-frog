import React from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

function Button(props) {
    const text = props.text
    return (

        <>


            <div className={styles.button__root}>
                <button className={styles.button}> {text} </button>
            </div>

        </>

    );
}

export default Button;
