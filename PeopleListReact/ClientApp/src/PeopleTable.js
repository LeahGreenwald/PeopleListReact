import React from 'react';
import PersonForm from './PersonForm.js';
import PersonRow from './PersonRow.js';

class PeopleTable extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        age: '',
        People: []
    }

    setFirstName = e => {
        let firstName = e.target.value;
        this.setState({ firstName });
    }

    setLastName = e => {
        let lastName = e.target.value;
        this.setState({ lastName });
    }

    setAge = e => {
        let age = e.target.value;
        this.setState({ age });
    }

    addPerson = () => {
        const { firstName, lastName, age, People } = this.state;
        const person = {
            firstName, lastName, age
        };
        const peopleCopy = [...People, person];
        this.setState({ People: peopleCopy, firstName: '', lastName: '', age: '' });
    }

    clearPeople = () => {
        const empty = [];
        this.setState({ People: empty });
    }

    showPeople = () => {
        if (this.state.People.length == 0) {
            return <h1>No people added yet! Add a person</h1>
        }
        else {
            return <table className='table table-striped table-hover table-bordered mt-3'>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.People.map((person, idx) => <PersonRow
                        firstName={person.firstName}
                        lastName={person.lastName}
                        age={person.age}
                        index={idx} />)}
                </tbody>
            </table>
        }
    }


    render() {
        return (
            <div className='container'>
                <PersonForm
                    setFirstName={this.setFirstName}
                    setLastName={this.setLastName}
                    setAge={this.setAge}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    age={this.state.age}
                    addPerson={this.addPerson}
                    clearPeople={this.clearPeople}
                />
                <div className='container'>
                    {this.showPeople()}
                </div>
            </div>
        );
    }
}

export default PeopleTable;