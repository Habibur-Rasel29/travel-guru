
import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { tourPlace } from '../../fakedata/fakedata';
import Header from '../Header/Header';


import './Booking.css';



const Booking = () => {

    const history = useHistory();

    const handleBooking =()=>{
        history.push("/booking/myPlace")
    }

    const { id } = useParams();
    const place = tourPlace.find(places => places.id === id);
    console.log(place);

    const tourPlaces = { ...tourPlace };
    const [newPlace, setNewPlace] = useState(tourPlace[0]);
    const { name, description } = newPlace;






    return (
        <div className="booking">
            <div className="booking-page">
                <Header></Header>
        
            <div className="container">
            <div className="row">
                <div className="col-md-6 name">
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>

                <div className="col-md-6">
               
             <div className="booking-form">                 
       
                    <div className="current">
                    <p> Origin</p>
                  
                        <input type={newPlace.name} name="" id="" placeholder="Origin"/>
                    
                     </div>
                     <div className="current">
                   <p>Destination</p>
               
                        <input type="text" name="" id="" placeholder="Destination"/>
                     </div>
                     <div className="date">
                         <div className="from">
                       <p>From</p>
                         
                       <input type="date" name="" id=""/>
                         </div>
                         <div className="from">
                   <p>To</p>
                    
                        <input type="date" name="" id=""/>
                         </div>
                     </div>
                <div className="submit">
                    <br/>
               <input onClick={handleBooking} type="submit" value="Start Booking" />
                </div>
              
                     
              
             </div>
             </div>
        </div>
            </div>
        </div>
        </div>
       
    );
};

export default Booking;