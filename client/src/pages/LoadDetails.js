import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero/PageHero";
import API from "../utils/API";
import moment from "moment";

class LoadDetails extends React.Component {
  state = {
    load: {}
  };

  componentDidMount() {
    API.getLoad(this.props.match.params.id)
      .then(res => this.setState({ load: res.data }))
      .catch(err => console.log(err));
  }


  function newDate() {
  moment(this.state.load.date).format("MMMM Do YYYY");
}

render() {
  return (
    <div>
      <PageHero />
      <div className="container mainContain">
        <h1 className="is-size-3">Load Details</h1>
        <hr />
        <div className="columns">
          <div className="column is-12">
            <div className="card">
              <div className="card-body">
                <table className="table is-bordered is-striped is-fullwidth">
                  <thead>
                    <tr>
                      <th>Lot Number:</th>
                      <th>Date Loaded:</th>
                      <th>Caliber:</th>
                      <th>Bullet Brand:</th>
                      <th>Bullet Name:</th>
                      <th>Bullet Grains:</th>
                      <th>Powder Brand:</th>
                      <th>Powder Name:</th>
                      <th>Powder Grains:</th>
                      <th>Trim:</th>
                      <th>Rounds Loaded:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <td>
                      {this.state.load.lotNumber}
                    </td>
                    <td>
                      {newDate()}
                    </td>
                    <td>
                      {this.state.load.caliber}
                    </td>
                    <td>
                      {this.state.load.bulletBrand}
                    </td>
                    <td>
                      {this.state.load.bulletName}
                    </td>
                    <td>
                      {this.state.load.bulletGrains}
                    </td>
                    <td>
                      {this.state.load.powderBrand}
                    </td>
                    <td>
                      {this.state.load.powderName}
                    </td>
                    <td>
                      {this.state.load.powderGrains}
                    </td>
                    <td>
                      {this.state.load.trim}
                    </td>
                    <td>
                      {this.state.load.roundsLoaded}
                    </td>
                  </tbody>
                </table>
              </div>
            </div>
            <br />
            <div className="card">
              <div className="card-body">
                <div className="columns">
                  <div className="column is-12 notesCard">
                    <h5 className="is-size-3">
                      Notes:
                      </h5>
                    <hr />
                    {this.state.load.notes}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
}

export default LoadDetails;