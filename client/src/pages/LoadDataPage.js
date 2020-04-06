import React from "react";
import PageHero from "../components/PageHero/PageHero";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn/DeleteBtn";
import API from "../utils/API";
import "./mainpage.css"

class PastLoads extends React.Component {
  state = {
    loads: []
  };

  componentDidMount() {
    this.getAllLoads();
  }

  getAllLoads = () => {
    API.getLoads()
      .then(res =>
        this.setState({ loads: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteLoads = id => {
    API.deleteLoad(id)
      .then(res => this.getAllLoads())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <PageHero />
        <div className="container mainContain">
          <h1 className="is-size-3">Load History</h1>
          <hr />
          <div className="columns">
            <div className="column is-12">
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
                    <th>Delete</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Caliber:</th>
                    <th>Bullet Brand:</th>
                    <th>Bullet Name:</th>
                    <th>Bullet Grains:</th>
                    <th>Powder Brand:</th>
                    <th>Powder Name:</th>
                    <th>Powder Grains:</th>
                    <th>Trim</th>
                    <th>Delete</th>
                  </tr>
                </tfoot>
                <tbody>
                  <td>
                    {this.state.loads.map(load => (
                      <Link to={"/loads/" + load._id}>
                        <div className="is-size-4">
                          {load.caliber}
                        </div>
                      </Link>
                    ))}
                  </td>
                  <td>
                    {this.state.loads.map(load => (
                      <Link to={"/loads/" + load._id}>
                        <div className="is-size-4">
                          {load.bulletBrand}
                        </div>
                      </Link>
                    ))}
                  </td>
                  <td>
                    {this.state.loads.map(load => (
                      <div className="is-size-4">
                        {load.bulletName}
                      </div>
                    ))}
                  </td>
                  <td>
                    {this.state.loads.map(load => (
                      <div className="is-size-4">
                        {load.bulletGrains}
                      </div>
                    ))}
                  </td>
                  <td>
                    {this.state.loads.map(load => (
                      <div className="is-size-4">
                        {load.powderBrand}
                      </div>
                    ))}
                  </td>
                  <td>
                    {this.state.loads.map(load => (
                      <div className="is-size-4">
                        {load.powderName}
                      </div>
                    ))}
                  </td>
                  <td>
                    {this.state.loads.map(load => (
                      <div className="is-size-4">
                        {load.powderGrains}
                      </div>
                    ))}
                  </td>
                  <td>
                    {this.state.loads.map(load => (
                      <div className="is-size-4">
                        {load.trim}
                      </div>
                    ))}
                  </td>
                  <td>
                    {this.state.loads.map(load => (
                      <div>
                        <DeleteBtn onClick={() => this.deleteLoads(load._id)} />
                      </div>
                    ))}
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

export default PastLoads;