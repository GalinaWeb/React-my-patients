import { useState } from "react";
import NewPatient from "./components/NewPatient";
import Patient from "./components/Patient"
import PatientsList from "./components/PatientsList";

export default function App() {

    const startPatients = []
    //setPatients функция, которая меняет состояние в переменной patients и запускает render
    //useState это hook создает переменную состояния и callback, который меняет это состояние
    const [patients, setPatients] = useState(startPatients)
    
    
    function submitDelete(index) {

        const newPatients = patients.filter((patient, id) => {
            return id !== index
        })

        setPatients(newPatients)
    }

    const addPatient = (newPatient) => {
        setPatients([...patients, newPatient])
       }

    
    return (
        <>
          <NewPatient addPatient={addPatient}/>
        <PatientsList patients={patients} submitDelete={submitDelete}/>
        </>
    )


}