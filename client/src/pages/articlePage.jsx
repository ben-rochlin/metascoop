import React, { useState } from "react";
import { useSelector } from 'react-redux';





import ContentCard2 from "../components/contentCard2.jsx";
import MenuBar from '../components/menuBar.jsx';
import Title from '../components/title.jsx'





const ArticlePage = () => {


//USE SELECTOR HERE
const newsObj = useSelector((state) => state.newsObjects)
console.log(newsObj.apiURL, "YOOOOOOOOO")


//RETURN OBJECT.title HERE
const category = useState(newsObj.title) 

//RETURN OBJECT.apiURL HERE
// const URL = () => {
//     return `https://api.currentsapi.services/v1/search?category=${category}&apiKey=X2DqXEqyVN2kKq2QJPwiiZZ-xpRGdj7EEFCqpfDjv6CuX-fD` 
// } 

// const URL = newsObj.apiURL

const apiURL = useState(newsObj.apiURL)


//WE WANT TO PASS THESE DOWN AS PROPS

    console.log("THIS ONE", URL)
    // console.log("hello")


  return (
    <div>
      <MenuBar />
      {/* // OBJECT.title */}
      <Title category={category}/>
      {/* OBJECT.apiURL */}
      <ContentCard2 apiURL={ apiURL }/>
    </div>
  );
}

export default ArticlePage