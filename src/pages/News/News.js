import React, { useEffect, useState, useCallback } from 'react';
import Link from '@mui/material/Link';
import ReactLoading from 'react-loading';
import NewError from './NewError';
import "./New.css";

function News() {
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("latest");
    const [store, setStore] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleNext = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handlePrevious = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const fetchData = useCallback(() => {
        setIsLoading(true);
        setError(null);
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
                'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
            }
        };

        fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${query}&pageNumber=${page}&pageSize=10&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null`, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error("We could not fetch the data. This might be due to a subscription issue or network problem. Please try again later.");
                }
                return response.json();
            })
            .then(response => {
                setStore(response.value || []);
                if (!response.value || response.value.length === 0) {
                    setError("No results found for your search.");
                }
            })
            .catch(err => {
                setError(err.message);
                setStore([]);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [query, page]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(search || "latest");
        setPage(1);
    };

    return (
        <div>
            <div className="searchSection">
                <div className="newsContainer">
                    <h1 className='newsHeading'>News Search</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Search for News' onChange={handleChange} value={search} />
                        <button type='submit' className='search'>Search</button>
                    </form>
                    <p className='page'>Page: {page}</p>
                </div>
            </div>

            {isLoading ? (
                <div className="loading-container">
                    <ReactLoading type={"spin"} color={"#0071f2"} height={50} width={50} />
                </div>
            ) : error ? (
                <NewError errorText={error} />
            ) : (
                <div className="newSection">
                    <div className="newsContainer">
                        {store.map((item) => (
                            <div key={item.id} className="flexContainer">
                                <div className='first'>
                                    <img src={item.image?.url || '/images/placeholder.jpg'} alt={item.title} style={{ height: 200, width: 290 }} />
                                    <p className='date'>{new Date(item.datePublished).toLocaleDateString()}</p>
                                </div>
                                <div className='second'>
                                    <div className='apiTitle'>
                                        <p className='apTitle'>{item.title}</p>
                                    </div>
                                    <div className='description'>
                                        <p className='descript'>{item.description}</p>
                                    </div>
                                    <Link href={item.url} target="_blank" rel="noopener noreferrer">
                                        <button className='readMore'>Read More</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {!isLoading && (
                <div className="newSection2">
                    <div className="newsContainer">
                        <div className='buttonContainer'>
                            <button className='btn' onClick={handlePrevious} disabled={page === 1}>Previous</button>
                            <button className='btn' onClick={handleNext}>Next</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default News;
