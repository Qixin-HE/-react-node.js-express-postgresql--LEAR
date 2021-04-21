import React, { Component, useState, useEffect } from 'react';
import { Marker } from 'google-maps-react';

const MarkersOnMap = props => {
    const [syring, setSyring] = useState([]);
    useEffect(() => {
        getSyring();
    }, []);
    function getSyring() {
        fetch('http://localhost:8080/syring')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setSyring(data);
            });
    };

    return (
        [...syring].map(location => (
            <Marker
                key={location.id}
                position={{
                    lat: location.info.lat,
                    lng: location.info.long
                }}
            />
        ))
    )
}

export default MarkersOnMap;