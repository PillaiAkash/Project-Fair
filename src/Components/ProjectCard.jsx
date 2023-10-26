import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import projectPic from '../Assests/React-Native-Img.png'


function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card onClick={handleShow}>
                <Card.Img variant="top" src={projectPic} />
                <Card.Body>
                    <Card.Title>Project Title</Card.Title>
                </Card.Body>
            </Card>
            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <img style={{ height: '200px' }} className='img-fluid'
                                src={projectPic} alt="Project Image" />
                        </Col>
                        <Col md={6}>
                            <h2>Project Title</h2>
                            <p> Project Overview: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, veritatis voluptas tempora incidunt sed minima iusto veniam odit asperiores rerum odio? Voluptates perspiciatis quae debitis enim? Id consequatur laudantium minima!</p>
                            <p>Language used: <span className='fw-bolder'>HTML,CSS,REACT</span></p>
                        </Col>
                    </Row>
                    <div className="mt-3">
                        <a href="https://github.com/PillaiAkash/calculator.git" target='_blank' className='me-3 btn'>
                        <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="https://bespoke-salamander-18a25f.netlify.app/" target='_blank' className='me-5 btn'>
                        <i class="fa-solid fa-link"></i>
                        </a>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ProjectCard