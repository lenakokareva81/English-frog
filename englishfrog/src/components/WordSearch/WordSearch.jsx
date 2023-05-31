// WordSearch
import React, { useState, useEffect } from 'react';
import SliderKart from '../SliderKart/SliderKart.jsx';
import Table from '../Table/Table.jsx';
import words from '../json/json';
// import WordSearch from '../slider/slider'




function WordSearch() {

    const [katalog, setKatalog] = useState([])

    // const [obj, setObj] = useState([])
    // const [country, setCountry] = useState(['Byzantine'])
    // const [arrayObjs, setArrayObjs] = useState([])

    // https://collectionapi.metmuseum.org/public/collection/v1/search?departmentIds=17&geoLocation=${country}  culture=

    useEffect(() => {
        fetch(`http://itgirlschool.justmakeit.ru/api/words`)
            .then(response => response.json())
            .then(json => setKatalog(json))

        return () => {
        }
    }, [])
    // useEffect(() => {
    //     if ((!katalog) || (!katalog.objectIDs)) {
    //         return () => {
    //             console.log(`каталог не существует`)
    //         }
    //     }
    //     if (katalog.objectIDs.length < 1) {
    //         return () => {
    //             console.log(`каталог пуст`)
    //         }
    //     }
    //     setArrayObjs(arrayObjs => [])
    //     for (let i = 0;
    //         // (katalog.objectIDs.length > 10) ? 10 : katalog.objectIDs.length
    //         i < 10; i++) {
    //         fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${katalog.objectIDs[i]}`)
    //             .then(response => response.json())
    //             .then(json => setObj(json))
    //     }
    //     return () => {
    //     }
    // }, [katalog])
    // useEffect(() => {
    //     setArrayObjs(arrayObjs => [...arrayObjs, obj])
    //     return () => {

    //     }
    // }, [obj])

    return (
        <div >
            привет
            <pre>{JSON.stringify(katalog, null, 2)}</pre>
            {(katalog && katalog.length > 0) ? <SliderKart words={katalog}></SliderKart> : ''}
            {/* <Table words={katalog}></Table> */}


        </div >
    );
}

export default WordSearch;
