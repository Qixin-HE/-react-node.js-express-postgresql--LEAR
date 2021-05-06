import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';

import LitterClassificationCard from '../components/LitterClassificationCard';
import classifications from './litter-classification-content';
import Fuse from "fuse.js";
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


const SearchResult = ({ match }) => {
    const keyword = match.params.keyword;
    //console.log(keyword.toUpperCase())
    //const penalties = articleContent.find(penalty => penalty.Month === keyword);
    //const classification = classifications.find(classification => classifications.month === keyword);
    const [fines, setFines] = useState([]);
    useEffect(() => {
        getFines();
    }, []);
    const getFines = async () => {
        await fetch('/fines')
            //fetch('database-1.cbsg9s7iau2c.us-east-2.rds.amazonaws.com')

            .then(response => {

                return response.json();
            })
            .then(data => {
                setFines(data);
            });
    };
    //fines.forEach(e => console.log(e.month.toUpperCase()));
    //const result = fines.find(result => result.month.toUpperCase() === keyword.toUpperCase())
    //console.log(result);
    const [data, setData] = useState([]);

    // const fuse = new Fuse(fines, {
    //     keys: ["month", "number_of_fine"],
    // });

    const fuse = new Fuse(fines, {
        keys: ["info.Month", "info.number_of_fine"],
    });
    //const [keyword, setKeyword] = useState();
    const searchData = (pattern) => {
        if (!pattern) {
            setData([]);
            return;
        }
        const result = fuse.search(pattern);
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



    useEffect(() => {
        searchData(keyword);
        //console.log(data)
    }
    );

    // if (keyword) {
    //     searchData(keyword);
    //     console.log(data);
    //     return (
    //         <>
    //             <h1>Search results</h1>
    //             <h5>Results in fines:</h5>
    // <p>{data}</p>
    //         </>
    //     )
    // }else{
    //     return (
    //         <>
    //             <h1>Search results</h1>
    //             <h5>Results in fines:</h5>

    //         </>
    //     )
    // }
    return (
        <>
            <h1 class="text-dark font-weight-light" style={{ paddingTop: "40px", marginBlockEnd: "30px" }}>Search results</h1>
            <h5>Results in fines:</h5>
            <div style={{ height: "100vh" }} >

                {data ? <ListGroup>

                    {[...data].map((article, key) => (
                        <ListGroupItem>
                            <div style={{
                                height: "10vh",
                                minHeight: "70px",
                                maxHeight: "500px"
                            }}>
                                <Link style={{ textDecoration: "none", color: "white" }} key={key} to={`/law/${article.info.Month}`} >

                                    <h4 className="article-list-item">{article.info.Month}</h4>
                                </Link>
                                <br />
                                <h5>   Amount of fines: {article.info['Number of Fines']}</h5>
                                {/* <Link style={{ textDecoration: "none", color: "white" }} key={key} to={`/law/${article.month}`} >

                                    <h4 className="article-list-item">{article.month}</h4>
                                </Link>

                                <h5>   Amount of fines: {article['number_of_fine']}</h5> */}
                            </div>
                        </ListGroupItem>
                    ))}
                </ListGroup> : null}
            </div>
        </>
    )
}




export default SearchResult;