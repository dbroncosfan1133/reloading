import React from "react";
import PageHero from "../components/PageHero/PageHero";
import ReactTable from "react-table";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn/DeleteBtn";
import API from "../utils/API";
import "./mainpage.css";

class TestFunc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loads: []
    }
  }

  componentDidMount() {
    this.getAllLoads();
  }

  getAllLoads = () => {
    API.getLoads()
      .then(loads => { console.log(loads.data) })
      .then(loads => { this.setState({ loads: loads.data }) })

      .catch(err => console.log(err));
  };

  deleteLoads = id => {
    API.deleteLoad(id)
      .then(res => this.getAllLoads())
      .catch(err => console.log(err));
  };

  


  render() {
    const columns = [
      {
        Header: "Lot:",
        accessor: "lotNumber"
      },
      {
        Header: "Caliber:",
        accessor: "caliber"
      },
      {
        Header: "Bullet Brand:",
        accessor: "bulletBrand"
      },
      {
        Header: "Bullet Name:",
        accessor: "bulletName"
      },
      {
        Header: "Bullet Grains:",
        accessor: "bulletGrains"
      },
      {
        Header: "Powder Brand:",
        accessor: "powderBrand"
      },
      {
        Header: "Powder Name:",
        accessor: "powderName"
      },
      {
        Header: "Powder Grains:",
        accessor: "powderGrains"
      },
      {
        Header: "Trim:",
        accessor: "trim"
      },
    ]

    return (
      <div>Eat Poop</div>
 



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