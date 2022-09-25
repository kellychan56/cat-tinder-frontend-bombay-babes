import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { NavLink, useParams } from 'react-router-dom'

const FinalFantasyEdit = ({charProfile, updateChar, deleteChar}) => {
  const { id } = useParams()
  const character = charProfile?.find(character => character.id === +id)

  const [currentChar, setCurrentChar] = useState(character)

  const handleChar = (e) => {
    setCurrentChar({...currentChar, [e.target.name]: e.target.value})
  }

  const handleUpdate = () => {
    updateChar(currentChar, id)
    console.log(currentChar)
  }

  const handleDelete = () => {
    deleteChar(id)
    console.log(currentChar)
  }

  return (
    <>
      <div className='form'>
        <h2>Edit {character.name}'s Profile</h2>
        <Form>
          <FormGroup>
            <Label for="name">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Character Name"
              type="text"
              onChange={handleChar}
              value={currentChar.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">
              Age
            </Label>
            <Input
              id="age"
              name="age"
              placeholder="Character Age"
              type="number"
              onChange={handleChar}
              value={currentChar.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="interests">
              Interests
            </Label>
            <Input
              id="interests"
              name="interests"
              placeholder="List some interests"
              type="text"
              onChange={handleChar}
              value={currentChar.interests}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">
              Character Image
            </Label>
            <Input
              id="image"
              name="image"
              placeholder="Add an image url"
              type="url"
              onChange={handleChar}
              value={currentChar.image}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image_alt">
              Image Description
            </Label>
            <Input
              id="image_alt"
              name="image_alt"
              placeholder="Describe the photo"
              type="text"
              onChange={handleChar}
              value={currentChar.image_alt}
            />
          </FormGroup>
          <NavLink to={`/finalfantasyshow/${character.id}`} className="nav-link">
            <Button
              name="submit"
              onClick={handleUpdate}
            >
              Submit
            </Button>
          </NavLink>
          <NavLink to={'/finalfantasyindex'} className="nav-link">
            <Button
              name="submit"
              onClick={handleDelete}
            >
              Delete Profile
            </Button>
          </NavLink>
        </Form>
      </div>
    </>
  )
}

export default FinalFantasyEdit
