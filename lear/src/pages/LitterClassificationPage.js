import React, { useState, useEffect } from 'react';
import LitterClassificationCard from '../components/LitterClassificationCard';
import classifications from './litter-classification-content';
import { Form, FormControl, DropdownButton, Dropdown, Row, Col } from 'react-bootstrap';
import Fuse from "fuse.js";
import { BsSearch, BsFillQuestionCircleFill } from "react-icons/bs";
import { Popover, OverlayTrigger } from 'react-bootstrap';

const LitterClassicationPage = () => {
    const [litterclassification, setLitterclassification] = useState([]);
    useEffect(() => {
        getLitterClassification();
        //setData(litterclassification);
    }, []);
    useEffect(() => {
        //getLitterClassification();
        setData(litterclassification);
        //searchData("");
    }, [litterclassification]);
    const getLitterClassification = () => {
        fetch('/litter')
            //fetch('database-1.cbsg9s7iau2c.us-east-2.rds.amazonaws.com')

            .then(response => {

                return response.json();
            })
            .then(data => {
                setLitterclassification(data);
            });
    };


    const [data, setData] = useState(litterclassification);
    const searchData = (query) => {
        if (!query) {
            setData(litterclassification);
            return;
        }
        const fuse = new Fuse(litterclassification, {
            keys: ["info['Super category']", "info.Category"],
        });

        const result = fuse.search(query);
        const finalResult = [];
        if (result.length) {
            result.forEach((item) => {
                finalResult.push(item.item);
            });
            setData(finalResult);
        } else {
            setData([]);
        }
    };
    const filterDataDropdown = (name) => {
        if (name === "all"){
            setData(litterclassification);
            return
        }
        const copyOfLitterclassification = litterclassification
        const filteredData = copyOfLitterclassification.filter(item => item.info.Category === name);
        setData(filteredData);
    }
    const popover = (
        <Popover id="popover-basic" style={{ maxWidth: "500px" }}>
            <Popover.Title as="h3">How to use this litter classification page?</Popover.Title>
            <Popover.Content>
                <p>• The below litter classifier groups each type of litter into its own category and super-category. Each litter
        item card contains: </p>
                <div style={{ paddingLeft: "25px" }}>
                    <p>- an image of what the litter looks like. </p>
                    <p>- a timeline for decomposition</p>
                    <p>- a popup for how to correctly dispose of the litter type.</p>
                </div>

                <p>• To see the popup click on the question mark within the litter card.</p>
                <p>• To remove the popup from your screen, click the question mark once again.</p>



            </Popover.Content>
        </Popover>
    );

    return (
        <>
            <div style={{
                padding: "30px", marginTop: "-8px"
            }}>
                <h1 class="text-dark font-weight-light" style={{ paddingTop: "40px", marginBlockEnd: "30px" }}>Litter Classification
               <span> &nbsp;</span>

                    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                        <BsFillQuestionCircleFill />
                    </OverlayTrigger>

                </h1>
                <br />
                <div className="Search">

                    <Row style={{ justifyContent: "center" }}>
                        <Form inline style={{ justifyContent: "center" }}>
                            <BsSearch style={{ height: "1.5rem", width: "1.5rem" }} /> <span>&nbsp;&nbsp;</span>
                            <FormControl style={{ width: "300px", marginRight: "20px !important", textAlign: "center" }} className="SearchInput" type="text" onChange={(e) => searchData(e.target.value)} placeholder="Search" className="mr-sm-2"
                            />

                        </Form>
                        <h4 class="text-dark font-weight-light" style={{ marginTop: "5px", marginRight: "10px" }}>or</h4>
                        <DropdownButton id="dropdown-basic-button" variant={"info"} title="Choose a category from the list " style={{ zIndex: "400"}}>
                        <Dropdown.Item  onClick={() => filterDataDropdown("all")}>All</Dropdown.Item>
                                
                            {litterclassification.map((item) => (
                        <Dropdown.Item {...item} key={item.id} onClick={() => filterDataDropdown(item.info.Category)}>{item.info.Category}</Dropdown.Item>
                    ))}  
                    
                                          
                        </DropdownButton>
                    </Row>


                </div>
                <div className="Container">
                    {data.map((item) => (
                        <LitterClassificationCard {...item}  key={item.id} />
                    ))}
                </div>
            </div>
            {/* <LitterClassificationCard classifications={classifications} /> */}

            {/* </div> */}
        </>
    );
}

export default LitterClassicationPage;