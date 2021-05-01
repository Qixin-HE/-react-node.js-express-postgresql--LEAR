import React, { useState, useEffect } from 'react';
import DataService from "../services/lear.service";
import { Link } from 'react-router-dom';
import { Container, Row, Col, ButtonGroup, ToggleButton, Button, Popover, OverlayTrigger, Tooltip, Image } from 'react-bootstrap';
import MapContainer from '../components/MapContainer';
import { Last } from 'react-bootstrap/esm/PageItem';
import { BsFillQuestionCircleFill } from "react-icons/bs";


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
    const getSyring = async () => {
        await fetch('/syring')
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
    const getTrap = async () => {
        await fetch('/trap')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setTrap(data);
            });
    };

    const [directionLat, setDirectionLat] = useState(0);
    const [directionLong, setDirectionLong] = useState(0);


    const handleCallback = (childData) => {
        const lat = childData.lat;
        const long = childData.lng
        setDirectionLat(lat)
        setDirectionLong(childData.lng)
        console.log(lat)
        console.log(directionLat)
        console.log(externalMapLink)

    }

    const externalMapLink =
        "https://www.google.com.au/maps/dir/" + directionLat + "," + directionLong

    const navigateToExternalMap = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    //add more instruction(user experience)
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">How to use the map?</Popover.Title>
            <Popover.Content>
            <p>• You can change the makers on the map by clicking the button on <strong>Change the marker sets</strong> section.
            </p>
            <p>• You can <strong>click on a marker</strong> to check its detail.</p>
            <p>• <strong>After you clicked a marker</strong>, you can click on the "<strong>check in google map website</strong>" to 
                check current marker location's navigation information.
            </p>
      </Popover.Content>
        </Popover>
    );

    
      
    return (
        <>
        
            <h1 class="text-dark font-weight-light" style={{ paddingTop: "40px", marginBlockEnd: "30px" }}>
                Events and related locations</h1>


            <Container style={{
                height: "100%",
                width: "100%",
                maxWidth: "100%"
            }}>
                <Row >
                    <Col sm={10} style={{ height: "900px" }}>
                        <Row style={{ margin: "10px"}}>
                        <h5 style={{ textAlign: "left" }}>Interactive map <span />
                           
                            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                <BsFillQuestionCircleFill />
                            </OverlayTrigger>
                            
                        </h5> <h5 style={{color: "grey", textAlign: "left"}}><span>&nbsp;&nbsp;</span>(click the <BsFillQuestionCircleFill /> to get more info)</h5>
                        </Row>


                        {radioValue === '1' && syring.length > 0 && trap.length > 0 ? <MapContainer locations={[...syring]} parentCallback={handleCallback} /> : null}
                        {radioValue === '2' && syring.length > 0 && trap.length > 0 ? <MapContainer locations={[...trap]} parentCallback={handleCallback} /> : null}


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
                            <Button variant="success" size="lg" onClick={() => navigateToExternalMap(externalMapLink)}>
                                Check in google map website
    </Button>{' '}

                        </Row>
                    </Col>
                </Row>
            </Container>

            
        </>

    );

}

export default EventsPage;