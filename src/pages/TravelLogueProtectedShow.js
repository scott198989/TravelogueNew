import { useParams } from 'react-router-dom';
import '../styles/TravelLogueProtectedShow.css';
import React from "react"
import { Card, CardImg, CardBody, CardText, CardSubtitle, Button, Container } from "reactstrap"

const TravelLogueProtectedShow = ({ currentUser, trips}) => {
    const { id } = useParams()
    const myTrips = trips?.filter(trip => currentUser?.id === trip.user_id)
    let currentTrip = myTrips?.find((trip) => trip.id === +id)

    return (
        <>
            <Container
                className='
                    text-center
                    text-white
                    mx-auto mt-5'
            >
                <h1>
                    Travelogue: 
                </h1>
                <h1>
                    {currentTrip?.title}
                </h1>
            </Container>
            <main
                className='
                    mx-auto my-5
                    d-flex
                    flex-wrap
                    justify-content-center'
            >
                {currentTrip && (
                    <>
                        <CardImg
                            alt="Photo from trip"
                            src={currentTrip.photo}
                            className='image__proshow'
                        />
                        <Card
                            style={{ width:"80vw" }}
                        >
                            <CardBody>
                                <CardSubtitle
                                    className="mb-text-muted"
                                    tag="h5"
                                >
                                    {currentTrip.city}   {currentTrip.state}
                                    <br />
                                    {currentTrip.country}, {currentTrip.region}
                                </CardSubtitle>

                                <CardSubtitle
                                    className="mb-2 text-muted mt-2"
                                    tag="h5"
                                >
                                    Arrived: {currentTrip.start_date}
                                    <br />
                                    Departed:  {currentTrip.end_date}
                                </CardSubtitle>
                                
                                <CardText>
                                    {currentTrip.entry}
                                </CardText>
                            </CardBody>
                            <div 
                                className="
                                    justify-content-between
                                    align-items-center
                                    text-center"
                            >
                                <Button 
                                    className="
                                        btn-details-edit__proshow
                                        my-3 
                                        text-center"
                                    href={`/changetrips/${currentTrip.id}`}
                                >   
                                    Edit travelogue
                                </Button>
                                <Button 
                                    className="
                                        btn-details-back__proshow 
                                        my-3 
                                        text-center"
                                    href={`/mytrips`}
                                >   
                                    Back to all
                                </Button>

                            </div>
                        </Card>
                    </>
                )}
            </main>
            <br />
            <br />
        </>
    )
}

export default TravelLogueProtectedShow;
