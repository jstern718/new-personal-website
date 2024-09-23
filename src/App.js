import React, {useState, useEffect, Suspense} from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
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
            let internalWidth = window.innerWidth;
            if (internalWidth >= 1000){
                setScreenSize("large");
                console.log("1 large");
                return "large";
            }
            else{
                setScreenSize("small");
                console.log("1 small");
                return "small";
            }
        }
        firstCheckWidth();
    }, []);

    useEffect(()=> {
        async function secondCheckWidth(width){
            console.log("second check width");
            if (newWidth >= 1000){
                setScreenSize("large");
                console.log("2 large");
                return "large";
            }
            else{
                setScreenSize("small");
                console.log("2 small");
                return "small";
            }
        }
        if (screenSize){
            secondCheckWidth()
        }
    }, [newWidth]);


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
