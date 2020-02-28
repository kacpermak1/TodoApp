import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

const Completionist = () => <span style={{color:'#ff3d00'}}>TIME IS UP!</span>;

class Card extends Component {

    state = {
        marked: ''
    }

    onClickMark = () => {
        if (localStorage.getItem(this.props.i)) {
            this.setState({marked:''})
            localStorage.removeItem(this.props.i, this.props.task)
        } else {
            this.setState({marked:this.props.i})
            localStorage.setItem(this.props.i, this.props.task)
        }
    }

    remove = (e) => {
        this.props.remove(this.props.i);
        this.props.removeDate(this.props.i);
        this.props.removeTime(this.props.i);
    }

    render() {

        const date = this.props.date + 'T' + this.props.time;

        return (
            <div className="col s12 m6 l6 xl4">
                <div className={localStorage.getItem(this.props.i) ? "card deep-orange lighten-1 " : "card blue-grey darken-2"}>
                    <div className="card-content white-text">
                        <span className="card-title">{this.props.task}</span>
                        <p>Deadline: </p>
                        <p style={{ fontSize: '18px',marginBottom:'10px' }}>{this.props.date} {this.props.time}</p>
                        <p>Time remaining:</p>
                        <Countdown date={date} renderer={props => <p style={{ fontSize: '18px' }}>{(props.days > 0) && props.days} {(props.days > 0 && props.days<2) && 'Day'} {(props.days > 1) && 'Days'} {(props.hours > 0) && props.hours} {(props.hours > 0) && 'h'} {(props.minutes > 0) && props.minutes + ' min'} {(props.seconds>0)&&props.seconds + ' sec'} {props.completed ? <Completionist /> : ''}</p>}/>
                    </div>
                    <div className="card-action">
                        <button onClick={this.remove} style={{ marginRight: '6px' }} className="waves-effect waves-light amber darken-1 btn-small">Remove</button>
                        <button onClick={this.onClickMark} className="amber darken-1 waves-light btn-small">Mark</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;