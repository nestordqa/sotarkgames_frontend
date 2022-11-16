import React from "react";
import './Pagination.css';

export default function Pagination({totalPost, postPerPage, setCurrentPage}){
    let pages = [];
    for(let i = 1; i<= Math.ceil(totalPost/postPerPage); i++){
        pages.push(i);
    }

    return(
        <div className ="containerPagination">
            {pages.map((page, index)=>{
                return <div key={index} ><button onClick={()=>setCurrentPage(page)} className="numberPagination">{page}</button></div>
            })}
        </div>
    )
}