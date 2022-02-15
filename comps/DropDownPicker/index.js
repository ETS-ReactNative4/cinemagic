import * as React from "react";
import { Dropdown, DropdownButton, DropdownType, DropdownText, ButtonGroup, Button } from "react-bootstrap";

export default function DropDownPicker({
  dropDownTitle = "Placeholder",
  itemText1 = "Placeholder 1",
  itemText2 = "Placeholder 2",
  itemText3 = "Placeholder 3",
  itemAction1 = ()=>{},
  itemAction2 = ()=>{},
  itemAction3 = ()=>{},
}){
  return (
    <>
      {[DropdownButton].map((DropdownType, idx) => (
        <DropdownType
          as={ButtonGroup}
          key={idx}
          id={`dropdown-button-drop-${idx}`}
          size="sm"
          title={ dropDownTitle }
          variant='dark'
        >
          <Dropdown.Item eventKey={ itemAction1 }>{ itemText1 }</Dropdown.Item>
          <Dropdown.Item eventKey={ itemAction2 }>{ itemText2 }</Dropdown.Item>
          <Dropdown.Item eventKey={ itemAction3 }>{ itemText3 }</Dropdown.Item>
          {/* <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item> */}
        </DropdownType>
      ))}
    </>
  )
}