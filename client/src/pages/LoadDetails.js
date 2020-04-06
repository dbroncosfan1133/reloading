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
            <div className="column is-10">
              <table className="table is-bordered is-striped is-fullwidth">
                <thead>
                  <tr>
                    <th>Caliber:</th>
                    <th>Bullet Brand:</th>
                    <th>Bullet Name:</th>
                    <th>Bullet Grains:</th>
                    <th>Powder Brand:</th>
                    <th>Powder Name:</th>
                    <th>Powder Grains:</th>
                    <th>Trim</th>
                  </tr>
                </thead>
                <tbody>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoadDetails;