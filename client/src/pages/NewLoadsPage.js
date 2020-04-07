import React from "react";
import BackButton from "../components/BackBtn/BackBtn";
import { Input, TextArea, FormBtn } from "../components/Form/Form";
import MainHero from "../components/MainHero/MainHero";
import API from "../utils/API";
import "./mainpage.css"

class NewLoadsPage extends React.Component {
  state = {
    lotNumber: "",
    date: "",
    caliber: "",
    bulletBrand: "",
    bulletName: "",
    bulletGrains: "",
    powderBrand: "",
    powderName: "",
    powderGrains: "",
    trim: "",
    roundsLoaded: "",
    notes: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.lotNumber && this.state.date && this.state.caliber && this.state.bulletBrand && this.state.bulletName && this.state.bulletGrains
          && this.state.powderBrand && this.state.powderName && this.state.powderGrains && this.state.trim && this.state.roundsLoaded && this.state.notes) {
        API.saveLoad({
          lotNumber: this.state.lotNumber,
          date: this.state.date,
          caliber: this.state.caliber,
          bulletBrand: this.state.bulletBrand,
          bulletName: this.state.bulletName,
          bulletGrains: this.state.bulletGrains,
          powderBrand: this.state.powderBrand,
          powderName: this.state.powderName,
          powderGrains: this.state.powderGrains,
          trim: this.state.trim,
          roundsLoaded: this.state.roundsLoaded,
          notes: this.state.notes
        })
          .then(res => this.clearForm())
          .catch(err => console.log(err));
      }
    };

    clearForm = () => {
      this.setState({
        lotNumber: "",
        date: "",
        caliber: "",
        bulletBrand: "",
        bulletName: "",
        bulletGrains: "",
        powderBrand: "",
        powderName: "",
        powderGrains: "",
        trim: "",
        roundsLoaded: "",
        notes: ""
      });
    }

  render() {
    return (
      <div>
        <MainHero />
        <div className="container mainContain">
          <h1 className="is-size-3">Enter New Load Data:</h1>
          <hr />
          <div className="columns">
            <div className="column is-9">
              <form>
                <Input
                  value={this.state.lotNumber}
                  onChange={this.handleInputChange}
                  name="lotNumber"
                  placeholder="Create a new lot number.."
                />
                <Input
                  value={this.state.date}
                  onChange={this.handleInputChange}
                  name="date"
                  placeholder="Enter date loaded.. (YYYY-MM-DD)"
                />
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
                  value={this.state.trim}
                  onChange={this.handleInputChange}
                  name="trim"
                  placeholder="Number of times trimmed? (Rolling Count)"
                />
                <Input
                  value={this.state.roundsLoaded}
                  onChange={this.handleInputChange}
                  name="roundsLoaded"
                  placeholder="Number of rounds loaded"
                />
                <TextArea
                  value={this.state.notes}
                  onChange={this.handleInputChange}
                  name="notes"
                  placeholder="Please enter a note.."
                />
                <div className="field is-grouped">
                    <p className="control">
                    <FormBtn
                      disabled={!(this.state.lotNumber && this.state.date && this.state.caliber && this.state.bulletBrand
                        && this.state.bulletName && this.state.bulletGrains &&
                        this.state.powderBrand && this.state.powderName &&
                        this.state.powderGrains && this.state.trim && this.state.roundsLoaded)}
                      onClick={this.handleFormSubmit}
                    >
                      Submit
                      </FormBtn>
                    </p>
                    <p className="control">
                      <BackButton />
                    </p>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewLoadsPage;