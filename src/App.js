import React from "react";
import Patient from "./components/Patient";

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      lastname: '',
      date: '',
      task: []
    }
    this.submitHandler = this.submitHandler.bind(this)
  }

  submitHandler(event) {
    event.preventDefault();
    if (this.state.name !== '')
    this.setState((prevState) => {
    return {task: [...prevState.task, {name: prevState.name, lastname: prevState.lastname, date: prevState.date}], name: '', lastname: '', date: ''}})
  }

render() {
    
  return (
    <>
  <form onSubmit={this.submitHandler}>
    <input type="text" value={this.state.name} 
    onChange={(event) => {this.setState({name: event.target.value})}}/>
    <input type="text" value={this.state.lastname}
    onChange={(event) => {this.setState({lastname: event.target.value})}}/>
    <input type="text" value={this.state.date}
    onChange={(event) => {this.setState({date: event.target.value})}}/>
   <button type="submit">Submit</button>
  </form>
  <ul>
       {this.state.task.map((task, index) => {
         return <Patient key={index} name={task.name} lastname={task.lastname} date={task.date}/>
       })}
     </ul>
   </>
  )
}
}



