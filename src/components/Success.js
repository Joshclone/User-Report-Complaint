import React, { Component } from 'react'

export class Success extends Component {
    render() {
        return (
            <section>
                <div>
                    <h1 className="text-white"><b>Successful!</b></h1>
                </div>

                <div>
                    <span className="text-white">Your complaint has been recorded</span>
                </div>
            </section>
        )
    }
}

export default Success
