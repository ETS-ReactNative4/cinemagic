import React from "react";
import { Dropdown, DropdownButton, DropdownType, DropdownText, ButtonGroup, Button } from "react-bootstrap";
import { filtering } from "@/utils/func";

export default class GenreDropdownMenu extends React.Component {
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

  render() {
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
                eventKey={ () => { filtering(data, {genre}) } }
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