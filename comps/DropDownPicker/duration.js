import React from "react";
import { Dropdown, DropdownButton, DropdownType, DropdownText, ButtonGroup, Button } from "react-bootstrap";

class DurationDropdownMenuTest extends React.Component {
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

const DurationDropdownMenu = ({
  onSelection,
}) => {
  const duration = [
    "> 90mins",
    "< 90mins"
  ];

  const DropdownKeys = () => {
    for(let i = 0; i < duration.length; i++){
      return (
        <>
          {duration.map(data => (
            <Dropdown.Item
              title={duration[i]}
              eventKey={data}
            >
              {data}
            </Dropdown.Item>
          ))}
        </>
      )
    }
  }

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
          onSelect={onSelection}
        >
          <DropdownKeys />
        </DropdownType>
      ))}
    </>
  )
}

export default DurationDropdownMenu;