import React, {useState} from 'react'

const RegisterForm = (props) => {

    const initialStateInformation = {
        childFirstName: '',
        childLastName: '',
        dateOfBirth: '',
        childAddress: '',
        gender: '',

        motherFirstName: '',
        motherLastName: '',
        motherAddress: '',
        motherPhone: '',
        motherCellPhone: '',
        
        fatherFirstName: '',
        fatherLastName: '',
        fatherAddress: '',
        fatherPhone: '',
        fatherCellPhone: ''
    }

    const [information, setInformation]= useState(initialStateInformation);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setInformation({...information, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.addOrEditStudent(information);
        setInformation({...initialStateInformation})
    }

    return (
                <form onSubmit={handleSubmit}>
                    <small>Children information</small>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>First Name</label>
                            <input type="text" name="childFirstName" className="form-control" placeholder="First Name"
                            onChange={handleInputChange}
                            value={information.childFirstName}/>
                        </div>

                        <div className="form-group col-md-6">
                            <label>Last Name</label>
                            <input type="text" name="childLastName" className="form-control" placeholder="Last Name"
                            onChange={handleInputChange}
                            value={information.childLastName}/>
                        </div>

                        <div className="form-group col-md-6">
                            <label>Date of birth</label>
                            <input className="form-control" name="dateOfBirth" type="date" value=""
                            onChange={handleInputChange}
                            value={information.dateOfBirth}/>
                        </div>

                        <div className="form-group col-md-6">
                            <label>Address</label>
                            <input type="text" className="form-control" name="childAddress" placeholder="Address"
                            onChange={handleInputChange}
                            value={information.childAddress}/>
                        </div>

                        <div className="form-group col-md-6">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="Female"
                                onChange={handleInputChange}
                                value={information.gender}/>
                                <label className="form-check-label" for="inlineRadio1">Female</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="Male"
                                onChange={handleInputChange}
                                value={information.gender}/>
                                <label className="form-check-label" for="inlineRadio2">Male</label>
                            </div>
                        </div>
            
                    </div>

                    <small className="" style={{color:'red'}}>Mother information</small>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="">First Name</label>
                            <input type="text" name="motherFirstName" className="form-control" placeholder="First Name"
                            onChange={handleInputChange}
                            value={information.motherFirstName}/>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="">Last Name</label>
                            <input type="text" name="motherLastName" className="form-control" placeholder="Last Name"
                            onChange={handleInputChange}
                            value={information.motherLastName}/>
                        </div>

                        <div className="form-group col-md-12">
                            <label for="">Address</label>
                            <input type="text" name="motherAddress" className="form-control" placeholder="Address"
                            onChange={handleInputChange}
                            value={information.motherAddress}/>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="">Cell phone</label>
                            <input type="tel" name="motherCellPhone" className="form-control" placeholder="Cell phone"
                            onChange={handleInputChange}
                            value={information.motherCellPhone}/>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="">Phone</label>
                            <input type="tel" name="motherPhone" className="form-control" placeholder="Phone"
                            onChange={handleInputChange}
                            value={information.motherPhone}/>
                        </div>
                    </div>

                    <small className="" style={{color:'red'}}>Father information</small>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="">First Name</label>
                            <input type="text" name="fatherFirstName" className="form-control" placeholder="First Name"
                            onChange={handleInputChange}
                            value={information.fatherFirstName}/>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="">Last Name</label>
                            <input type="text" name="fatherLastName" className="form-control" placeholder="Last Name"
                            onChange={handleInputChange}
                            value={information.fatherLastName}/>
                        </div>

                        <div className="form-group col-md-12">
                            <label for="">Address</label>
                            <input type="text" name="fatherAddress" className="form-control" placeholder="Address"
                            onChange={handleInputChange}
                            value={information.fatherAddress}/>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="">Cell phone</label>
                            <input type="tel" name="fatherCellPhone" className="form-control" placeholder="Cell phone"
                            onChange={handleInputChange}
                            value={information.fatherCellPhone}/>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="">Phone</label>
                            <input type="tel" name="fatherPhone" className="form-control" placeholder="Phone"
                            onChange={handleInputChange}
                            value={information.fatherPhone}/>
                        </div>
                    </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
    )
}

export default RegisterForm