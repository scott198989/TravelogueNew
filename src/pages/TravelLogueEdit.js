import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col, Modal, ModalHeader, ModalFooter } from "reactstrap"
import '../styles/TravelLogueEdit.css';
import countries from '../components/Countries'
import regions from '../components/Regions'
import { useParams, useNavigate } from "react-router-dom"


const TravelLogueEdit = ({ trips, updateTrip, deleteTrip, currentUser }) => {   
    const { id } = useParams()
    let currentTrip = trips?.find((trip) => trip.id === +id)
    const [modal, setModal] = useState(false)
    const [backdrop, setBackdrop] = useState(true)
    
    const toggle = () => setModal(!modal)

    const [editTrip, setEditTrip] = useState({
        title: currentTrip?.title,
        entry: currentTrip?.entry,
        photo: currentTrip?.photo,
        start_date: currentTrip?.start_date,
        end_date: currentTrip?.end_date,
        city: currentTrip?.city,
        state: currentTrip?.state,
        country: currentTrip?.country,
        region: currentTrip?.regions,
        international: currentTrip?.international,
        user_id: ""

    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        setEditTrip({ ...editTrip, [e.target.name]: e.target.value });
    };
  
    const handleClick = () => {
        updateTrip(editTrip, currentTrip?.id );
        navigate(`/mytrips/${currentTrip?.id}`)
    };
  
    const handleDelete = () => {
        deleteTrip(currentTrip?.id)
        navigate(`/mytrips`)
    };
  
     
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
                        value={editTrip.user_id = currentUser?.id}
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
                                value={editTrip.title}
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
                                value={editTrip.photo}
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
                                value={editTrip.city}
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
                                value={editTrip.state}
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
                                onChange={handleChange}
                                value={editTrip.country}
                                className='text-secondary'>
                                {countries}
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col className="md-4">
                        <FormGroup>
                            <Label for="trip-region" className="text-white">
                                Region*:
                            </Label>
                            <Input
                                id="trip-region"
                                type="select"
                                name="region"
                                placeholder="what trip did you go on?"
                                className='text-secondary'
                                onChange={handleChange}
                                value={editTrip.region}>
                                {regions}
                            </Input>
                        </FormGroup>
                    </Col>

                    <Col>
                        <FormGroup switch className='mt-4'>
                            <Label check for="trip-international" className="text-white">
                                International?
                            </Label>
                            <Input
                                id="trip-international"
                                type="switch"
                                role='switch'
                                name="international"
                                onChange={handleChange}
                                value={editTrip.international}
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
                                value={editTrip.start_date}
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
                                value={editTrip.end_date}
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
                                value={editTrip.entry}
                            />
                        </FormGroup>   
                    </Col>
                </Row>

                <Row>
                    <Col className='text-center'>
                        <Button onClick={handleClick} 
                            className='btn-details__edit--edit'>
                            Confirm Changes!
                        </Button>
                        <Button onClick={toggle} 
                            className='btn-details__edit--delete'
                        >
                            Delete Trip
                        </Button>
                        <Modal isOpen={modal} toggle={toggle}>
                            <ModalHeader toggle={toggle}>
                                Are you sure you want to delete?
                            </ModalHeader>
                            <ModalFooter className='text-center'>
                                <Button className='btn-details__edit--delete' onClick={handleDelete}>
                                    Delete
                                </Button>
                                <Button className='btn-details__edit--edit' onClick={toggle}>
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </Col>
                </Row>
            </Form>
            <br />
        </>
    );
}

export default TravelLogueEdit;
