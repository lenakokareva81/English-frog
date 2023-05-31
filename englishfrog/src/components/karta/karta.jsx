
import React, { Component } from 'react';
import cn from 'classnames';
import styles from './karta.module.css'

class Karta extends Component {
    state = {
        isOpen: false
    }
    static defaultProps = {
        english: 'Hello!',
        transcription: "[hello]"
    };



    render() {
        const { word, ...props } = this.props;
        const body = this.state.isOpen && <p className={styles.h3}>{word.russian}</p>
        const buttonClass = cn([
            styles.button,
            this.state.isOpen ? `${styles.button__open}` : `${styles.button__close}`
        ]);
        { console.log(styles) }
        return (
            <div className={styles.root}>
                <div className={styles.karta}>
                    <p className={styles.h1}>{word.english}</p>
                    <p className={styles.h2}>{word.transcription}</p>
                    {body}
                    <button className={styles.button} onClick={this.handleClick}>
                        {this.state.isOpen ? "убрать перевод" : "перевод"}
                    </button>
                    <button className={styles.button} onClick={this.handleClick}>
                        знаю
                    </button>
                </div>
            </div>
        );
    }
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}


export default Karta;