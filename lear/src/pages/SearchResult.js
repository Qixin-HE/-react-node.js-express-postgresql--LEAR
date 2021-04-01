import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';
import LitterClassificationCard from '../components/LitterClassificationCard';
import classifications from './litter-classification-content';

const SearchResult = (  ) => {
    const keyword = "January";
    const penalties = articleContent.find(penalty => penalty.Month === keyword);
    const classification = classifications.find(classification => classifications.month === keyword);

    <>
<h1>Penalties cases in {keyword} of 2020</h1>
    <div style={{height:"100vh"}}>
        <ArticlesList articles={articleContent} />
    </div>
    <br/>
    <div style={{ height: "100vh" }}>
            <h1>Litter Classification results in {keyword} </h1>
            <br />
            <br />
            <LitterClassificationCard classifications={classifications} />
                
        </div>

</>

}

export default SearchResult;