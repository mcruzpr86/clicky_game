import React, { Component } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ImageCard from "./components/imgCard";
import Images from "./images.json";
import ImgCard from "./components/imgCard";
import { Container, Row } from "reactstrap";

class App extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    this.setState({ images: Images });

  }

handleClick = (id) => {
  console.log(id)
}


  render() {
    return (
      <div>
        <h1>Clicky Game</h1>

        <Container>
          <Row>
            {this.state.images.map((el) => {
              return <ImgCard handleClick={this.handleClick} src={el.src} id={el.id} />;
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
