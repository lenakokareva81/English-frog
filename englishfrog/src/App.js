
import logo from './logo.svg';
import React from 'react';
import SliderKart from './components/slider/sliderKart.jsx';
import words from './components/json/json';
import './App.css';
import IgraMemoJpg from './components/memory/memory.jsx'




function App() {

  return (

    // <div >
    //   <div >
    //     {words
    //       .filter((word) => word.tags == "животные")
    //       .map((word) => < Card word={word} key={word.id} />)}
    //   </div>
    // карточки с кнопкой
    // <div >
    //   {
    //     words
    //       .filter((word) => word.tags == "животные")
    //       .map((word) => < Karta word={word} key={word.id} />)
    //   }
    // </div>
    // </div >
    // игра мемори 

    // <IgraMemo></IgraMemo>
    // игра мемори английский-русский
    <>
      {/* карточки с кнопкой
      <div >
        {words
          // .filter((word) => word.tags == "животные")
          .map((word) => < Karta word={word} key={word.id} />)
        }
      </div> */}
      <SliderKart></SliderKart>

      <IgraMemoJpg words={words.slice(0, 6)}></IgraMemoJpg>


    </>





  );
}



export default App;
