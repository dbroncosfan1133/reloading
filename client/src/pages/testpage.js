import React from "react";
import PageHero from "../components/PageHero/PageHero";
import { Table, Thead, Tbody, Th, Tr, Td } from "reactable";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn/DeleteBtn";
import API from "../utils/API";

class TestFunc extends React.Component {
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
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <h1 className="is-size-3">Load History</h1>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                {/* <SearchForm /> */}
              </div>
            </div>
          </div>
          <hr />
          <div className="columns">
            <div className="column is-12">
              <Table className="table" id="table" filterable={["Caliber", "Bullet Name", "Powder Name"]}>
                <Thead>
                  <Th>Lot:</Th>
                  <Th>Caliber:</Th>
                  <Th>Bullet Brand:</Th>
                  <Th>Bullet Name:</Th>
                  <Th>Bullet Grains:</Th>
                  <Th>Powder Brand:</Th>
                  <Th>Powder Name:</Th>
                  <Th>Powder Grains:</Th>
                  <Th>Trim:</Th>
                </Thead>
                <Tbody>
                  <Td>
                    {this.state.loads.map(load => (
                      <Link to={"/loads/" + load._id}>
                        <div className="is-size-5">
                          {load.lotNumber}
                        </div>
                      </Link>
                    ))}
                  </Td>
                  <Td>
                    {this.state.loads.map(load => (
                      <div className="is-size-5">
                        {load.caliber}
                      </div>
                    ))}
                  </Td>
                  <Td>
                    {this.state.loads.map(load => (
                      <div className="is-size-5">
                        {load.bulletBrand}
                      </div>
                    ))}
                  </Td>
                  <Td>
                    {this.state.loads.map(load => (
                      <div className="is-size-5">
                        {load.bulletName}
                      </div>
                    ))}
                  </Td>
                  <Td>
                    {this.state.loads.map(load => (
                      <div className="is-size-5">
                        {load.bulletGrains}
                      </div>
                    ))}
                  </Td>
                  <Td>
                    {this.state.loads.map(load => (
                      <div className="is-size-5">
                        {load.powderBrand}
                      </div>
                    ))}
                  </Td>
                  <Td>
                    {this.state.loads.map(load => (
                      <div className="is-size-5">
                        {load.powderName}
                      </div>
                    ))}
                  </Td>
                  <Td>
                    {this.state.loads.map(load => (
                      <div className="is-size-5">
                        {load.powderGrains}
                      </div>
                    ))}
                  </Td>
                  <Td>
                    {this.state.loads.map(load => (
                      <div className="is-size-5">
                        {load.trim}
                      </div>
                    ))}
                  </Td>
                  <Td>
                    {this.state.loads.map(load => (
                      <div>
                        <DeleteBtn onClick={() => this.deleteLoads(load._id)} />
                      </div>
                    ))}
                  </Td>
                </Tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>

      // <Table className="table" id="table" data={[
      //   { 'State': 'New York', 'Description': 'this is some text', 'Tag': 'new' },
      //   { 'State': 'New Mexico', 'Description': 'lorem ipsum', 'Tag': 'old' },
      //   {
      //     'State': 'Colorado',
      //     'Description': 'new description that shouldn\'t match filter',
      //     'Tag': 'old'
      //   },
      //   { 'State': 'Alaska', 'Description': 'bacon', 'Tag': 'renewed' },
      // ]} filterable={['State', 'Tag']} />
    )
  }
}

export default TestFunc;