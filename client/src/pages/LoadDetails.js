import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero/PageHero";
import API from "../utils/API";

class LoadDetails extends React.Component {
  state = {
    load: {}
  };

  componentDidMount() {
    API.getLoad(this.props.match.params.id)
      .then(res => this.setState({ load: res.data }))
      .catch(err => console.log(err));
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
                        <th>Lot:</th>
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
                        <div className="is-size-6">
                          {this.state.load.lotNumber}
                        </div>
                      </td>
                      <td>
                        <div className="is-size-6">
                          {this.state.load.date}
                        </div>
                      </td>
                      <td>
                        <div className="is-size-6">
                          {this.state.load.caliber}
                        </div>
                      </td>
                      <td>
                        <div className="is-size-6">
                          {this.state.load.bulletBrand}
                        </div>
                      </td>
                      <td>
                        <div className="is-size-6">
                          {this.state.load.bulletName}
                        </div>
                      </td>
                      <td>
                        <div className="is-size-6">
                          {this.state.load.bulletGrains}
                        </div>
                      </td>
                      <td>
                        <div className="is-size-6">
                          {this.state.load.powderBrand}
                        </div>
                      </td>
                      <td>
                        <div className="is-size-6">
                          {this.state.load.powderName}
                        </div>
                      </td>
                      <td>
                        <div className="is-size-6">
                          {this.state.load.powderGrains}
                        </div>
                      </td>
                      <td>
                        <div className="is-size-6">
                          {this.state.load.trim}
                        </div>
                      </td>
                      <td>
                        <div className="is-size-6">
                          {this.state.load.roundsLoaded}
                        </div>
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