import React, { useState, useEffect } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import { useParams, useNavigate, Link } from 'react-router-dom';

function Business() {
    const { id } = useParams();
    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [billingAddress, setBillingAddress] = useState("");
    const [cif, setCif] = useState("");
    const [discount, setDiscount] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/business/${id}`);
            const jsonData = await response.json();
            const { name, phoneNumber, address, shippingAddress, CIF, volumeDiscount } = jsonData;
            setName(name);
            setPhone(phoneNumber);
            setAddress(address);
            setBillingAddress(shippingAddress);
            setCif(CIF);
            setDiscount(volumeDiscount);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDelete = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:3001/api/business/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.ok) {
                console.log('Element deleted successfully');
                navigate("/corereservas/list");
            } else {
                console.error('Failed to delete element');
            }
        } catch (error) {
            console.error('Error deleting element:', error);
        }
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
                                        <h3 className="mb-4">Cliente Empresa</h3>
                                        <Form className='w-100 px-2'>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-7 p-2'>
                                                    <Form.Group controlId="formName">
                                                        <Form.Label className='fw-bold text-dark h6'>Nombre</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="text" readOnly defaultValue={name} disabled />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-5 p-2'>
                                                    <Form.Group controlId="formPhone">
                                                        <Form.Label className='fw-bold text-dark h6'>Teléfono</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control type="text" readOnly defaultValue={phone} disabled />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formAddress">
                                                        <Form.Label className='fw-bold text-dark h6'>Dirección</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="text" readOnly defaultValue={address} disabled />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formCIF">
                                                        <Form.Label className='fw-bold text-dark h6'>CIF</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control type="text" readOnly defaultValue={cif} disabled />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-9 p-2'>
                                                    <Form.Group controlId="formPaymentAddress">
                                                        <Form.Label className='fw-bold text-dark h6'>Dirección Facturacion</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control type="text" readOnly defaultValue={billingAddress} disabled />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-3 p-2'>
                                                    <Form.Group controlId="formDiscount">
                                                        <Form.Label className='fw-bold text-dark h6'>Descuento (%)</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control
                                                                type="number"
                                                                min="0"
                                                                max="100"
                                                                value={discount}
                                                                disabled
                                                            />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='text-center justify-content-center'>
                                                <button className="btn btn-danger m-3 w-25" onClick={(event) => handleDelete(event)}>Eliminar</button>
                                                <Link to={`/business/${id}/edit`}>
                                                    <Button className="btn btn-primary m-3 w-25">Modificar</Button>
                                                </Link>
                                            </div>
                                        </Form>
                                    </Card.Body>
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


export default Business;