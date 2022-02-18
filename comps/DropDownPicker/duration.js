import React from "react";
import { Dropdown, DropdownButton, DropdownType, DropdownText, ButtonGroup, Button } from "react-bootstrap";

export default class DurationDropdownMenu extends React.Component {
  duration = {
    durations: [
      "Less than 90min",
      "More than 90min"
    ]
  }

  render() {
    return (
      <>
        {[DropdownButton].map((DropdownType, idx) => (
          <DropdownType
            as={ButtonGroup}
            key={idx}
            id={`dropdown-button-drop-${idx}`}
            size="sm"
            title="Duration"
            variant='dark'
          >

            { this.duration.durations.map( data => (
              <Dropdown.Item title={ data }>{ data }</Dropdown.Item>
            )) }
            
          </DropdownType>
        ))}
      </>
    )
  }
}
