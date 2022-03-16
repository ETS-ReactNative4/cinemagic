import React from "react";
import { Dropdown, DropdownButton, DropdownType, DropdownText, ButtonGroup, Button } from "react-bootstrap";
import { filtering } from "@/utils/func";

class GenreDropdownMenuTest extends React.Component {
  genreTypes = {
    genres: [
      "Action",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "History",
      "Horror",
      "Music",
      "Musical",
      "Mystery",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Thriller",
      "War",
      "Western"
    ]
  }

  render({
    selected = () => {}
  }) {
    return (
      <>
        {[DropdownButton].map((DropdownType, idx) => (
          <DropdownType
            as={ButtonGroup}
            key={idx}
            id={`dropdown-button-drop-${idx}`}
            size="sm"
            title="Genre"
            variant='dark'
          >

            { this.genreTypes.genres.map( data => (
              <Dropdown.Item 
                title={ data } 
                eventKey={ selected }
              >
                { data }
              </Dropdown.Item>

            )) }
          </DropdownType>
        ))}
      </>
    )
  }
}

const GenreDropdownMenu = ({
  onSelection,
}) => {
  const genreTypes = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Drama",
    "Family",
    "Fantasy",
    "Film Noir",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Short",
    "Sport",
    "Thriller",
    "War",
    "Western"
  ]

  const DropdownKeys = () => {
    for(let i = 0; i < genreTypes.length; i++){
      return (
        <>
          {genreTypes.map(data => (
            <Dropdown.Item
              title={genreTypes[i]}
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
          title="Genre"
          variant='dark'
          onSelect={onSelection}
        >
          <DropdownKeys />
        </DropdownType>
      ))}
    </>
  )
}

export default GenreDropdownMenu;