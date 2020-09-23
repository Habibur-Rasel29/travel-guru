import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 21.433920,
      lng: 91.987030,
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '550px', width: '100%', margin:"auto", marginTop:"40px",paddingLeft:'20px'  }}>
        <GoogleMapReact
      
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={91.954924}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
export default GoogleMap;