import React, { useState, useEffect } from 'react';
import { Form, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom';


function Products() {
    const { id } = useParams();

    const [name, setName] = useState("");
    const [priceInEuro, setPriceInEuro] = useState("");
    const [priceInDollar, setPriceInDollar] = useState();
    const [description, setDescription] = useState("");
    const [format, setFormat] = useState();
    const [harvest, setHarvest] = useState();
    const [quantity, setQuantity] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/product/${id}`);
            const jsonData = await response.json();
            const { name, priceInEuro, priceInDollar, description, format, harvest, quantity } = jsonData;
            setName(name);
            setPriceInEuro(priceInEuro);
            setPriceInDollar(priceInDollar);
            setDescription(description);
            setFormat(format);
            setHarvest(harvest);
            setQuantity(quantity);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="d-flex flex-column vh-100 overflow-hidden">
            <Navbar />
            <section className="vh-100 overflow-hidden">
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-6 text-black mx-auto">
                            <div className="p-5">
                                <Card className="shadow custom-form">
                                    <Card.Body className="py-3 d-flex flex-column align-items-center">
                                        <h3 className="mb-4">Producto</h3>
                                        <Form className='w-100 px-2'>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formName">
                                                        <Form.Label className='fw-bold text-dark h6'>Nombre</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="text" readOnly defaultValue={name} disabled />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formFormat">
                                                        <Form.Label className='fw-bold text-dark h6'>Formato</Form.Label>
                                                        <div className={`d-flex flex-row}`}>
                                                            <Form.Control type="text" readOnly defaultValue={format} disabled />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className={`flex-column col-sm-2 p-2 `}>
                                                    <Form.Group controlId="formPrice">
                                                        <Form.Label className='fw-bold text-dark h6'>Precio (€)</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control type="number" readOnly defaultValue={priceInEuro} disabled />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className={`flex-column col-sm-2 p-2`}>
                                                    <Form.Group controlId="formPrice">
                                                        <Form.Label className='fw-bold text-dark h6'>Precio ($)</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="number" readOnly defaultValue={priceInDollar} disabled />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formDescription">
                                                        <Form.Label className='fw-bold text-dark h6'>Descripción</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control as="textarea" rows="1" readOnly defaultValue={description} disabled />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formHarvest">
                                                        <Form.Label className='fw-bold text-dark h6'>Cosecha</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control type="number" readOnly defaultValue={harvest} disabled />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formQuantity">
                                                        <Form.Label className='fw-bold text-dark h6'>Cantidad</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control type="number" readOnly defaultValue={quantity} disabled />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='text-center justify-content-center'>
                                                <button type="submit" className="btn btn-danger m-3 w-25">Cancelar</button>
                                                <button type="submit" className="btn btn-success m-3 w-25">Confirmar</button>
                                            </div>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <footer className='sticky-bottom'>
                <Footer />
            </footer>
        </div >
    );
};


export default Products;