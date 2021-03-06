import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ButtonGroup, ToggleButton, Button, Popover, OverlayTrigger, Tooltip, Modal } from 'react-bootstrap';
import MapContainer from '../components/MapContainer';
import { BsFillQuestionCircleFill } from "react-icons/bs";

/**This is the "Disposal Sites"page. */

const EventsPage = () => {

    

    //button to control the markers on map
    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: 'Syringe Bin Locations', value: '1' },
        { name: 'Landfill sites Locations', value: '2' },

    ];

    //This state used to store syring bins data that is feted from backend.
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

    //This state save the lanfill sites data that is feted from backend.
    const [landfill, setLandfill] = useState([]);
    useEffect(() => {
        getSites();
    }, []);
    //This function fetches lanfill sites data from backend.
    const getSites = async () => {
        await fetch('/sites')
            .then(response => {
                return response.json();
            })
            .then(data => {
                const runningSites = data.filter(site => site.info[`Estimated year of closure`] > 2020 || site.info[`Estimated year of closure`] === "Not available");
                //const checkingSite = data.filter(site => site.info[`Estimated year of closure`] > 2020);
                //console.log(checkingSite)
                setLandfill(runningSites);
            });
    };

    //The states that save locations.(longitude and latitude)
    const [directionLat, setDirectionLat] = useState(0);
    const [directionLong, setDirectionLong] = useState(0);


    //When user click on the marker, its location will be saved into states.
    const handleCallback = (childData) => {
        const lat = childData.lat;
        const long = childData.lng
        setDirectionLat(lat)
        setDirectionLong(childData.lng)
        // console.log(lat)
        // console.log(directionLat)
        // console.log(externalMapLink)

    }
    
    //To construct the external google link with the location as the set off location.
    const externalMapLink =
        "https://www.google.com.au/maps/dir/" + directionLat + "," + directionLong

        //This function triggered when the user click on the "Open google map"button.
        //It also validates if the user have clicked on a marker or not.
        //If not, an alert window will show and no new window with google map will show.
    const navigateToExternalMap = (url) => {
        if (directionLat === 0){
            alert("Please click on a marker before you navigate to Google map!")
            return
            // (
            //     <>
                
            //     <Modal show={show} onHide={handleClose}>
            //       <Modal.Header closeButton>
            //         <Modal.Title>Modal heading</Modal.Title>
            //       </Modal.Header>
            //       <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            //       <Modal.Footer>
            //         <Button variant="secondary" onClick={handleClose}>
            //           Close
            //         </Button>
            //         <Button variant="primary" onClick={handleClose}>
            //           Save Changes
            //         </Button>
            //       </Modal.Footer>
            //     </Modal>
            //   </>
            // )
        }
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    //Handle the action when user click on the "Go to eventbrite" button.
    const navigateToEventBrite = () => {
        const newWindow = window.open("https://www.eventbrite.com.au/", '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    //add more instruction(user experience)
    //The instruction when user click on the "?" icon that on top of the map, next to "Interactive map" title.
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">How to use the map?</Popover.Title>
            <Popover.Content>
            <p>??? You can change the makers on the map by clicking the button on <strong>Change the marker sets</strong> section.
            </p>
            <p>??? You can <strong>click on a marker</strong> to check its detail.</p>
            <p>??? <strong>After you clicked a marker</strong>, you can click on the "<strong>check in google map website</strong>" to 
                check current marker location's navigation information.
            </p>
            <p>??? You can <strong>drag a pegman</strong> which is on the right-bottom corner of the map onto the map to
            open the Street view.</p>
            <p>??? You can <strong>zoom in and zoom out</strong> by clicking the buttons on the right-bottom corner of the map.</p>
      </Popover.Content>
        </Popover>
    );

    //The instruction when user click on the "?" icon that next to 
    //"Change a marker set on the map".
    const popoverMaker = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Marker sets</Popover.Title>
            <Popover.Content>
            <p>??? You can <strong>change the makers on the map</strong> by clicking the radio button here.
            </p>
            <p>??? <strong>Syring bins</strong> are used for sharps waste disposal. For example, used medical needles
            can be diposed of in it.</p>
            <p>??? <strong>Landfill sites </strong>are used to dispose of larger waste and non recyclable waste. For example, metals, 
            glass and plastic waste can be disposed of in these sites
            </p>
            
      </Popover.Content>
        </Popover>
    );
    //The instruction when user click on the "?" icon that next to 
    //"Go to this location".
    const popoverGooglemapLink = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Google map link</Popover.Title>
            <Popover.Content>
            <p>??? You can <strong>click on a marker on the map</strong> to check infomation about thislocation.
            </p>
            <p>??? After you select a marker, you can click on the "<strong>Check in google map website</strong>" button.
            A new window will open and lead you to the google maps page.</p>
            <p>??? The location you picked on the map will show on the map page as <strong>the departure</strong>. 
            You can manually change it to the destination by clicking on the <strong>Swap</strong> option, then 
            you can check the navigation options.</p>
            
      </Popover.Content>
        </Popover>
    );

    //The instruction when user click on the "?" icon that next to 
    //"Create an event on Eventbrite".
    const popoverEventBtn = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Create a clean-up event !</Popover.Title>
            <Popover.Content>
            <p>??? You can always <strong>create a clean-up event</strong> by clicking the button here to visit Eventbrite.
            </p>
            <p>??? You can also find out clean-up events on Eventbrite!</p>
            
      </Popover.Content>
        </Popover>
    );
    
      
    return (
        <>
        
            <h1 class="text-dark font-weight-light" style={{ paddingTop: "40px", marginBlockEnd: "30px" }}>Disposal Sites Locations</h1>


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


                        {radioValue === '1' && syring.length > 0 && landfill.length > 0 ? <MapContainer locations={[...syring]} parentCallback={handleCallback} /> : null}
                        {radioValue === '2' && syring.length > 0 && landfill.length > 0 ? <MapContainer locations={[...landfill]} parentCallback={handleCallback} /> : null}


                    </Col>
                    <Col sm={2} style={{ marginLeft: "-55px", maxWidth: "20%" }}>

                        <Row style={{ marginBottom: "40px", paddingTop: "50px"}}> 
                        <h5 style={{ textAlign: "left" }}>Change a marker set </h5> <h5 style={{ textAlign: "left" }}>on the map<span> &nbsp;</span>
                        <OverlayTrigger trigger="click" placement="bottom" overlay={popoverMaker}>
                                <BsFillQuestionCircleFill />
                            </OverlayTrigger>
                            </h5>
                        
                            <ButtonGroup toggle vertical>
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
                        <Row style={{  marginBottom: "40px"}}>
                            <h5 style={{ textAlign: "left" }}>Get to this location</h5>
                            <h5 style={{ textAlign: "left" }}>   <span> &nbsp;</span>
                           
                           <OverlayTrigger trigger="click" placement="bottom" overlay={popoverGooglemapLink}>
                               <BsFillQuestionCircleFill />
                           </OverlayTrigger>
                           
                       </h5>
                            <Button variant="success" size="lg" onClick={() => navigateToExternalMap(externalMapLink)}>
                                Check in google map website
    </Button>{' '}

                        </Row>
                        <Row>
                            <h5 style={{ textAlign: "left" }}>Create an event on Eventbrite</h5>
                            <h5 style={{ textAlign: "left" }}>   <span> &nbsp;</span>
                           
                           <OverlayTrigger trigger="click" placement="bottom" overlay={popoverEventBtn}>
                               <BsFillQuestionCircleFill />
                           </OverlayTrigger>
                           
                       </h5>
                       </Row>
                       <Row>
                            <Button variant="danger" size="lg" style={{width: "300px", height: "80px"}} onClick={() => navigateToEventBrite()}>
                                Go to eventbrite
    </Button>{' '}
    </Row>
                        
                    </Col>
                </Row>
            </Container>

            
        </>

    );

}

export default EventsPage;