
import dataStreet from '../src/data/data.json'
import SelectModal from "./components/dumbs/SelectModal";
import SelectByName from "./components/dumbs/SelectName";
import Card from './components/dumbs/Card';
import HeaderPage from './components/dumbs/Header';
import CardHeader from './components/dumbs/CardHeader';
import Footer from './components/dumbs/Footer';
import Button from './components/dumbs/Button'
import HandleError from './components/dumbs/HandleError';
import { useState } from "react";
import { FilterBy, FilterByName} from "../src/utils/utils";
export default function App() {
  const [originalData, setData] = useState(dataStreet);
  const [datosFiltrados, setdatosFiltrados] = useState("");
  const [sharedData, setsharedData] = useState(false);
  
  const districteList = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
  const yearsList = ["1930","1940", "1945", "1950", "1955" ];
  const headerSelector= ["year", "districte"]

  const [dis, setDis] = useState(headerSelector[1]);
  const [year, setYear] = useState(headerSelector[0]);
  const [street, setName] = useState("");
  const [numCards, setnumCards] = useState (4); 
  const [error, setError] = useState(false)
  
  const handleSelector = (e, elemento, setElemento) => {
    let targetValue = e.target.value
    setElemento(targetValue)
    sharedData
      ? FilterBy(datosFiltrados, targetValue, elemento, setdatosFiltrados, setsharedData)
      : FilterBy(originalData, targetValue, elemento, setdatosFiltrados, setsharedData);
  };
  const handleChangeName = (e) => {
    let newName = e.target.value;
    setName(newName);
    sharedData
      ? FilterByName(datosFiltrados, newName, setdatosFiltrados, setsharedData)
      : FilterByName(originalData, newName, setdatosFiltrados, setsharedData);
     if (newName === "") {
      clearAll()
     }
  };
  const clearAll = ()=> {
    setsharedData(false)
    setYear(headerSelector[0])
    setDis(headerSelector[1])
    setName('')
    setnumCards(4)
  }

  return (
    <div className="App">
      <div className='min-h-screen relative m-auto flex flex-col gap-6 items-center bg-fondo dark:bg-dark_bg dark:text-dark_white'>
        <section className=' w-full flex flex-col gap-4'>
          <div className='w-4/6 m-auto flex flex-col gap-8'>
            <header className='w-full mt-8'>
              <HeaderPage
              />
            </header>
            <div className='flex flex-col justify-center bg-white p-4 rounded-md mb-6 w-full dark:bg-dark_secction'>
              <SelectByName value={street} change={handleChangeName} />
              <div className='flex flex-row gap-4 p-4 justify-center'>
                  <SelectModal setElemento={setYear} value={year} seleccionador={yearsList} filtro={handleSelector} header={headerSelector[0]} />
                  <SelectModal setElemento={setDis} value={dis} seleccionador={districteList} filtro={handleSelector} header={headerSelector[1]}/>  
                  <Button
                  title= 'clear all'
                  clickFunction={clearAll}/>
             </div>
            </div>
          </div>
      </section>
      <section className='flex flex-col justify-center gap-4 bg-white p-4 w-4/6 rounded-md dark:bg-dark_secction'>
        <CardHeader/>
        {sharedData ? (
          datosFiltrados.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              distrito={item.districte}
              seccion={item.seccion}
              numeroI={item.numberI}
              numeroF={item.numberF}
            />
          ))
        ) : (
          originalData.slice(0, numCards).map((item, index) => (
            <Card
              key={index}
              name={item.name}
              distrito={item.districte}
              seccion={item.seccion}
              numeroI={item.numberI}
              numeroF={item.numberF}
            />
          )))
        }
        <Button 
        clickFunction= {()=> {numCards<originalData.length ? setnumCards(numCards + 4): setError(true) }}
        grande={false}
        title='+'/>
      </section>
      { error ?
             <HandleError
             error='There are not more entries'/>
             :
             ''
      } 
      <Footer/>
      </div>
    </div>
  );
}
