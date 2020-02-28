import React, { Component } from 'react';

class Card extends Component {

    render() {
        
        return (
            <div className="col s12 m12 l12">
                <div className = "card blue-grey darken-2" >
                    <div className="card-content white-text">
                        <span className="card-title">You have no tasks!</span>
                        <p style={{ fontSize: '18px' }}>Use the form above to add new tasks or enjoy your free time!</p>
                    </div>
                    <div className="card-action">
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;