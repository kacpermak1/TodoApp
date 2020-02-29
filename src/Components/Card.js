import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
class Card extends Component {

    state = {
        marked: '',
        tick: true
    }

    onClickMark = () => {
        if (localStorage.getItem(this.props.time + this.props.date)) {
            this.setState({ marked: '' })
            localStorage.removeItem(this.props.time + this.props.date, this.props.task)
        } else {
            this.setState({ marked: this.props.i })
            localStorage.setItem(this.props.time + this.props.date, this.props.task)
        }
    }

    removeMarkedTask = () => {
        if (localStorage.getItem(this.props.time + this.props.date) && localStorage.getItem(this.props.time + this.props.date) === this.props.task) {
            localStorage.removeItem(this.props.time + this.props.date, this.props.task)
        }
    }

    remove = (e) => {
        this.props.remove(this.props.i);
        this.props.removeDate(this.props.i);
        this.props.removeTime(this.props.i);
        this.removeMarkedTask();
    }

    render() {

        const date = this.props.date + 'T' + this.props.time;

        let localMarked;

        if (localStorage.getItem(this.props.time + this.props.date) && localStorage.getItem(this.props.time + this.props.date) === this.props.task) {
            localMarked = true
        } else { localMarked = false }

        const Completionist = () => <span style={{ color: localMarked ? '#263238' : '#ff3d00' }}>TIME IS UP!</span>;

        return (
            <div className="col s12 m6 l6 xl4">
                <div className={localMarked ? "card deep-orange lighten-1 " : "card blue-grey darken-2"} style={{ zIndex: "2" }}>
                    <div className="card-content white-text">
                        <span className="card-title">{this.props.task}</span>
                        <p>Deadline: </p>
                        <div style={{ fontSize: '18px', display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <i className="material-icons" style={{ fontSize: '18px', marginRight: "2px" }}>date_range</i> <p>{this.props.date.split('-').reverse().join('.')}</p>
                        </div>
                        <div style={{ fontSize: '18px', marginBottom: '10px', display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <i className="material-icons" style={{ fontSize: '18px', marginRight: "2px" }}>query_builder</i> <p>{this.props.time}</p>
                        </div>
                        <p>Time remaining:</p>
                        <Countdown date={date} key={this.props.i} renderer={props => <p style={{ fontSize: '18px' }}>{(props.days > 0) && props.days}{(props.days > 0 && props.days < 2) && 'Day'}{(props.days > 1) && 'Days'} {(props.hours > 0) && props.hours}{(props.hours > 0) && 'h'} {(props.minutes > 0) && props.minutes + 'min'} {(props.seconds > 0) && props.seconds + 'sec'} {props.completed ? <Completionist /> : ''}</p>} />
                    </div>
                    <div className="card-action">
                        <button className="btn-floating halfway-fab waves-effect waves-light blue-grey lighten-2" onClick={this.onClickMark}><i className="material-icons">add</i></button>
                        <button onClick={this.remove} style={{ marginRight: '6px' }} className="waves-effect waves-light amber darken-1 btn-small">Remove</button>
                        <button onClick={e=>this.props.prioritize(this.props.i)} className="amber darken-1 waves-light btn-small">Prioritize</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;