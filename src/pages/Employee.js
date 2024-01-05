import React from 'react';
import { Form, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


function Employee() {
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
                                        <h3 className="mb-4">Empleado</h3>
                                        <Form className='w-100 px-2'>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formName">
                                                        <Form.Label className='fw-bold text-dark h6'>Nombre</Form.Label>
                                                        <Form.Control type="text" required defaultValue={""} />
                                                        {/*<Form.Control plaintext readOnly defaultValue="email@example.com" />*/}
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formSurname">
                                                        <Form.Label className='fw-bold text-dark h6'>Apellidos</Form.Label>
                                                        <Form.Control type="text" required />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formAddress">
                                                        <Form.Label className='fw-bold text-dark h6'>Dirección</Form.Label>
                                                        <Form.Control type="text" required />
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formDOB">
                                                        <Form.Label className='fw-bold text-dark h6'>Fecha de nacimiento</Form.Label>
                                                        <Form.Control type="date" required />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formPhoneNum">
                                                        <Form.Label className='fw-bold text-dark h6'>Teléfono</Form.Label>
                                                        <Form.Control type="text" required />
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formContact">
                                                        <Form.Label className='fw-bold text-dark h6'>Contacto</Form.Label>
                                                        <Form.Control type="text" required />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-6 p-2'>
                                                    <Form.Group controlId="formSSNumber">
                                                        <Form.Label className='fw-bold text-dark h6'>Seguridad social</Form.Label>
                                                        <Form.Control type="text" required />
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-6 p-2'>
                                                    <Form.Group controlId="formNif">
                                                        <Form.Label className='fw-bold text-dark h6'>NIF</Form.Label>
                                                        <Form.Control type="text" required />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formEmploymentStatus">
                                                        <Form.Label className='fw-bold text-dark h6'>Categoría laboral</Form.Label>
                                                        <Form.Select className='custom-select' type="text" required >
                                                            <option selected value={"Grupo1"}>Grupo 1: Puesto de responsabilidad</option>
                                                            <option value={"Grupo2"}>Grupo 2: Puesto intermedio</option>
                                                            <option value={"Grupo3"}>Grupo 3: Puesto sin responsabilidad</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formEntryDate">
                                                        <Form.Label className='fw-bold text-dark h6'>Fecha de ingreso</Form.Label>
                                                        <Form.Control type="date" required />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formNumberChildren">
                                                        <Form.Label className='fw-bold text-dark h6'>Número de hijos</Form.Label>
                                                        <Form.Control type="number" required />
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formMaritalStatus">
                                                        <Form.Label className='fw-bold text-dark h6'>Estado civil</Form.Label>
                                                        <Form.Select className='custom-select' type="text" required >
                                                            <option selected value={"Soltero"}>Soltero</option>
                                                            <option value={"Casado"}>Casado</option>
                                                            <option value={"Divorciado"}>Divorciado</option>
                                                        </Form.Select>
                                                    </Form.Group>
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

export default Employee;