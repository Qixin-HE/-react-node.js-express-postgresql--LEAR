import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

//for displaying different lists of articles
const ArticlesList = ({ articles }) => (
        <ListGroup>
        {articles.map((article, key) => (
            <ListGroupItem>
                <div style={{
                    height:"10vh",
                    minHeight:"150px",
                    maxHeight:"500px"
                }}>
                    <Link style={{textDecoration:"none", color:"white"}} key={key} to={`/law/${article.Month}`} >
                        <h3 className="article-list-item">{article.Month}</h3>
                    </Link>
                    <h4>Amount of fines: {article['Number of Fines']}</h4>
                </div>
            </ListGroupItem>
        ))}
        </ListGroup>
);

export default ArticlesList;
