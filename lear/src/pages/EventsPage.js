import React, { useState, useEffect } from 'react';
import DataService from "../services/lear.service";
import { Link } from 'react-router-dom';
import { Container, Row, Col, ButtonGroup, ToggleButton, Button } from 'react-bootstrap';
import MapContainer from '../components/MapContainer';

const EventsPage = () => {

    //const merchants = DataService.getAll();

    //button to control the markers on map
    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: 'Syringe Bin Locations', value: '1' },
        { name: 'SWD Litter Trap Locations', value: '2' },

    ];

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

    const [trap, setTrap] = useState([]);
    useEffect(() => {
        getTrap();
    }, []);
    function getTrap() {
        fetch('http://localhost:8080/trap')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setTrap(data);
            });
    };

    const [location, setLocation] = useState([]);

    const handleCallback = (childData) =>{
        
        setLocation({childData})
        console.log(location)
    }

    if (radioValue === '1') {

        return (
            <>
                <h1 style={{ marginBlockEnd: "30px" }}>Events and related locations</h1>

                <Container style={{
                    height: "100%",
                    width: "100%",
                    maxWidth: "100%"
                }}>
                    <Row>
                        <Col sm={10} style={{ height: "900px" }}>

                            <MapContainer locations={[...syring]} />

                        </Col>
                        <Col sm={2} style={{ marginLeft: "-30px" }}>

                            <Row style={{ marginBottom: "40px" }}>
                                <ButtonGroup toggle>
                                    {radios.map((radio, idx) => (
                                        <ToggleButton
                                            key={idx}
                                            type="radio"
                                            variant="info"
                                            name="radio"
                                            value={radio.value}
                                            checked={radioValue === radio.value}
                                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                                        >
                                            {radio.name}
                                        </ToggleButton>
                                    ))}
                                </ButtonGroup>
                            </Row>
                            <Row>
                                <h5>Get to this location:</h5>
                                <Button variant="success" size="lg">
                                    Check in google map website
    </Button>{' '}

                            </Row>
                        </Col>
                    </Row>
                </Container>


            </>

        );
    }
    else {
        return (
            <>
                <h1 style={{ marginBlockEnd: "30px" }}>Events and related locations</h1>

                <Container style={{
                    height: "100%",
                    width: "100%",
                    maxWidth: "100%"
                }}>
                    <Row>
                        <Col sm={10} style={{ height: "900px" }}>

                            <MapContainer locations={[...trap]} />

                        </Col>
                        <Col sm={2} style={{ marginLeft: "-30px" }}>

                            <Row style={{ marginBottom: "40px" }}>
                                <ButtonGroup toggle>
                                    {radios.map((radio, idx) => (
                                        <ToggleButton
                                            key={idx}
                                            type="radio"
                                            variant="info"
                                            name="radio"
                                            value={radio.value}
                                            checked={radioValue === radio.value}
                                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                                        >
                                            {radio.name}
                                        </ToggleButton>
                                    ))}
                                </ButtonGroup>
                            </Row>
                            <Row>
                                <h5>Get to this location:</h5>
                                
                                    <Button variant="success" size="lg" href="https://www.google.com.au/maps/">
                                        Check in google map website
        </Button>{' '}
                                

                            </Row>
                        </Col>
                    </Row>
                </Container>


            </>

        );
    }

}

export default EventsPage;