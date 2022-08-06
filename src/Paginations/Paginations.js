import React,{useState, useEffect} from 'react';
import  {Pagination,PageItem} from 'react-bootstrap';



const _Pagination =({postsPerPage, totalPosts, paginate, currentPage}) => {

let active =currentPage;
let items = [];
for (let number = 1; number <= Math.ceil(totalPosts / postsPerPage); number++) {
  items.push(number);
}


  return(
    <nav>
      {/* <Pagination className="row justify-content-center mt-5" size="lg"> */}
      <Pagination  className="d-flex justify-content-center mt-5" size="lg">
         {items.map(item=>(
            <Pagination.Item 
             key={item} 
             active={active===item}
             onClick={()=> paginate(item)} 
             href ="#">
                 {item}
            </Pagination.Item>
         ))}     
      </Pagination>
    </nav>

  );
 



}
export default _Pagination;