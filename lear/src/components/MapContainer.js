import React, { Component, useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './Map';
import MarkersOnMap from './MarkersOnMap';

const mapStyles = {
    width: '100%',
    height: '100%'
};




export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,  // Hides or shows the InfoWindow
            activeMarker: {},          // Shows the active marker upon click
            selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
        };
    }

    componentDidMount() {

    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };


    render() {
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

                        lat: -37.84510949, // need better init pos init
                        lng: 144.9825957   // same here
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
            </Map>

        );
    }
}
//const key = process.env.REACT_APP_GOOGLE_API_KEY;

export default GoogleApiWrapper({

    apiKey: 'AIzaSyDOCSg23TXUnzHFaLWiFGazzaR847QAtfQ'
})(MapContainer);