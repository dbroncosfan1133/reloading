import React from "react";
import BackButton from "../BackBtn/BackBtn";

function PageHero() {
    return (
        <div className="hero is-dark is-bold no-print">
            <div className="hero-body">
                <div className="navbar">
                    <div className="navbar-brand">
                        <div className="columns">
                            <div className="column">
                                <div className="navbar-item">
                                    <h1 className="title">Reloading Data</h1>
                                </div>
                                <div className="navbar-item">
                                    <h2 className="sub-title">Track New and View Previous Load Data</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <BackButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageHero;