import React, {useState, useEffect, Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Wall from "./Wall"
import NavBar from "./NavBar";
import './App.css';
import Loading from './Loading';
import { useWindowDimension } from "./utils";

const Jobs = React.lazy(
    () => import('./Jobs'));
const Projects = React.lazy(
    () => import('./Projects'));
const Home = React.lazy(
    () => import('./Home'));

function App() {

    let [screenSize, setScreenSize] = useState("")
    let [newWidth] = useWindowDimension();

    useEffect(()=> {

        console.log("useEffect runs");

       function firstCheckWidth(){
            console.log("first check width");
            setScreenSize(window.innerWidth);
        }
        firstCheckWidth();
    }, []);

    useEffect(()=> {
        async function secondCheckWidth(){
            console.log("second check width");
            setScreenSize(window.innerWidth);
        }
        if (screenSize){
            secondCheckWidth()
        }
    }, [newWidth, screenSize]);


    console.log("app ss", screenSize);

  return (
    <div className="App">
        <BrowserRouter>
            <NavBar />
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/Jobs" element={
                        <Jobs screenSize={screenSize} />} />
                    <Route path="/Projects" element={
                        <Projects screenSize={screenSize} />} />
                    <Route path="/Wall" element={
                        <Wall screenSize={screenSize}/>} />
                    <Route path="/" element={
                        <Home screenSize={screenSize} />} />

                </Routes>
            </Suspense>
        </BrowserRouter>

    </div>
  );
}

export default App;
