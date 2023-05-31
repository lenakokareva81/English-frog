// KartaLearn
import React, { Component, useState, useEffect } from 'react';
import cn from 'classnames';
import styles from './Reg.module.css'

function Reg({ word, onChange }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('емайл не может быть пустым')
    const [passwordError, setPasswordError] = useState('пароль не может быть пустым')
    const [formValid, setFormValid] = useState(false)



    const [russian, setRussian] = useState('')
    const [inglish, setInglish] = useState('')
    const [russianDirty, setRussianDirty] = useState(false)
    const [inglishDirty, setInglishDirty] = useState(false)
    const [russianError, setRussianError] = useState('заполните поле русское')
    const [inglishError, setInglishError] = useState('заполните поле английское')


    useEffect(() => {
        if (russianError || inglishError) {
            setWordValid(false)
        } else {
            setWordValid(true)
        }
    }, [russianError, inglishError])

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /.*@[a-z0-9.-]*/i
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('некоррректный емейл')
        }
        else {
            setEmailError('')
        }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        console.log(e.target.value.length)
        if (e.target.value.length < 3) {
            setPasswordError('пароль должен быть больше 3 символов')
            if (!e.target.value) {
                setPasswordError('пароль не должен быть пустым')
            }
        } else {
            setPasswordError('')
        }

    }
    const russianHandler = (e) => {
        setRussian(e.target.value)
        if (!e.target.value) {
            setRussianError('поле не может быть пустым')
        }
        else {
            setRussianError('')
        }

    }
    const inglishHandler = (e) => {
        setInglish(e.target.value)
        if (!e.target.value) {
            setInglishError('поле не может быть пустым')
        }
        else {
            setInglishError('')
        }

    }


    const blurHandler = (e) => {
        switch (e.target.name) {
            // case 'email':
            //     setEmailDirty(true)
            //     break
            // case 'password':
            //     setPasswordDirty(true)
            //     break
            case 'russian':
                setRussianDirty(true)
                break
            case 'inglish':
                setInglishDirty(true)
                break
        }
    }


    return (
        <>
            <h1>форма регистрации</h1>
            {/* <form>
                {(emailDirty && emailError) && <div style={{ color: 'red' }}> {emailError}</div>}
                <input
                    onChange={e => emailHandler(e)}
                    value={email}
                    onBlur={e => blurHandler(e)}
                    name='email'
                    type="text"
                    placeholder='введите свой емайл'></input>
                <br></br>
                {(passwordDirty && passwordError) && <div style={{ color: 'red' }}> {passwordError}</div>}
                <input
                    onChange={e => passwordHandler(e)}
                    value={password}
                    onBlur={e => blurHandler(e)}
                    name='password'
                    type="password"
                    placeholder='введите свой  пароль'>
                </input>
                {(emailDirty && emailError) && <div style={{ color: 'red' }}> {emailError}</div>}
                <br></br>
                <button
                    disabled={!formValid}
                    type='submit'>
                    регистрация</button>
                <br></br>
            </form> */}
            <form>
                {(russianDirty && russianError) && <div style={{ color: 'red' }}> {russianError}</div>}
                <input
                    onChange={e => russianHandler(e)}
                    value={russian}
                    onBlur={e => blurHandler(e)}
                    name='russian'
                    type="text"
                    placeholder='русский'></input>
                <br></br>
                {(inglishDirty && inglishError) && <div style={{ color: 'red' }}> {inglishError}</div>}
                <input
                    onChange={e => inglishHandler(e)}
                    value={inglish}
                    onBlur={e => blurHandler(e)}
                    name='inglish'
                    type="text"
                    placeholder='английский'></input>
                <br></br>
                <button
                    disabled={!wordValid}
                    type='submit'>
                    сохранить</button>
                <br></br>
            </form>



        </>
    );
}



export default Reg;