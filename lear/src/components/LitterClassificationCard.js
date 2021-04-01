import React from 'react';
import { Card } from 'react-bootstrap';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LitterClassificationCard = ({ classifications }) => (
    
        <div style={{ height: "100vh" }} >
            <ListGroup>
                {classifications.map((classification, key) => (
                    <ListGroupItem>
                        <div style={{
                            height: "10vh",
                            minHeight: "330px",
                            maxHeight: "500px"
                        }}>
                            
                                
                                <h4 className="article-list-item">{classification.date}</h4>
                            
                            
                            <p>Residential: {classification.residential}<br/>
                            Public litter bins: {classification.public_litter_bins}<br/>
                            Dumped rubbish: {classification.dumped_rubbish}<br/>
                            Street Sweepings: {classification.street_sweepings}<br/>
                            Mattresses: {classification.mattresses}<br/>
                            Commingled recycling: {classification.commingled_recycling}<br/>
                            Cardboard: {classification.cardboard}<br/>
                            Hardwaste to landfill: {classification.hardwaste_to_landfill}<br/>
                            Hardwaste recovered: {classification.hardwaste_recovered}<br/>
                            Hardwaste total: {classification.hardwaste_total}<br/>
                            Green waste: {classification.green_waste}<br/>
                            Month: {classification.month}<br/></p>
                        </div>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    );

export default LitterClassificationCard;


