import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import CardHolder from './components/cardHolder';
import { Pagination } from './components/pagination';
import { fetchPkm, fetchPkmType } from './redux/action.js';


function App() {
const dispatch = useDispatch();
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(6);
const [loading] = useState(false);
const poke = useSelector(state => state);
console.log(poke);
useEffect(() => {
    //dispatch(fetchPkm());
    dispatch(fetchPkmType("fire"));
},[dispatch])


        

    const paginate=(e)=>{
    setCurrentPage(e)
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = poke.slice(indexOfFirstPost, indexOfLastPost);

        return (
            <div className="App">
            <div className="dropdown">
        
            </div>
        <CardHolder loading={loading}poke={currentPosts}></CardHolder>
        <Pagination postsPerPage={postsPerPage} paginate={paginate} totalPosts={poke.length}></Pagination>
            </div>
        
        );
        
    }


export default App;
