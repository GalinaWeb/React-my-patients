export default function Patient(props) {
    return (<li>{props.name} {props.lastname} {props.date} 
    <button onSubmit={() => props.submitDelete(props.index)} type="submit">Delete</button></li>
    )
}