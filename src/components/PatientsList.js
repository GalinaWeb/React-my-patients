import Patient from "./Patient"
import { List } from "@material-ui/core";

export default function PatientsList(props) {

    return (
        <List component="ul">
            {props.patients.map((patient, index) => {
                return <Patient key={index} index={index} name={patient.name} lastname={patient.lastname} date={patient.date} submitDelete={props.submitDelete} />
            })}
        </List>
    )
}