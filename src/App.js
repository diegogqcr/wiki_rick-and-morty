import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar"


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Episodes from "./pages/Episodes";
import Location from "./pages/Location";
import CardDetails from "./components/Cards/CardDetails";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  )
}

// function App() { cambio a ser un const Home para usar el react-router-dom
const Home = () => {
  //[variable, function] = x(defaultValue)
  //variable se usa dentro del template string `${}`
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);
  //usamos destructuring para separar los resultados del fetch en info y results
  // console.log(pageNumber)
  let { info, results } = fetchedData;

  // console.log(fetchData.results);
  // console.log(results)
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  // useEffect(()=>{},[])

  //se usa IIFE JavaScript function 
  // (function(){
  //   statements
  // })();

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      // console.log(data.results);
      updateFetchedData(data)
    })();
  }, [api]);
  //[api] es un watch escucha si cambia el valor y actualiza

  return (
    <div className="App">
      <h1 className="text-center mb-4">Characters</h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
          <Filters
            setSpecies={setSpecies}
            setGender={setGender}
            setStatus={setStatus}
            setPageNumber={setPageNumber}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      <div className="container d-flex justify-content-center ">
        <img src="./RyMbyDG.png" class="img-fluid" alt="..." />
      </div>
    </div>
  );
}

export default App;
