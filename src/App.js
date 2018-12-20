import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        characters1: []
    };

    removeCharacter = index => {
        const { characters1 } = this.state;

        console.log(this);

        this.setState({
            characters1: characters1.filter((character, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters1: [...this.state.characters1, character]});
    }

    render() {
        const { characters1 } = this.state;
        return (
            <div className="container">
                <Table
                    characterData={characters1}
                    removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;


// import React, {Component} from 'react';
// import Table from './Table';
// import Form from './Form';
//
// class App extends Component {
//     state = {
//         characters1: []
//     };
//
//     removeCharacter = index => {
//         const { characters1 } = this.state; //This creates const characters1 = this.state.characters1, where "this" is the App class
//
//         console.log(this);
//
//         this.setState({
//             characters1: characters1.filter((character, i) => { //This changes the state.characters above, the key is the name of the state.character1
//                 return i !== index; //This boolean is the condition of what is returned, This is saying return anything that is not the index
//             })
//         });
//     }
//
//     handleSubmit = character => {
//         // var parts = ['shoulders', 'knees'];
//         // var lyrics = ['head', ...parts, 'and', 'toes'];
//         // ["head", "shoulders", "knees", "and", "toes"]
//         this.setState({characters1: [...this.state.characters1, character]});
//     }
//
//     render() {
//         const { characters1 } = this.state;
//         return (
//             <div className="container">
//                 <Table
//                     characterData={characters1}
//                     removeCharacter={this.removeCharacter}
//                 />
//                 <Form handleSubmit={this.handleSubmit} />
//             </div>
//         );
//     }
// }
//
// export default App;
