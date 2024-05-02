import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../App.css"

// implement the class below
class Carousel extends Component {
  constructor() {
    super();
    // console.log(images)
    this.state = {
      index: 0,
    };
  }

  handleNext=()=>{
    if(this.state.index>=images.length-1){
      this.setState({
        index:0,
      })
    }else{
      this.setState({
        index:this.state.index+1,
      })
    }
  }

  handlePrev=()=>{
    if(this.state.index<=0){
      this.setState({
        index:images.length-1,
      })
    }else{
      this.setState({
        index:this.state.index-1,
      })
    }
  }

  render() {
    return (
      <div className="box">
        <button className="prev" onClick={this.handlePrev}>
          {"<"}
        </button>

        <div className="display">
          <img src={images[this.state.index].img} alt="image" />
        </div>

        <button className="next" onClick={this.handleNext}>{">"}</button>
      </div>
    );
  }
}

export default Carousel;
