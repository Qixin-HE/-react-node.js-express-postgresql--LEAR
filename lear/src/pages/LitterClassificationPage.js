import React from 'react';
import LitterClassificationCard from '../components/LitterClassificationCard';
import classifications from './litter-classification-content';

const LitterClassicationPage = () => (
    <>
        <div style={{ height: "100vh" }}>
            <h1>Litter Classification</h1>
            <br />
            <br />
            <LitterClassificationCard classifications={classifications} />
                
        </div>
    </>

);

export default LitterClassicationPage;