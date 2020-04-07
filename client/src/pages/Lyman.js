import React from "react";
import PageHero from "../components/PageHero/PageHero";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn/DeleteBtn";
import API from "../utils/API";
import "./mainpage.css"

class LoadingData extends React.Component {
  state = {
    loadData: []
  };

  componentDidMount() {
    this.getAllData();
  }

  getAllData = () => {
    API.getData()
      .then(res =>
        this.setState({ loadData: res.data })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <PageHero />
        <div className="container mainContain">
          <h1 className="is-size-3">Loading Data</h1>
          <hr />
          <div>
            {this.state.loadData.map(load => (
                <div className="is-size-4">
                  {load.imageURL}
                </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

}

export default LoadingData;