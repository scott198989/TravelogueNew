import React from "react"
import '../styles/Index.css'
import { Card, CardBody, CardTitle, CardSubtitle, Button, Container, CardImg } from "reactstrap"

const TravelLogueIndex = ({trips}) => {

    return(
        <Container 
            className="
                d-flex
                flex-wrap
                justify-content-center
                align-items-center
                card-columns-4 
                mt-2 px-2 py-2
                align-items center"
        >
            {trips?.map((trip, index) => {
                return(
                    <Card 
                        key={index} 
                        hover
                        style={{
                            width:"19rem",
                            height: "25rem"
                        }}
                        className="
                            cards__index
                            each-card
                            my-4 mx-4
                            shadow-5"
                    >
                        <CardImg 
                            alt={`Photo from a trip to ${trip.country}`}
                            src={trip.photo}
                            style={{
                                width:"100%",
                                height:"60%",
                                position:"relative"
                            }}
                            className="card-img__index"
                        />

                        <CardBody className="px-3 py-4">
                            <CardTitle>
                                {trip.title}
                            </CardTitle>
                            <CardSubtitle
                                className="text-muted"
                            >
                                {trip.country}
                            </CardSubtitle>  
                            <div 
                                className="
                                    justify-content-between
                                    align-items-center
                                    text-center">
                                <Button 
                                    className="mt-3 text-center btn-details__index"
                                    href={`/demotrips/${trip.id}`}
                                >   
                                    See travelogue
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                )
            })}
        </Container> 
    )
}

export default TravelLogueIndex;