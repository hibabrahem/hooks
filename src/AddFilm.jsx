import React, { useRef, useState } from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function AddFilm({ list, setList }) {



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const R1 = useRef()
    const R2 = useRef()
    const R3 = useRef()
    const R4 = useRef()

    const AddMovie = () => {


        setList([...list, { title: R1.current.value, description: R2.current.value, img: R3.current.value, rate: R4.current.value }])
        setShow(false);
    }
    return (
        <>
            <Button style={{ height: "50px", position: 'relative', top: '150px' }} variant="primary" onClick={handleShow}>
                +
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Movie Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name Product" ref={R1} />

                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>description</Form.Label>
                            <Form.Control type="text" placeholder="description" ref={R2} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Image Link</Form.Label>
                            <Form.Control type="text" placeholder="enter your image" ref={R3} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Rate</Form.Label>
                            <Form.Control type="text" placeholder="rate" ref={R4} />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={AddMovie}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddFilm
