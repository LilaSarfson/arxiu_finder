import { useState } from "react";
export default function GeneradorData (){
const [newJson, setNewJson] = useState([]);
 const [name, setName] = useState("");
 const [year, setYear] = useState("1930");
 const [districte, setDistricte] = useState("");
 const [seccion, setSeccion] = useState("");
 const [numI, setNumI] = useState("");
 const [numF, setNumF] = useState("");
 const [numE, setNumE] = useState("");
 const crearObjeto = (event) => {
   event.preventDefault();
   const newObject = {
     year: year,
     name: name,
     districte: districte,
     seccion: seccion,
     numberI: numI,
     numberF: numF,
     numberE: numE

   };
   addToJson(newObject)
 };
 function addToJson (newObject) {
   console.log("entro")
   setNewJson([...newJson, newObject]);
 }
    return(
        <div>
        <form>
          <label>Año</label>
          <input className="border border-2 border-black" onChange={(e) => setYear(e.target.value)} type="text"></input>
          <br />
          <label>Nombre</label>
          <input onChange={(e) => setName(e.target.value)} type="text"></input>
          <br />
          <label>Distrito</label>
          <input
            onChange={(e) => setDistricte(e.target.value)}
            type="text"
          ></input>
          <br />
          <label>Sección</label>
          <input onChange={(e) => setSeccion(e.target.value)} type="text"></input>
          <br />
          <label>NúmeroI</label>
          <input onChange={(e) => setNumI(e.target.value)} type="text"></input>
          <br />
          <label>NúmeroF</label>
          <input onChange={(e) => setNumF(e.target.value)} type="text"></input>
          <br />
          <label>NúmeroE</label>
          <input onChange={(e) => setNumE(e.target.value)} type="text"></input>
          <br />
          <button onClick={crearObjeto}>Crear objeto</button>
        </form>
   
   
        {JSON.stringify(newJson)}
      </div>
    );
    }
