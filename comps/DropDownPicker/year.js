import React from "react";
import { Dropdown, DropdownButton, DropdownType, DropdownText, ButtonGroup, Button } from "react-bootstrap";

class YearDropdownMenuTest extends React.Component {
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

const YearDropdownMenu = ({
  onSelection,
}) => {
  const years = [];

  for(let i = 1996; i < 2021; i++){
    years.push([i]);
  }

  const DropdownKeys = () => {
    for(let i = 0; i < years.length; i++){
      return (
        <>
          {years.map(data => (
            <Dropdown.Item
              title={years[i]}
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
          title="Year"
          variant='dark'
          onSelect={onSelection}
        >
          <DropdownKeys />
        </DropdownType>
      ))}
    </>
  )
}

export default YearDropdownMenu;