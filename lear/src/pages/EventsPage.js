import React from 'react';
import DataService from "../services/lear.service";
import { Link } from 'react-router-dom';
import MapContainer from '../components/MapContainer';

const EventsPage = () => {

    const merchants = DataService.getAll();

return(
    <>
        <MapContainer />
        
    </>

);
}

export default EventsPage;