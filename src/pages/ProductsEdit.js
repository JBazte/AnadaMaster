import React, { useState, useEffect } from 'react';
import { Form, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import { useParams, Link, useNavigate } from 'react-router-dom';


function ProductsEdit() {
    const { id } = useParams();
    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [priceInEuro, setPriceInEuro] = useState("");
    const [description, setDescription] = useState("");
    const [format, setFormat] = useState();
    const [harvest, setHarvest] = useState();
    const [quantity, setQuantity] = useState();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePriceInEuroChange = (e) => {
        setPriceInEuro(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleFormatChange = (e) => {
        setFormat(e.target.value);
    };

    const handleHarvestChange = (e) => {
        setHarvest(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://anadamaster-api.onrender.com/api/product/${id}`);
            const jsonData = await response.json();
            const { name, priceInEuro, description, format, harvest, quantity } = jsonData;
            setName(name);
            setPriceInEuro(priceInEuro);
            setDescription(description);
            setFormat(format);
            setHarvest(harvest.split("-")[0]);
            setQuantity(quantity);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const updateProductData = async () => {
        try {
            const selectedDate = new Date(harvest);
            const formattedDate = selectedDate.toISOString();

            const response = await fetch(`https://anadamaster-api.onrender.com/api/product/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    priceInEuro: priceInEuro,
                    description: description,
                    format: format,
                    harvest: formattedDate,
                    quantity: quantity
                })
            });
            const jsonData = await response.json();
            console.log(jsonData);
            navigate(`/product/${id}`)
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleConfirmClick = (e) => {
        e.preventDefault();
        updateProductData();
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
                                            <div className='d-flex'>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formName">
                                                        <Form.Label className='fw-bold text-dark h6'>Nombre</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control type="text" required defaultValue={name} onChange={handleNameChange} />
                                                        </div>
                                                    </Form.Group>
                                                    <br />
                                                    <Form.Group controlId="formPrice">
                                                        <Form.Label className='fw-bold text-dark h6'>Precio (€)</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control type="number" required defaultValue={priceInEuro} onChange={handlePriceInEuroChange} />
                                                        </div>
                                                    </Form.Group>
                                                    <br />
                                                    <Form.Group controlId="formHarvest">
                                                        <Form.Label className='fw-bold text-dark h6'>Cosecha</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control type="number" required defaultValue={harvest} onChange={handleHarvestChange} />
                                                        </div>
                                                    </Form.Group>
                                                    <br />
                                                    <Form.Group controlId="formQuantity">
                                                        <Form.Label className='fw-bold text-dark h6'>Cantidad</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control type="number" required defaultValue={quantity} onChange={handleQuantityChange} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formFormat">
                                                        <Form.Label className='fw-bold text-dark h6'>Formato</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control type="text" required defaultValue={format} onChange={handleFormatChange} />
                                                        </div>
                                                    </Form.Group>
                                                    <br />
                                                    <Form.Group controlId="formDescription">
                                                        <Form.Label className='fw-bold text-dark h6'>Descripción</Form.Label>
                                                        <div className={`d-flex flex-row row-sm-4`}>
                                                            <Form.Control as="textarea" style={{ height: "220px", resize: "none" }} required defaultValue={description} onChange={handleDescriptionChange} />
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
            </section >
            <footer className='sticky-bottom'>
                <Footer />
            </footer>
        </div >
    );
};


export default ProductsEdit;