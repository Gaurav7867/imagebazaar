import SearchBar from "./component/searchbar.js"
import ImageList from "./component/imageList.js"
import Pagination from "./component/Pagination.js"
import "./app.scss";
import axios from "axios";
import { useEffect, useState } from "react"
const clientId="6ZzzTrYg3gKUti41g5M1EXkJ0CnjqFs0tikY5a4p8Oc";
const ImageBazaar=()=>{
  const [query,setQuery]=useState('');
  const [pageNumber,setPageNumber]=useState(1);

  const [response,setResponse]=useState({apistatus:0,data:null});
const isLoading=response.apistatus===1;
  const onSearch=()=>{
    //fetch data for query and page number
    if(pageNumber===1){
      fetchData();
    }else{
    setPageNumber(1);
    }
  }
  const fetchData=(async ()=>{
    try{
      setResponse({...response,apistatus:1});
    const serverResponse=await axios(`https://api.unsplash.com/search/photos?page=${pageNumber}&query=${query}&client_id=${clientId}`)
    setResponse({data:serverResponse.data,apistatus:2});
    }
    catch(err){
    setResponse({...response,apistatus:3});
    }
    })
  useEffect(()=>{
    //fetch data with default query and page number
    //IIFE immediately involved invoke function expression
fetchData();
  },[pageNumber]);
  return(
    <div className="app">
    <SearchBar  onChangeText={(e)=>setQuery(e.target.value)} onSearch={onSearch} isLoading={isLoading}/>
   <ImageList data={response.data} apiStatus={response.apistatus}/>
    <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} isLoading={isLoading}/>
    </div>
  )
}
export default ImageBazaar;