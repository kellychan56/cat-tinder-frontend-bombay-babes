import React, {useState} from 'react'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import { NavLink } from 'react-router-dom'

const FinalFantasyNew = ({createChar}) => {
  const [newChar, setNewChar] = useState({
    name: "",
    age: "",
    interests: "",
    image: "",
    image_alt: ""
  })

  const handleChar = (e) => {
    setNewChar({...newChar, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    createChar(newChar)
    console.log(newChar)
  }

  return (
    <>
      <div className='form'>
        <h2>Add a New Profile</h2>
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
              value={newChar.name}
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
              value={newChar.age}
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
              value={newChar.interests}
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
              value={newChar.image}
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
              value={newChar.image_alt}
            />
          </FormGroup>
          <NavLink to={`/finalfantasyindex`} className="nav-link">
            <Button
              onClick={handleSubmit}
              name="submit"
            >
              Submit
            </Button>
          </NavLink>
        </Form>
      </div>
    </>
  )
}

export default FinalFantasyNew
