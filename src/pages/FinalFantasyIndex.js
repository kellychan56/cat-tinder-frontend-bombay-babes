import React from 'react'
import { Card, CardBody, CardTitle, Button} from 'reactstrap'
import { NavLink } from 'react-router-dom'

const FinalFantasyIndex = ({charProfile}) => {
  return (
    <>
    { charProfile.map((character, index) =>  
      <Card
        style={{
          width: '18rem'
        }}
        key={index}
      >
        <img
          alt={ character.image_alt }
          src={ character.image }
        />
        <CardBody>
          <CardTitle tag="h5">
            { character.name }
          </CardTitle>
          <NavLink to={`/finalfantasyshow/${character.id}`} className="nav-link">
            <Button>
              See Profile
            </Button>
          </NavLink>
        </CardBody>
      </Card>
      )}
    </>
  )
}

export default FinalFantasyIndex