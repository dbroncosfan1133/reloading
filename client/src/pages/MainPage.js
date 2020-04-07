import React from "react";
import MainHero from "../components/MainHero/MainHero";
import PastLoadsBtn from "../components/PastLoadsBtn/PastLoadsBtn";
import NewLoadsBtn from "../components/NewLoadBtn/NewLoadBtn";
import ViewLoadDataBtn from "../components/ViewLoadData/ViewLoadData";
import "./mainpage.css";

function Main() {
  return (
    <div>
      <MainHero />
      <div className="container mainContain">
        <div className="columns">
          <div className="column is-5">
            <h1 className="is-size-3">Welcome, what would you like to do?</h1>
          </div>
          <div className="column is-7">
            <div className="level">
              <div className="level-right">
                <div className="level-item mainPgBtns">
                  <PastLoadsBtn />
                </div>
                <div className="level-right mainPgBtns">
                  <NewLoadsBtn />
                </div>
                <div className="level-right mainPgBtns">
                  <ViewLoadDataBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;