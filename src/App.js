import React, { Component } from 'react';
import Card from './Components/Card';
import WelcomeCard from './Components/WelcomeCard';
import M from "materialize-css";

const d = new Date();
let mm = d.getMonth() + 1;
let dd = d.getDate();
const yy = d.getFullYear();

let currentHours = d.getHours();
let currentMinutes = d.getMinutes();
if (currentMinutes < 10) { currentMinutes = '0' + currentMinutes };
if (currentHours < 10) { currentHours = '0' + currentHours };
if (dd < 10) { dd = '0' + dd };
if (mm < 10) { mm = '0' + mm };

const initState = currentHours + ':' + currentMinutes;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      tasks: localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [],
      dates: localStorage.getItem('dates') ? JSON.parse(localStorage.getItem('dates')) : [],
      times: localStorage.getItem('times') ? JSON.parse(localStorage.getItem('times')) : [],
      dateVal: yy+"-"+mm+"-"+dd,
      timeVal: initState,
      incompleteFormAttempt: false
    }
    this.dateVal = React.createRef();
    this.timeVal = React.createRef();
  }

  componentDidMount() {

    const context = this;
    document.addEventListener('DOMContentLoaded', function () {
      const dateElems = document.querySelectorAll('.datepicker');
      M.Datepicker.init(dateElems, {
        minDate: new Date(),
        format: 'yyyy-mm-dd',
        onClose: context.onDateChange
      });
      const timeElems = document.querySelectorAll('.timepicker');
      M.Timepicker.init(timeElems, {
        twelveHour: false,
        onCloseEnd: context.onTimeChange
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      this.setLocalStorage()
    }
  }

  onInputValChange = (e) => {
    this.setState({ inputVal: e.target.value })
  }

  onDateChange = (e) => {
    this.setState({ dateVal: this.dateVal.current.value })
  }

  onTimeChange = (e) => {
    this.setState({ timeVal: this.timeVal.current.value })
  }

  onButtonClick = (e) => {
    e.preventDefault();
    const { inputVal, dateVal, timeVal, tasks, dates, times, incompleteFormAttempt } = this.state;

    const newTasks = [...tasks, inputVal];
    const newDates = [...dates, dateVal];
    const newTimes = [...times, timeVal];

    if (inputVal !== '' && dateVal !== '' && timeVal !== '') {
      this.setState({ tasks: newTasks, inputVal: '', dateVal: '', timeVal: '', dates: newDates, times: newTimes, incompleteFormAttempt: false });
    } else { this.setState({ incompleteFormAttempt: !incompleteFormAttempt }) }
  }

  removeTask = (taskIndex) => {
    const taskToRemove = this.state.tasks.splice(taskIndex, 1);
    const newArr = this.state.tasks.filter(task => task !== taskToRemove);

    if (JSON.parse(localStorage.getItem('tasks')).length <= 1) {
      localStorage.clear()
    }else{this.setState({ tasks: newArr });}
  }

  removeDate = (dateIndex) => {
    const dateToRemove = this.state.dates.splice(dateIndex, 1);
    const newArr = this.state.dates.filter(date => date !== dateToRemove);
    this.setState({ dates: newArr });
  }

  removeTime = (timeIndex) => {
    const timeToRemove = this.state.times.splice(timeIndex, 1);
    const newArr = this.state.times.filter(date => date !== timeToRemove);
    this.setState({ times: newArr });
  }

  setLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    localStorage.setItem('dates', JSON.stringify(this.state.dates));
    localStorage.setItem('times', JSON.stringify(this.state.times));
  }

  prioritizeTask = (index) => {
    const { tasks, dates, times } = this.state;
    const arrayMove = require('array-move');
    const newTasks = arrayMove(tasks, index, 0)
    const newDates = arrayMove(dates, index, 0)
    const newTimes = arrayMove(times, index, 0)
    this.setState({ tasks: newTasks, dates: newDates, times: newTimes });
  }

  render() {

    return (
      <>
        <div className="background" >
          <div className="main_content" style={{ height: "100vh", overflow: "scroll", paddingBottom: window.innerWidth <= 1024 ? "120px" : "40px" }}>
            <div className="row container" style={{ marginTop: "20px" }}>
              <form className="col s12">
                <div className="input-field">
                  <label>Task</label>
                  <input value={this.state.inputVal} onChange={this.onInputValChange} placeholder="to do" id="first_name" type="text" />
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <input type="text" ref={this.dateVal} onChange={this.onDateChange} value={this.state.dateVal} className="datepicker" placeholder="Deadline Date" />
                    <label>Deadline date</label>
                  </div>
                  <div className="input-field col s6">
                    <input type="text" ref={this.timeVal} onChange={this.onTimeChange} value={this.state.timeVal} id='time' placeholder="Deadline Time" className="timepicker" />
                    <label htmlFor='time'>Deadline time</label>
                  </div>
                </div>
                <div style={{ position: "relative" }}>
                  <button onClick={this.onButtonClick} className="amber darken-1 btn">Add task</button>
                  {this.state.incompleteFormAttempt ? <p className="form_message">Fill all the inputs above</p> : ''}
                </div>
              </form>
            </div>
            <div className="container">
              <div className="row">
                {(this.state.tasks) &&
                  this.state.tasks.map((task, i) => { return <Card task={task} key={this.state.times[i]+this.state.dates[i]+task} i={i} time={this.state.times[i]} date={this.state.dates[i]} remove={this.removeTask} removeTime={this.removeTime} removeDate={this.removeDate} prioritize={this.prioritizeTask} /> })
                }
                {(this.state.tasks && this.state.tasks.length === 0) && <WelcomeCard />}
              </div>
            </div>
          </div>
          <div className="footer" style={{ position: "fixed", bottom: "0" }}><p> Created by Kacper Makowka</p></div>
        </div>
      </>
    )
  }
}

export default App;
