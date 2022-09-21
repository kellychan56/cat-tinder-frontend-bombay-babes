import React from 'react'
import { Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap'
import { useParams } from 'react-router-dom'

const FinalFantasyShow = ({charProfile}) => {

  const { id } = useParams()
  const character = charProfile?.find(character => character.id === +id)

  return (
    <>
    <Card className="my-2">
      <CardImg
        alt={character.image_alt}
        src={character.image}
      />
      <CardBody>
        <CardTitle tag="h5">
          {character.name}, {character.age}
        </CardTitle>
        <CardText>
          {character.interests}
        </CardText>
      </CardBody>
    </Card>
    </>
  )
}

export default FinalFantasyShow