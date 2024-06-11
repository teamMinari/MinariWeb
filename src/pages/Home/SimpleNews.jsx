import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as M from '../../styles/HomeStyle/SimpleNewsStyle'; // 새로운 스타일 파일 import
import Spinner from './Spinner';

const SimpleNews = ({ query }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:3000/search/news', {
                    params: { query }
                });
                setArticles(response.data.items);
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        };
        fetchArticles();
    }, [query]);

    const decodeHtml = (html) => {
        const text = document.createElement('textarea');
        text.innerHTML = html;
        return text.value;
    };

    return (
        <M.SimpleNewsContainer>
            <M.SimpleNewsCenterWrapper>
                <M.NewsContainer>
                    {articles && articles.length > 0 ? (
                        articles.map((article, index) => (
                            <M.Article key={index}>
                                    <M.ArticleImage/>
                                <M.ArticleTitle href={article.link} target="_blank" rel="noopener noreferrer">
                                    {decodeHtml(article.title).replace(/<[^>]*>?/g, '')}
                                </M.ArticleTitle>
                                <M.ArticleDescription>
                                    {decodeHtml(article.description).replace(/<[^>]*>?/g, '')}
                                </M.ArticleDescription>
                            </M.Article>
                        ))
                    ) : (
                        <Spinner/>
                    )}
                </M.NewsContainer>
            </M.SimpleNewsCenterWrapper>
        </M.SimpleNewsContainer>
    );
};

export default SimpleNews;
