import React, { useState } from 'react';
import { Form, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'


function Clients() {
    const [isVisualizationOn, setIsVisualizationOn] = useState(false);
    const [name, setName] = useState("Jane");
    const [surname, setSurname] = useState("Doe");
    const [address, setAddress] = useState("1234 Elm Street, Springfield");
    const [phone, setPhone] = useState("+1 (555) 123-4567");
    const [nif, setNif] = useState("12345678Z");

    const toggleVisualization = () => {
        setIsVisualizationOn(!isVisualizationOn);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSurnameChange = (e) => {
        setSurname(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleNifChange = (e) => {
        setNif(e.target.value);
    };

    return (
        <div className="d-flex flex-column vh-100 overflow-hidden">
            <Navbar />
            <section className="vh-100">
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-6 text-black mx-auto">
                            <div className="p-5">
                                <Card className="shadow custom-form">
                                    <Card.Body className="py-3 d-flex flex-column align-items-center">
                                        <h3 className="mb-4">Cliente Individual</h3>
                                        <Form className='w-100 px-2'>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formName">
                                                        <Form.Label className='fw-bold text-dark h6'>Nombre</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" required defaultValue={""} onChange={handleNameChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" readOnly defaultValue={name} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formSurname">
                                                        <Form.Label className='fw-bold text-dark h6'>Apellidos</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" required defaultValue={""} onChange={handleSurnameChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" readOnly defaultValue={surname} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-12 p-2'>
                                                    <Form.Group controlId="formAddress">
                                                        <Form.Label className='fw-bold text-dark h6'>Dirección</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" required defaultValue={""} onChange={handleAddressChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" readOnly defaultValue={address} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formPhone">
                                                        <Form.Label className='fw-bold text-dark h6'>Teléfono</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" required defaultValue={""} onChange={handlePhoneChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" readOnly defaultValue={phone} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formNIF">
                                                        <Form.Label className='fw-bold text-dark h6'>NIF</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" required defaultValue={""} onChange={handleNifChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" readOnly defaultValue={nif} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='text-center justify-content-center'>
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary w-25 m-3"
                                                    onClick={toggleVisualization}
                                                >
                                                    {isVisualizationOn ? 'Editar' : 'Visualizar'}
                                                </button>
                                                <button type="submit" className="btn btn-danger m-3 w-25">Cancelar</button>
                                                <button type="submit" className="btn btn-success m-3 w-25">Confirmar</button>
                                            </div>
                                        </Form>
                                    </Card.Body >
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className='sticky-bottom'>
                <Footer />
            </footer>
        </div>
    );
};


export default Clients;