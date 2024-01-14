import React, { useState, useEffect } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import { useParams, Link, useNavigate } from 'react-router-dom';


function Products() {
    const { id } = useParams();
    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [priceInEuro, setPriceInEuro] = useState("");
    const [priceInDollar, setPriceInDollar] = useState();
    const [description, setDescription] = useState("");
    const [format, setFormat] = useState();
    const [harvest, setHarvest] = useState();
    const [quantity, setQuantity] = useState();

    useEffect(() => {
        fetchData();
    });

    const fetchData = async () => {
        try {
            const response = await fetch(`https://anadamaster-api.onrender.com/api/product/${id}`);
            const jsonData = await response.json();
            const { name, priceInEuro, priceInDollar, description, format, harvest, quantity } = jsonData;
            setName(name);
            setPriceInEuro(priceInEuro);
            setPriceInDollar(priceInDollar);
            setDescription(description);
            setFormat(format);
            setHarvest(harvest.split("-")[0]);
            setQuantity(quantity);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDelete = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`https://anadamaster-api.onrender.com/api/product/${id}`, {
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
        <div className="d-flex flex-column vh-100">
            <Navbar />
            <section className="vh-100">
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-6 text-black mx-auto">
                            <div className="p-5">
                                <Card className="shadow custom-form">
                                    <Card.Body className="py-3 d-flex flex-column align-items-center">
                                        <h3 className="mb-4">Producto</h3>
                                        <Form className='w-100 px-2'>
                                            <div className='d-flex'>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formName">
                                                        <Form.Label className='fw-bold text-dark h6'>Nombre</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="text" readOnly defaultValue={name} disabled />
                                                        </div>
                                                    </Form.Group>
                                                    <br />
                                                    <div className='flex-row row mt-0'>
                                                        <div className={`flex-column col-sm-6 px-2`}>
                                                            <Form.Group controlId="formPrice">
                                                                <Form.Label className='fw-bold text-dark h6'>Precio (€)</Form.Label>
                                                                <div className={`d-flex flex-row`}>
                                                                    <Form.Control type="number" readOnly defaultValue={priceInEuro} disabled />
                                                                </div>
                                                            </Form.Group>
                                                        </div>
                                                        <div className={`flex-column col-sm-6 px-2`}>
                                                            <Form.Group controlId="formPrice">
                                                                <Form.Label className='fw-bold text-dark h6'>Precio ($)</Form.Label>
                                                                <div className={`d-flex flex-row `}>
                                                                    <Form.Control type="number" readOnly defaultValue={priceInDollar} disabled />
                                                                </div>
                                                            </Form.Group>
                                                        </div>
                                                    </div>
                                                    <br />
                                                    <Form.Group controlId="formHarvest">
                                                        <Form.Label className='fw-bold text-dark h6'>Cosecha</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control type="number" readOnly defaultValue={harvest} disabled />
                                                        </div>
                                                    </Form.Group>
                                                    <br />
                                                    <Form.Group controlId="formQuantity">
                                                        <Form.Label className='fw-bold text-dark h6'>Cantidad</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control type="number" readOnly defaultValue={quantity} disabled />
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
                                                    <br />
                                                    <Form.Group controlId="formDescription">
                                                        <Form.Label className='fw-bold text-dark h6'>Descripción</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control as="textarea" style={{ height: "220px", resize: "none" }} readOnly defaultValue={description} disabled />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='text-center justify-content-center'>
                                                <button className="btn btn-danger m-3 w-25" onClick={(event) => handleDelete(event)}>Eliminar</button>
                                                <Link to={`/product/${id}/edit`}>
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
            </section >
            <footer className='sticky-bottom'>
                <Footer />
            </footer>
        </div >
    );
};


export default Products;