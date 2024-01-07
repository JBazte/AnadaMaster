import React, { useState, useEffect } from 'react';
import { Form, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import { useParams, Link, useNavigate } from 'react-router-dom';


function BusinessEdit() {
    const { id } = useParams();
    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [billingAddress, setBillingAddress] = useState("");
    const [cif, setCif] = useState("");
    const [discount, setDiscount] = useState();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleBillingAddressChange = (e) => {
        setBillingAddress(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleCifChange = (e) => {
        setCif(e.target.value);
    };

    const handleDiscountChange = (e) => {
        setDiscount(e.target.value);
    };

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
    const updateBusinessData = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/business/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    phoneNumber: phone,
                    address: address,
                    shippingAddress: billingAddress,
                    CIF: cif,
                    volumeDiscount: discount
                })
            });
            const jsonData = await response.json();
            console.log(jsonData);
            navigate(`/business/${id}`)
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleConfirmClick = (e) => {
        e.preventDefault();
        updateBusinessData();
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
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control type="text" required defaultValue={name} onChange={handleNameChange} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-5 p-2'>
                                                    <Form.Group controlId="formPhone">
                                                        <Form.Label className='fw-bold text-dark h6'>Teléfono</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control type="text" required defaultValue={phone} onChange={handlePhoneChange} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formAddress">
                                                        <Form.Label className='fw-bold text-dark h6'>Dirección</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control type="text" required defaultValue={address} onChange={handleAddressChange} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formCIF">
                                                        <Form.Label className='fw-bold text-dark h6'>CIF</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="text" required defaultValue={cif} onChange={handleCifChange} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-9 p-2'>
                                                    <Form.Group controlId="formPaymentAddress">
                                                        <Form.Label className='fw-bold text-dark h6'>Dirección Facturacion</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control type="text" required defaultValue={billingAddress} onChange={handleBillingAddressChange} />
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
                                                                onChange={handleDiscountChange} required
                                                            />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='text-center justify-content-center'>
                                                <Link to={`/corereservas/list`}>
                                                    <button className="btn btn-danger m-3 w-25">Cancelar</button>
                                                </Link>
                                                <button type="submit" className="btn btn-success m-3 w-25" onClick={handleConfirmClick}>Confirmar</button>
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


export default BusinessEdit;