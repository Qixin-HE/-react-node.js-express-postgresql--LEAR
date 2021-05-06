import React, { Component, useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './Map';


const mapStyles = {
    width: '93%',
    height: '85%'
};




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
                    zoom={14}
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
                                    lat: location.info.lat,
                                    lng: location.info.lon
                                }}
                                onClick={this.onMarkerClick}    //onClick, not onclick
                                name={location.info.asset_description}

                            />
                        })

                    }


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
    }

}
//const key = process.env.REACT_APP_GOOGLE_API_KEY;

export default GoogleApiWrapper({

    apiKey: 'AIzaSyDOCSg23TXUnzHFaLWiFGazzaR847QAtfQ'
})(MapContainer);