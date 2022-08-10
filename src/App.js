import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  // const [company, setCompany] = useState([{ comp: [] , title:[]}]);
  const [company, setCompany] = useState([])
  const [title, setTitle] = useState([])
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setList(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // useEffect(()=>{
  //   if(!loading){
  //     setCompany([...company, list.map((item)=>item.company)])
  //   }
  // },[])

  
  if(loading){
    return(
      <h1 className="text-center">Loading...</h1>
    )
  }

  console.log(list);
  console.log(company)
  return (
    <div>
      <div>
        <h1 className="text-center mt-5 title">Experience</h1>
        <div className="underline text-info mx-auto rounded-3"></div>
      </div>
      <div>
        {list?.map((item) => {
          return <div>{item.company}</div>;
        })}
      </div>
      <div></div>
    </div>
  );
}

export default App;
