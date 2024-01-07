import React, { useState, useEffect } from 'react';
import { Form, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom';

function ClientsEdit() {
    const { id } = useParams();

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [nif, setNif] = useState("");

    useEffect(() => {
        fetchData();
    });

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/individualClient/${id}`);
            const jsonData = await response.json();
            const { NIF, address, name, phoneNumber, surname } = jsonData;
            setName(name);
            setSurname(surname);
            setAddress(address);
            setPhone(phoneNumber);
            setNif(NIF);
            console.log(jsonData);
        } catch (error) {
            console.error('Error:', error);
        }
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
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="text" required defaultValue={name} onChange={handleNameChange} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formSurname">
                                                        <Form.Label className='fw-bold text-dark h6'>Apellidos</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="text" required defaultValue={surname} onChange={handleSurnameChange} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-12 p-2'>
                                                    <Form.Group controlId="formAddress">
                                                        <Form.Label className='fw-bold text-dark h6'>Dirección</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="text" required defaultValue={address} onChange={handleAddressChange} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formPhone">
                                                        <Form.Label className='fw-bold text-dark h6'>Teléfono</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="text" required defaultValue={phone} onChange={handlePhoneChange} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formNIF">
                                                        <Form.Label className='fw-bold text-dark h6'>NIF</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control type="text" required defaultValue={nif} onChange={handleNifChange} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='text-center justify-content-center'>
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


export default ClientsEdit;