import React, { useState, useEffect }  from 'react';
import ArticlesList from '../components/ArticlesList';

import NotFoundPage from './NotFoundPage';

const LawPage = ({ match }) => {
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

    //pull our name param out of "match" 
    const name = match.params.name;
    
    const article = merchants.find(article => article.Month === name);
    
    //display a notfoundpage if there is not this article.
    if (!article) return <NotFoundPage/>;
    
//filter the article contents, to display "related articles list"(except the one of the page) at the bottom of the article.
const otherArticles = merchants.filter(article => article.Month !== name);

    //return statement
    return (
        <>
        <h1>Laws</h1>
        
        <br/>
            <h1>Penalty cases in {article.Month} of 2020</h1>
            <div style={{height:"100vh"}}>

            <h3>Month: {article.Month}</h3>
            <h3>Number of Fines:  {article['Number of Fines']}</h3>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h4>The number of fines in other months in 2020:</h4>
            <ArticlesList articles={otherArticles} />
            </div>
        </>
    );


};

export default LawPage;