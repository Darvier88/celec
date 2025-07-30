import './App.css'

import Grid from '@mui/material/Grid2' 
import HydrologyTable from './components/HydrologyTable'
import Student from './components/Student'
import {useEffect,useState} from 'react';

// PENDIENTE: Cree la interfaz
import DataHour from './interface/DataHour'

function App() {

  let url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/CELEC/hidrologia_17122024.json"
  
  // PENDIENTE: Variable de estado y la función de modificación. 
  const[hidrologyData,setHidrologyData] = useState<DataHour[]>([]);

  // PENDIENTE: 
  // Realizar una petición asíncrona a la URL. La respuesta es un JSON. 
  // Al recibir la respuesta, actualice la variable de estado.
  useEffect(()=>{
    const fetchData = async() =>{
      try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }
        const data: DataHour[] = await response.json();
        setHidrologyData(data);
      }
      catch(error){
        console.error("Error al momento de hacer fetch a la data:", error)
      }
    };
    fetchData();
  },[]);
  
  const StudentInfo = {
    nombres: "Darwin Javier",
    apellidos: "Pacheco Paredes",
    paralelo: "1"
  };

  return (
    <Grid container spacing={5}>

        {/* Student */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe sus datos (apellidos, nombres y paralelo) como props del componente */}
          <Student{...StudentInfo}></Student>

        </Grid>
        
        {/* HydrologyTable */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe la variable de estado como prop */}
          <HydrologyTable data={hidrologyData}></HydrologyTable>
        
        </Grid>
        
       
    </Grid>
  )
}

export default App
