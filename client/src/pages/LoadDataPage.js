import React from "react";
import { Col, Row, Container } from "../components/Grid/grid";
import { List, ListItem } from "../components/List/list";
import BackButton from "../components/BackBtn/BackBtn";
import Hero from "../components/Hero/Hero";
import API from "../utils/API";
import "./mainpage.css"

class PastLoads extends React.Component {
    state = {
        loads: []
    };

    componentDidMount() {
        this.getAllLoads();
        console.log(this.state)
    }

    getAllLoads = () => {
        API.getLoads()
            .then(res =>
                this.setState({ loads: res.data })
            )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div>
                <Hero />
                <Container>
                    {this.state.loads.length ? (
                        <List>
                            {this.state.loads.map(load => (
                                <ListItem key={load._id}>
                                    <Row>
                                        <div className="is-size-4">
                                            {load.caliber} | {load.bulletBrand} | {load.BulletName} | {load.bulletGrains} Grains | {load.powderBrand} | {load.powderName} | {load.powderGrains} Grains | {load.trim}
                                        </div>
                                    </Row>
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <div></div>
                        )}
                </Container>
            </div>
        )
    }

}


// function LoadData() {
//     return (
//         <div>
//             <Hero />
//             <div className="container mainContain">
//                 <h1 className="is-size-1">Past Load Data:</h1>
//                 <hr />
//                 <div className="columns">
//                     <div className="column is-6">

//                     </div>
//                     <div className="column is-3">

//                     </div>
//                     <div className="column is-3">

//                         <BackButton />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default PastLoads;