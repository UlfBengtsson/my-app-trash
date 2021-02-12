import React, { Component } from "react";

export default class FlavorForm extends Component {
  state = {
    idValue: -1,
    pickList: [
      { id: 1, flavor: "Coconut" },
      { id: 2, flavor: "Grapefruit" },
      { id: 3, flavor: "Lime" },
      { id: 4, flavor: "Mango" },
    ],
  };

  handleChange = (event) => {
    this.setState({ idValue: Number(event.target.value) });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { idValue, pickList } = this.state;
    let result;
    for (let index = 0; index < pickList.length; index++) {
      if (idValue === pickList[index].id) {
        result = pickList[index];
      }
    }
    console.log(result);
    alert("Your favorite flavor is: " + result.flavor);
  };

  render() {
    const { idValue, pickList } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={idValue} onChange={this.handleChange}>
            <option value="-1" disabled>
              Select flavor
            </option>
            {pickList.map((flavor) => (
              <option key={"flavorId" + flavor.id} value={flavor.id}>
                {flavor.flavor}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" disabled={idValue === -1} value="Submit" />
      </form>
    );
  }
}
