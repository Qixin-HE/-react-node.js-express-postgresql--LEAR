import React, {useState, useEffect}  from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

//for displaying different lists of articles
const ArticlesList = () => {

    const [merchants, setMerchants] = useState([]);
    useEffect(() => {
        getMerchant();
    }, []);
    const getMerchant = async () => {
        await fetch('/fines')
        //fetch('database-1.cbsg9s7iau2c.us-east-2.rds.amazonaws.com')
        
            .then(response => {
                
                return response.json();
            })
            .then(data => {
                setMerchants(data);
            });
    };



    return (
        <div style={{ height: "100vh" }} >
            
            <ListGroup>
                
                {[...merchants].map((article, key) => (
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
                        </div>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    );
}

export default ArticlesList;
