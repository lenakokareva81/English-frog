import React,
{
    Component,
    useState
} from 'react';
import cn from 'classnames';
import styles from './Table.module.css';
import RowTable from '../RowTable/RowTable';


function Table(props) {
    const { words } = props
    const long = words.length
    const [number, setNumber] = useState(0)


    return (<div className={styles.root}>
        <p className={styles.h1}>таблица слов</p>

        {words.map((word) =>

            < RowTable word={word} key={word.id} />)}

    </div>);

}


export default Table;