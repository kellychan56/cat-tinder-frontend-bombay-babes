import React from 'react'
import { Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap'
import { useParams } from 'react-router-dom'

const FinalFantasyShow = ({charProfile}) => {

  const { id } = useParams()
  const character = charProfile?.find(character => character.id === +id)

  return (
    <>
    <div className='character-card'>
    <Card className="character-card-content">
      <CardImg
        alt={character.image_alt}
        src={character.image}
      />
      <CardBody>
        <CardTitle tag="h5">
          {character.name}, {character.age}
        </CardTitle>
        <CardText>
          Interests: {character.interests}
        </CardText>
      </CardBody>
    </Card>
    </div>
    </>
  )
}

export default FinalFantasyShow
