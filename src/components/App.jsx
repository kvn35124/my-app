import React from 'react';


// let App = (props) => {
//     if (props.order) {
//         return (
//             <div>
//                 <h1>Hello World!</h1>
//                 <p>My fav pizza is {props.pizza} with {props.crust} crust.</p>
//             </div>
//         );
//     } 

// };

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Papa John\'s is better than Domino\'s.',
            text2: '',
            placeholder: 'Input',
            hasLoaded: false
        }
    }

    handleEvent(event) {
        this.setState({
            text2: event.target.value
        })
    }

    handleClick(e) {
        this.setState({
            hasLoaded: true
        })
    }

    render() {

        if (this.state.hasLoaded === true) {
            return (
                <React.Fragment>

                    <p>My fav pizza is {this.props.pizza} with {this.props.crust} crust. {this.state.text}</p>
                    <input
                        type="text"
                        value={this.state.text2}
                        placeholder={this.state.placeholder}
                        id="input"
                        onChange={(event) => this.handleEvent(event)}
                    />

                </React.Fragment>

            )
        } else {
            return (
                <React.Fragment>
                    <h1>Loading</h1>
                    <button onClick={(e) => this.handleClick(e)}>Submit</button>
                </React.Fragment>

            )
        }
    }
}


export default App;