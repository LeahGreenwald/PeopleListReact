import { Button } from 'bootstrap';
import React, { useDebugValue } from 'react';

class PersonForm extends React.Component{
    render(){
        return(
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-md-4'>
                        <input type='text' className='form-control' onChange={this.props.setFirstName} value={this.props.firstName} placeholder='First Name'/>
                    </div>
                    <div className='col-md-4'>
                        <input type='text' className='form-control' onChange={this.props.setLastName} value={this.props.lastName} placeholder='Last Name'/>
                    </div>
                    <div className='col-md-2'>
                        <input type='text' className='form-control' onChange={this.props.setAge} value={this.props.age} placeholder='Age'/>
                    </div>
                    <div className='col-md-1'>
                        <button className='btn btn-primary' onClick={this.props.addPerson}>Add</button>
                    </div>
                    <div className='col-md-1'>
                        <button className='btn btn-warning' onClick={this.props.clearPeople}>Clear</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default PersonForm;