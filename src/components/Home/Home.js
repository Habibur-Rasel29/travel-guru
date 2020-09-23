
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Home.css';
import { tourPlace } from '../../fakedata/fakedata';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'




const Home = () => {



    const tourPlaces = { ...tourPlace };
    const [newPlace, setNewPlace] = useState(tourPlaces[0]);
    const { id, name, description } = newPlace;



    const handleTourPlace = (place) => {
        setNewPlace(tourPlace[place]);
    }



    return (
        <div>

            <div className="home-back">

                <div className="home-back-overlay">
                    <Header></Header>

                    <div class="body">
                        <div className="container body-section">

                            <div className="col-md-4">
                                <div>
                                    <h1> {name} </h1>
                                    <p>{description}</p>

                                    <div>

                                        <br />
                                        <Link to={`/place/+${id}`}><button className="booked">Booking <span><ArrowForwardIcon/></span> </button></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-8">
                                <div class="card-section">

                               
                                    <Card className="card coxsbazar" onClick={() => handleTourPlace(0)} >
                                        <Card.Img variant="top"/>

                                        <Card.Body>
                                            <Card.Title className="placename"><h5>COX'S BAZAR</h5></Card.Title>
                                            <Card.Text>
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>

                                    <Card className=" sreemongol" onClick={() => handleTourPlace(1)}>
                                        <Card.Img variant="top" className="" />

                                        <Card.Body>
                                            <Card.Title className="placename"><h5>SREEMONGOL</h5></Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                  
                                    <Card className="card sundarbuns" onClick={() => handleTourPlace(2)}>
                                        <Card.Img variant="top"  />

                                        <Card.Body>
                                            <Card.Title className="placename"><h5>SUNDURBANS</h5></Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>




    );
};

export default Home;