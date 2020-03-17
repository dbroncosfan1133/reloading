import React from "react";
import BackButton from "../components/BackBtn/BackBtn";
import Hero from "../components/Hero/Hero";
import "./mainpage.css"

function LoadData() {
    return (
        <div>
            <Hero />
            <div className="container mainContain">
                <h1 className="is-size-1">Past Load Data:</h1>
                <hr />
                <div className="columns">
                    <div className="column is-6">

                    </div>
                    <div className="column is-3">

                    </div>
                    <div className="column is-3">

                        <BackButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadData;