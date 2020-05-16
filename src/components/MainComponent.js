import React, { Component } from "react";
import Menu from "./Menu";
import DishDetails from "./dishedetails";
import { DISHES } from "../shared/dishes.js";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  callComponent(dish) {
    if (dish != null) {
      return (
        <DishDetails
          selectedDish={
            this.state.dishes.filter(
              dish => dish.id === this.state.selectedDish
            )[0]
          }
        />
      );
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Menu
          dishes={this.state.dishes}
          onClick={dishId => this.onDishSelect(dishId)}
        />
        {this.callComponent(this.state.selectedDish)}
        <Footer />
      </div>
    );
  }
}

export default Main;
