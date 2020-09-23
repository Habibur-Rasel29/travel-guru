import React, { useContext, useState } from 'react';
import tourHotel from '../../fakedata/Tourhotel';
import './Allplace.css';
import star from '../../images/Icon/star_1_.png'
import GoogleMap from '../GoogleMap/GoogleMap';
import { UserContext } from '../../App';



const AllPlace = () => {
    const [loggedInUser, setLoggedInUSer] = useContext(UserContext);
    const myPlace = { ...tourHotel };
    const [place, setPlace] = useState(tourHotel[0]);
    return (
        <div className="container">
            <hr />
            <div className="contain-map">
                <div col-md-6>
                    <h5>{loggedInUser.name}</h5>
                    <h4>Stay in Coxs Bazar</h4>
                    <div className="touHotel">
                        <div>
                            <img src={tourHotel[0].img} alt="" />
                        </div>
                        <div className="hotelDetails">
                            <h6>   {tourHotel[0].name}</h6>
                            <p>guests {tourHotel[0].guests} <span> {tourHotel[0].bedroom}bedrooms <span>{tourHotel[0].beds}beds</span> <span>{tourHotel[0].baths}baths</span></span></p>
                            <p>{tourHotel[0].kitchen}</p>
                            <p>{tourHotel[0].cancel}</p>
                            <div className="ratting">
                                <div className="star">
                                    <img src={star} alt="" />
                                    <span>{tourHotel[0].ratting}</span>
                                </div>
                                <span className="span"> ${tourHotel[0].price}/night ${tourHotel[0].total}
                                </span>

                            </div>
                        </div>


                    </div>
                    <div className="touHotel">
                        <div>
                            <img src={tourHotel[1].img} alt="" />
                        </div>
                        <div className="hotelDetails">
                            <h6>   {tourHotel[1].name}</h6>
                            <p>guests {tourHotel[0].guests} <span> {tourHotel[0].bedroom}bedrooms <span>{tourHotel[0].beds}beds</span> <span>{tourHotel[0].baths}baths</span></span></p>
                            <p>{tourHotel[0].kitchen}</p>
                            <p>{tourHotel[0].cancel}</p>
                            <div className="ratting">
                                <div className="star">
                                    <img src={star} alt="" />
                                    <span>{tourHotel[1].ratting}</span>
                                </div>
                                <span className="span"> ${tourHotel[1].price}/night ${tourHotel[1].total}
                                </span>

                            </div>
                        </div>
                    </div>
                    <div className="touHotel">
                        <div>
                            <img src={tourHotel[2].img} alt="" />
                        </div>
                        <div className="hotelDetails">
                            <h6>   {tourHotel[2].name}</h6>
                            <p>guests {tourHotel[0].guests} <span> {tourHotel[0].bedroom}bedrooms <span>{tourHotel[0].beds}beds</span> <span>{tourHotel[0].baths}baths</span></span></p>
                            <p>{tourHotel[0].kitchen}</p>
                            <p>{tourHotel[0].cancel}</p>
                            <div className="ratting">
                                <div className="star">
                                    <img src={star} alt="" />
                                    <span>{tourHotel[2].ratting}</span>
                                </div>
                                <span className="span"> ${tourHotel[2].price}/night ${tourHotel[2].total}
                                </span>

                            </div>
                        </div>

                    </div>
                </div>
                <div col-md-6>
                    <h1>Google Map</h1>
                    <GoogleMap></GoogleMap>
                </div>
            </div>

        </div>
    );
};

export default AllPlace;