import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';

const LawPage = ({ match }) => {
    //pull our name param out of "match" 
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

//filter the article contents, to display "related articles list"(except the one of the page) at the bottom of the article.
const otherArticles = articleContent.filter(article => article.name !== name);

    //return statement
    return (
        <>
            <h1>Laws and Penalties</h1>
            <h3>{article.title}</h3>
            <p>
                {article.content.map((pargraph, key) => (
                    <p key={key}>{pargraph}</p>
                ))}
            </p>
            <h3>Other Aricles:</h3>
            <ArticlesList articles={otherArticles} />
        </>
    );


};

export default LawPage;