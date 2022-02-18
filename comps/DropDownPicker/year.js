import React from "react";
import { Dropdown, DropdownButton, DropdownType, DropdownText, ButtonGroup, Button } from "react-bootstrap";

export default class YearDropdownMenu extends React.Component {
  year = {
    years: []
  }

  render() {
    for(let i = 1996; i <= 2021; i++){
      this.year.years.push(i);
    }

    return (
      <>
        {[DropdownButton].map((DropdownType, idx) => (
          <DropdownType
            as={ButtonGroup}
            key={idx}
            id={`dropdown-button-drop-${idx}`}
            size="sm"
            title="Year"
            variant='dark'
          >

            { this.year.years.map( data => (
              <Dropdown.Item title={ data }>{ data }</Dropdown.Item>
            )) }
            
          </DropdownType>
        ))}
      </>
    )
  }
}
