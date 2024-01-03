import React from 'react';
import { Form, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'


function RawMaterialBarrel() {
    return (
        <>
            <Navbar />
            <section className='vh-100 overflow-hidden'>
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-6 text-black mx-auto">
                            <div className="p-5">
                                <Card className="shadow custom-form">
                                    <Card.Body className="py-3 d-flex flex-column align-items-center">
                                        <h3 className="mb-4">Materia Prima (Barril)</h3>
                                        <Form className='w-100 px-2'>
                                            <div className='d-flex'>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formOrigin">
                                                        <Form.Label className='fw-bold text-dark h6'>Origen</Form.Label>
                                                        <Form.Control type="text" required />
                                                    </Form.Group>
                                                    <br />
                                                </div>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formNumber">
                                                        <Form.Label className='fw-bold text-dark h6'>Número</Form.Label>
                                                        <Form.Control type="number" required />
                                                    </Form.Group>
                                                    <br />
                                                </div>
                                            </div>
                                            <div className='text-end justify-content-end'>
                                                <button type="submit" className="btn btn-danger m-3 w-25">Cancelar</button>
                                                <button type="submit" className="btn btn-primary w-25">Confirmar</button>
                                            </div>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='sticky-bottom'>
                <Footer />
            </div>
        </>
    )
}

export default RawMaterialBarrel;