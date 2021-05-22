import React, { Component, useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './Map';

//It sets the map zise.
const mapStyles = {
    width: '93%',
    height: '85%'
};



//This component provides a google map with info windows and markers.
export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,  // Hides or shows the InfoWindow
            activeMarker: {},          // Shows the active marker upon click
            selectedPlace: {},          // Shows the InfoWindow to the selected place upon a marker
            theLocation: {}
        };
        // binding this to event-handler functions
        this.onMarkerClick = this.onMarkerClick.bind(this);
        //this.onTrigger = this.onTrigger.bind(this);
    }

    componentDidMount() {

    }

    onMarkerClick(props, marker, e) {

        console.log(props)
        console.log(marker)
        console.log(e)
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
        })
        this.props.parentCallback(props.position);
    }

    // onTrigger = (event) => {
    //     console.log("Trigger")
    //     this.props.parentCallback(this.state.activeMarker);
    //     event.preventDefault();
    // }

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };


    render() {
        if (this.props.locations[0].info.long === 144.9407233) {
            return (
                // <CurrentLocation
                //     centerAroundCurrentLocation
                //     google={this.props.google}

                // >



                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={
                        {

                            lat: -37.812364, // need better init pos init
                            lng: 144.964181   // same here
                        }
                    }
                >

                    {

                        this.props.locations.map((location) => {
                            return <Marker
                                key={location.id}
                                position={{
                                    lat: location.info.lat,
                                    lng: location.info.long
                                }}
                                onClick={this.onMarkerClick}    //onClick, not onclick
                                name={location.info.DESCRIPTIO}


                            />
                        })

                    }
                    {/* 
                    <Marker
                        onClick={this.onMarkerClick}
                        name={'Kenyatta International Convention Centre'}
                    /> */}


                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                    >
                        <div>
                            <h4>{this.state.selectedPlace.name}</h4>
                        </div>
                    </InfoWindow>
                    {/* {selectedCenter && (
                        <InfoWindow
                            onCloseClick={() => {
                                setSelectedCenter(null);
                            }}
                            position={{
                                lat: selectedCenter.latitude,
                                lng: selectedCenter.longitude
                            }}
                        >
                            <div>
                                <h3>{selectedCenter.name}</h3>
                                <h5>{selectedCenter.address}, {selectedCenter.city},{selectedCenter.state} {selectedCenter.zip_code}</h5>
                                <h5>{selectedCenter.phone_number}</h5>
                                <p>Hours of operation: {selectedCenter.hours}</p>
                            </div>
                        </InfoWindow>
                    )} */}
                </Map>

            );
        }
        else {
            return (
                // <CurrentLocation
                //     centerAroundCurrentLocation
                //     google={this.props.google}

                // >



                <Map
                    google={this.props.google}
                    zoom={10}
                    style={mapStyles}
                    initialCenter={
                        {

                            lat: -37.812364,
                            lng: 144.964181
                        }
                    }
                >

                    {
                        this.props.locations.map((location) => {
                            return <Marker
                                key={location.id}
                                position={{
                                    lat: location.info.Latitude,
                                    lng: location.info.Longitude
                                }}
                                onClick={this.onMarkerClick}    //onClick, not onclick
                                name={location.info[`Landfill name`]}
                                suburb={location.info.Suburb}
                                number={location.info['Landfill register number']}
                                address={location.info.Address}
                                extraAddress={location.info['Extra address information']}
                                council={location.info.Council}
                                wasteAccepted={location.info['Waste type accepted']}

                            />
                        })

                    }


                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                    >
                        <div style={{lineHeight: "0.3px", paddingTop: "10px"}}>
                            <p><strong>Suburb:</strong> {this.state.selectedPlace.suburb}</p>
                            <p><strong>Council:</strong> {this.state.selectedPlace.council}</p>
                            <p><strong>Landfill register number:</strong> {this.state.selectedPlace.number}</p>
                            <p><strong>Landfill name:</strong> {this.state.selectedPlace.name}</p>
                            <p><strong>Address:</strong> {this.state.selectedPlace.address}</p>
                            <p><strong>Extra Address:</strong> {this.state.selectedPlace.extraAddress}</p>
                            <p><strong>Waste type accepted:</strong> {this.state.selectedPlace.wasteAccepted}</p>
                        </div>
                    </InfoWindow>

                    
                </Map>

            );
        }
    }

}
//const key = process.env.REACT_APP_GOOGLE_API_KEY;

//This provides the google map api key.
export default GoogleApiWrapper({

    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);