import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';

const ArticlesListPage = () => (
<>
<h1>Penalties cases</h1>
    <div style={{height:"100vh"}}>
        <ArticlesList articles={articleContent} />
    </div>
</>
);

export default ArticlesListPage;