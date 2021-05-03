import React, { useState, useEffect } from 'react';
import LitterClassificationCard from '../components/LitterClassificationCard';
import classifications from './litter-classification-content';
import { Form, FormControl, Button } from 'react-bootstrap';
import Fuse from "fuse.js";
import { BsSearch } from "react-icons/bs";

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
        fetch('/litterclassification')
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
    //searchData("");
    // const searchData = (pattern) => {
    //     if (!pattern) {
    //         setData([]);
    //         return;
    //     }
    //     const result = fuse.search(pattern);
    //     const finalResult = [];
    //     if (result.length) {
    //         result.forEach((item) => {
    //             finalResult.push(item.item);
    //         });
    //         setData(finalResult);
    //     } else {
    //         setData([]);
    //     }
//};
// useEffect(() => {
//     setData(litterclassification);
// }
// );
return (
    <>
        <div style={{
            
            padding: "30px"
        }}>
            <h1 class="text-dark font-weight-light" style={{ paddingTop: "40px", marginBlockEnd: "30px" }}>Litter Classification</h1>
            <br />
            <div className="Search">
                <span className="SearchSpan">
                    <Form inline style={{ justifyContent: "center"}}>
<BsSearch style={{ height: "1.5rem", width: "1.5rem"}}/> <span>&nbsp;&nbsp;</span>
                        <FormControl style={{ width: "300px", marginRight: "20px !important", textAlign: "center"}}className="SearchInput" type="text" onChange={(e) => searchData(e.target.value)} placeholder="Search" className="mr-sm-2"
                        />
                        
                    </Form>
                </span>

            </div>
            <div className="Container">
                {data.map((item) => (
                    <LitterClassificationCard {...item} key={item.id} />
                ))}
            </div>
        </div>
        {/* <LitterClassificationCard classifications={classifications} /> */}

        {/* </div> */}
    </>
);
}

export default LitterClassicationPage;