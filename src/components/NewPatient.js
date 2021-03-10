import { useState } from "react";
import Button from '@material-ui/core/Button';
import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles ({
    root: {
        display: "flex"
    },
    TextField: {
        marginRight: 10,
        flexGrow: 1 
    }
})

export default function NewPatient(props){
    const classes = useStyles();
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [date, setDate] = useState('')
    
    function submitHandler(event) {

        event.preventDefault();
        if (name !== '' && lastname !== '' && date !== '') {
            props.addPatient({name: name, lastname: lastname, date: date})
            setName('')
            setLastname('')
            setDate('')
           
        }

    }

   return <form className={classes.root} onSubmit={submitHandler}>
       <TextField className={classes.TextField} label="Message text" variant="outlined"
     value={name}
        onChange={(event) => { setName(event.target.value) }} />
    <TextField className={classes.TextField} label="Message text" variant="outlined" value={lastname}
        onChange={(event) => { setLastname(event.target.value) }} />
    <TextField className={classes.TextField} label="Message text" variant="outlined" value={date}
        onChange={(event) => { setDate(event.target.value) }} />
    <Button type="submit" variant="contained" color="primary">Add</Button>
</form>
}

