import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Company from "./components/Company";
import Experience from "./components/Experience";

const url = "https://course-api.com/react-tabs-project";

function App() {
const [list, setList] = useState([]);
const [loading, setLoading] = useState(true);
const [value, setValue] = useState(0)

  const getData = async () => {
    // setLoading(true);
    try {
      const { data } = await axios.get(url);
      setList(data);
      console.log(data[0].title);
      setLoading(!loading);
    } catch (error) {
      console.log(error);
      // setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(Array.isArray(list[value]))
  

  if(loading){
    return(
      <h1 className="text-center">Loading...</h1>
    )
  }else{
  return (
    <div>
      <div>
        <h1 className="text-center mt-5 title">Experience</h1>
        <div className="underline text-info mx-auto rounded-3"></div>
      </div>
      <div className="box container d-md-flex flex-xs-column justify-content-center">
      <Company list={list} value={value} setValue={setValue}/>
      <Experience info={list} value={value}/>
      
    </div>
    <div className="text-center">
      <button className="btn btn-info py-0 px-2">MORE INFO</button>
    </div>
    </div>
  );
}
}

export default App;
