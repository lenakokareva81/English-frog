import React, { Component, useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './memory.module.css';
import words from '../json/json'

function IgraMemoJpg(props) {
    const words = props.words
    const [arrayCards, setArrayCards] = useState([])
    const [openCards, setOpenCards] = useState([])
    const [matched, setMatched] = useState([])
    const [moves, setMoves] = useState(0)
    let wordsForMemoEnglish = []
    wordsForMemoEnglish = JSON.parse(JSON.stringify(words))
    wordsForMemoEnglish.forEach(word => {
        word.word = word.english
    })
    let wordsForMemoRussian = []
    wordsForMemoRussian = JSON.parse(JSON.stringify(words))
    wordsForMemoRussian.forEach(word => {
        word.word = word.russian
    })



    const wordTranslate = [...wordsForMemoEnglish, ...wordsForMemoRussian]

    const shuffle = (array) => {
        let currentIndex = array.length,
            tempValue,
            randomIndex

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1
            tempValue = array[currentIndex]
            array[currentIndex] = array[randomIndex]
            array[randomIndex] = tempValue
        }
        return array
    }
    useEffect(() => {
        setArrayCards(shuffle(wordTranslate))
    }, [])
    const flipcard = (index) => () => {

        setOpenCards(opened => [...opened, index])
        setMoves(prevMove => prevMove + 1)
        console.log(openCards)
    }
    useEffect(() => {
        if (openCards < 2) return
        const firstMatched = arrayCards[openCards[0]];
        const secondtMatched = arrayCards[openCards[1]];
        if (secondtMatched && firstMatched.id === secondtMatched.id && firstMatched.word != secondtMatched.word) {
            setMatched([...matched, firstMatched.id])
        }
        if (openCards.length === 2) setTimeout(() => setOpenCards([]), 1000)
    }, [openCards])
    const handleGameRestart = () => {
        setOpenCards([]);
        setMatched([])
        setMoves(0)
        setArrayCards(shuffle(wordTranslate))
    }
    return (
        <div className={styles.conteiner}>
            <p className={styles.numberofsroks}>сделанных ходов {moves}</p>
            <div className={styles.cards}>
                {arrayCards.map((item, index) => {
                    let isFliped = false;
                    if (openCards.includes(index)) isFliped = true
                    if (matched.includes(item.id)) isFliped = true
                    return (
                        <div key={index}
                            className={cn([styles.card, (isFliped) ? styles.card_flipped : {}])}
                            onClick={flipcard(index)}>
                            <div className={styles.inner}>
                                <div className={cn([styles.front, (isFliped) ? styles.frontvisible : styles.fronthidden])}>

                                    {item.word}</div>
                                <div className={styles.back}>?</div>

                            </div>
                        </div>
                    )

                })}
            </div>
            <button className={styles.restart}
                onClick={handleGameRestart}>начать заново</button>
        </div >);

}


export default IgraMemoJpg;
