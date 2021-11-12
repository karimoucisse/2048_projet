import React, { Component } from 'react'

export default class Profil extends Component {
    render() {
        return (
            <div className="profil">
                <div className="form">
                    <label>Pseudo</label>
                    <input type="text"
                        onChange={this.props.onChange}
                    />
                </div>
                {/* <div className="logos">
                    <h1>Logos</h1>
                    <div>
                        <i className="fas fa-male"></i>
                        <i className="fas fa-female"></i>
                        <i className="fas fa-cat"></i>
                    </div>
                    <div>
                        <i className="fas fa-crow"></i>
                        <i className="fas fa-dragon"></i>
                        <i className="fas fa-hippo"></i>
                    </div>
                    <div>
                        <i className="fas fa-horse"></i>
                        <i className="fas fa-otter"></i>
                        <i className="fas fa-spider"></i>
                    </div>
                    
                </div> */}
            </div>

        )
    }
}
