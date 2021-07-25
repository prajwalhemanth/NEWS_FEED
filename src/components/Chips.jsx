import React, { Component } from 'react';

class Chips extends Component {
  render() {
    const { chips, highLightList } = this.props;

    {/* iterating chips list*/ }

    if (chips.length > 0) {
      return chips.map((chip, index) => {
        // index
        return (
          <span className="chip" key={index} >
            <span className={highLightList ? "high-light-list chip-value" : "chip-value"} id={`list${index}`}>
              {chip.name}
            </span>
            <button type="button" className={highLightList ? "high-light-list chip-delete-button" : "chip-delete-button"} onClick={this.props.removeChips.bind(this, index)} >x</button>
          </span>
        )
      })
    } else {
      return null
    }
  }
}

export default Chips;




