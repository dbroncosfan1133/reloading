import React from "react";
import Hero from "../components/Hero/Hero";
import LoadsBtn from "../components/LoadsBtn/LoadsBtn";
import NewLoadsBtn from "../components/NewLoadBtn/NewLoadBtn";
import "./mainpage.css"

function MainPage() {
    return (
        <div>
            <Hero />
            <div className="container mainContain">
                <div className="columns">
                    <div className="column is-5">
                        <h1 className="is-size-3">Welcome, what would you like to do?</h1>
                    </div>
                    <div className="column is-2">
                        <LoadsBtn />
                        <NewLoadsBtn />
                    </div>
                    <div className="column is-3">
                    </div>
                    <div className="colmun is-2"></div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;