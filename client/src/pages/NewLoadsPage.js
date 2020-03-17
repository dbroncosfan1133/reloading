import React from "react";
import BackButton from "../components/BackBtn/BackBtn";
import { Input, FormBtn } from "../components/Form/Form";
import Hero from "../components/Hero/Hero";
import "./mainpage.css"

class NewLoadsPage extends React.Component {
  state = {
    Loads: [],
    caliber: "",
    bulletBrand: "",
    bulletName: "",
    bulletGrains: "",
    powderBrand: "",
    powderName: "",
    powderGrains: "",
    trimmed: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //   handleFormSubmit = event => {
  //     event.preventDefault();
  //     if (this.state.itemNumber && this.state.subtract) {
  //       API.subtractQuantity({
  //         itemNumber: this.state.itemNumber,
  //         subtract: this.state.subtract
  //       })
  //         .then(res => this.viewInventory())
  //         .catch(err => console.log(err));
  //     }
  //   };

  render() {
    return (
      <div>
        <Hero />
        <div className="container mainContain">
          <h1 className="is-size-1">Enter New Load Data:</h1>
          <hr />
          <div className="columns">
            <div className="column is-9">
              <form>
                <Input
                  value={this.state.caliber}
                  onChange={this.handleInputChange}
                  name="caliber"
                  placeholder="Caliber.."
                />
                <Input
                  value={this.state.bulletBrand}
                  onChange={this.handleInputChange}
                  name="bulletBrand"
                  placeholder="Bullet Brand.."
                />
                <Input
                  value={this.state.bulletName}
                  onChange={this.handleInputChange}
                  name="bulletName"
                  placeholder="Bullet Name.."
                />
                <Input
                  value={this.state.bulletGrains}
                  onChange={this.handleInputChange}
                  name="bulletGrains"
                  placeholder="Bullet Grains.."
                />
                <Input
                  value={this.state.powderBrand}
                  onChange={this.handleInputChange}
                  name="powderBrand"
                  placeholder="Powder Brand.."
                />
                <Input
                  value={this.state.powderName}
                  onChange={this.handleInputChange}
                  name="powderName"
                  placeholder="Powder Name.."
                />
                <Input
                  value={this.state.powderGrains}
                  onChange={this.handleInputChange}
                  name="powderGrains"
                  placeholder="Powder Grains Used.."
                />
                <Input
                  value={this.state.trimmed}
                  onChange={this.handleInputChange}
                  name="trimmed"
                  placeholder="Trimmed?"
                />
                <div className="columns">
                  <div className="column is-3">
                    <FormBtn
                      disabled={!(this.state.caliber && this.state.bulletBrand
                        && this.state.bulletName && this.state.bulletGrains &&
                        this.state.powderBrand && this.state.powderName &&
                        this.state.powderGrains && this.state.trimmed)}
                      onClick={this.handleFormSubmit}
                    >
                      Submit
                    </FormBtn>
                  </div>
                  <div className="column is-3">
                    <BackButton />
                  </div>
                </div>
              </form>
            </div>
            <div className="column is-3">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewLoadsPage;