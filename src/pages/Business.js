import React from 'react';
import { Form, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'


function Business() {
    return (
        <>
            <Navbar />
            <section>
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-6 text-black mx-auto">
                            <div className="p-5">
                                <Card className="shadow custom-form">
                                    <Card.Body className="py-3 d-flex flex-column align-items-center">
                                        <h3 className="mb-4">CLIENTE EMPRESA</h3>
                                        <Form className='w-100 px-2'>
                                            <Form.Group controlId="formName">
                                                <Form.Label className='fw-bold text-dark h6'>Nombre</Form.Label>
                                                <Form.Control type="text" required />
                                            </Form.Group>
                                            <br />
                                            <Form.Group controlId="formPhone">
                                                <Form.Label className='fw-bold text-dark h6'>Teléfono</Form.Label>
                                                <Form.Control type="text" required />
                                            </Form.Group>
                                            <br />
                                            <Form.Group controlId="formAddress">
                                                <Form.Label className='fw-bold text-dark h6'>Dirección</Form.Label>
                                                <Form.Control type="text" required />
                                            </Form.Group>
                                            <br />
                                            <Form.Group controlId="formCIF">
                                                <Form.Label className='fw-bold text-dark h6'>CIF</Form.Label>
                                                <Form.Control type="text" required />
                                            </Form.Group>
                                            <br />
                                            <Form.Group controlId="formPaymentAddress">
                                                <Form.Label className='fw-bold text-dark h6'>Dirección Facturacion</Form.Label>
                                                <Form.Control type="text" required />
                                            </Form.Group>
                                            <br />
                                            <Form.Group controlId="formDiscount">
                                                <Form.Label className='fw-bold text-dark h6'>Descuento</Form.Label>
                                                <Form.Control type="text" required />
                                            </Form.Group>
                                            <br />
                                            <div className='text-center justify-content-center'>
                                                <button type="submit" className="btn btn-danger m-3 w-25">Cancelar</button>
                                                <button type="submit" className="btn btn-primary m-3 w-25">Confirmar</button>
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
    );
};


export default Business;