import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieItem({ film }) {
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img style={{ height: "200px" }} variant="top" src={film.img} />
            <Card.Body>
                <Card.Title>{film.title}</Card.Title>
                <Card.Text>
                    {film.description}
                </Card.Text>
                <Button
                    variant="primary">{film.rate}⭐</Button>
            </Card.Body>
        </Card>

    )
}

export default MovieItem
