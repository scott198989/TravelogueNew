import React, { useState } from 'react' 
import { Form, FormGroup, Label, Input, Button, Row, Col, Alert } from "reactstrap"
import countries from '../components/Countries'
import regions from '../components/Regions'
import { useNavigate } from 'react-router-dom'
import '../styles/New.css'

const TravelLogueNew = ({ currentUser, createTrip }) => {
    const [newTrip, setNewTrip] = useState({
        title: "",
        entry: "",
        photo: "",
        start_date: "",
        end_date: "",
        city: "",
        state: "",
        country: "",
        region: "",
        international: false,
        user_id: ""
    })
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setNewTrip({ ...newTrip, [e.target.name]: e.target.value })
    }

    const handleSwitchChange = (e) => {
        const { name, checked } = e.target;
        setNewTrip((prevState) => ({
            ...prevState, [name]: checked,
        }));
    };

    const handleClick = (e) => {
        if(
            newTrip.title !== "" && 
            newTrip.entry !== "" && 
            newTrip.country !== "" && 
            newTrip.region !== ""
            ) {
            e.preventDefault()
            createTrip(newTrip)
            navigate(`/mytrips`)
        }
        else {
            setError(true)
        }
    }

    return (
        <>
            <Form className="no-touchy mx-5 my-3">
                <FormGroup>
                    <Label for="user_id" hidden>
                        User Id
                    </Label>
                    <Input
                        id="user_id"
                        name="user_id"
                        onChange={handleChange}
                        value={newTrip.user_id = currentUser?.id}
                        type="hidden"
                    />
                </FormGroup>
                <Row>
                    <Col className="md-4">
                        <FormGroup>
                            <Label for="trip-title" className="text-white">
                                Title*:
                            </Label>
                            <Input
                                id="trip-title"
                                type="text"
                                name="title"
                                placeholder="(Required) What trip did you go on?"
                                onChange={handleChange}
                                value={newTrip.title}
                            />
                        </FormGroup>
                    </Col>

                    <Col className="col col-md-4">
                        <FormGroup>
                            <Label for="trip-photo" className="text-white">
                                Photo:
                            </Label>
                            <Input
                                id="trip-photo"
                                type="text"
                                name="photo"
                                placeholder="Link your best photo here"
                                onChange={handleChange}
                                value={newTrip.photo}
                            />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col className="md-4">
                        <FormGroup>
                            <Label for="trip-city" className="text-white">
                                City:
                            </Label>
                            <Input
                                id="trip-city"
                                type="text"
                                name="city"
                                placeholder="City visited"
                                onChange={handleChange}
                                value={newTrip.city}
                            />
                        </FormGroup>
                    </Col>

                    <Col className="col col-md-4">
                        <FormGroup>
                            <Label for="trip-state" className="text-white">
                                State:
                            </Label>
                            <Input
                                id="trip-state"
                                type="text"
                                name="state"
                                placeholder="State visited"
                                onChange={handleChange}
                                value={newTrip.state}
                            />
                        </FormGroup>
                    </Col>

                    <Col className="col col-md-4">
                        <FormGroup>
                            <Label for="trip-country" className="text-white">
                                Country*:
                            </Label>
                            <Input
                                id="trip-country"
                                type="select"
                                name="country"
                                placeholder='default'
                                value={newTrip.country}
                                className='text-secondary'
                                onChange={handleChange}   
                            >
                            {countries}
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="trip-region" className="text-white">
                                Region*:
                            </Label>
                            <Input
                                id="trip-region"
                                type="select"
                                name="region"
                                placeholder="default trip did you go on?"
                                className='text-secondary'
                                onChange={handleChange}
                                value={newTrip.region}
                                >
                                {regions}
                            </Input>
                        </FormGroup>
                    </Col>

                    <Col>
                        <FormGroup switch className='d-flex flex-wrap mt-3'>
                            <Label check for="trip-international" className="mt-4 text-white">
                                International?
                            </Label>
                            <Input
                                id="trip-international"
                                type="switch"
                                role='switch'
                                name="international"
                                className='mt-0'
                                checked={newTrip.international}
                                onChange={handleSwitchChange}
                            />
                        </FormGroup>       
                    </Col>

                    <Col>
                        <FormGroup>
                            <Label for="trip-start_date" className="text-white">
                                Start date:
                            </Label>
                            <Input
                                id="trip-start_date"
                                type="date"
                                name="start_date"
                                className='text-secondary'
                                onChange={handleChange}
                                value={newTrip.start_date}
                                />
                        </FormGroup>                    
                    </Col>

                    <Col>
                        <FormGroup>
                            <Label for="trip-end_date" className="text-white">
                                End date:
                            </Label>
                            <Input
                                id="trip-end_date"
                                type="date"
                                name="end_date"
                                className='text-secondary'
                                onChange={handleChange}
                                value={newTrip.end_date}
                                />
                        </FormGroup>                    
                    </Col>
                </Row>

                <Row>
                    <Col className='text-center'>
                        <FormGroup>
                            <Label for="trip-entry" className="text-white">
                                Entry*:
                            </Label>
                            <Input
                                id="trip-entry"
                                type="textarea"
                                name="entry"
                                placeholder='(Required) How was your trip? Spill the deets!'
                                onChange={handleChange}
                                value={newTrip.entry}
                                />
                        </FormGroup>   
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center'>
                        <Button
                            onClick={handleClick}
                            className="btn-details__new"
                        >
                            Add this trip to my Travelogue!
                        </Button>
                    </Col>
                </Row>
            </Form>
            {error && (
                <Alert color="info" className='text-center mx-auto my-4' style={{ width: "50vw" }}>
                    Error!  <br />
                    Please make sure you are logged in and have filled out all required fields: title, entry, country, and region. 
                </Alert>
            )}
            <br />
        </>
    );
}

export default TravelLogueNew;