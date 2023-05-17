import React,
{
    Component,
    useState
} from 'react';
import cn from 'classnames';
import styles from './Table.module.css';
import RowTable from '../RowTable/RowTable';
import Button from '../Button/Button';



function Table(props) {
    const { words } = props
    const [newword, setNewword] = useState(false)
    const newRow = () => {
        setNewword(prevword => !prevword)
        console.log(newword)

    }
    const word = [{ "english": "--", "transcription": "[--]", "russian": "--", "tags": "--", }]

    return (<div className={styles.root}>
        <p className={styles.h1}>таблица слов</p>

        {words.map((word) => < RowTable word={word} editprops={false} key={word.id} />)}
        {newword ? < RowTable word={word} editprops={true} /> : ''}
        <button onClick={newRow} text="добавить слово" >добавить слово</button>
        <Button onClick={newRow} text="добавить слово" ></Button>

    </div>);

}


export default Table;