import React, { useState } from 'react';
import { Form, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'


function Orders() {
    const [isVisualizationOn, setIsVisualizationOn] = useState(false);
    const [discount, setDiscount] = useState(10);
    const [idClient, setIdClient] = useState(1);
    const [price, setPrice] = useState(11200);
    const [cart, setCart] = useState("vino_tinto 2\nvino_blanco 1");
    const [status, setStatus] = useState('Recibido');

    const toggleVisualization = () => {
        setIsVisualizationOn(!isVisualizationOn);
    };

    const handleIdClientChange = (e) => {
        setIdClient(e.target.value);
    };

    const handleCartChange = (e) => {
        setCart(e.target.value);
    };

    const handleDiscountChange = (e) => {
        setDiscount(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
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
                                        <h3 className="mb-4">Pedido</h3>
                                        <Form className='w-100 px-2'>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formID">
                                                        <Form.Label className='fw-bold text-dark h6'>ID Cliente</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="number" required defaultValue={""} onChange={handleIdClientChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="number" readOnly defaultValue={idClient} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formCart">
                                                        <Form.Label className='fw-bold text-dark h6'>Cesta</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control as="textarea" rows="1" required defaultValue={""} onChange={handleCartChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control as="textarea" rows="1" readOnly defaultValue={cart} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formDiscount">
                                                        <Form.Label className='fw-bold text-dark h6'>Descuento (%)</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control
                                                                type="number"
                                                                min="0"
                                                                max="100"
                                                                onChange={handleDiscountChange}
                                                                required
                                                            />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control
                                                                type="number"
                                                                min="0"
                                                                max="100"
                                                                value={discount}
                                                                disabled={isVisualizationOn}
                                                            />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formPrice">
                                                        <Form.Label className='fw-bold text-dark h6'>Precio Total</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="number" required defaultValue={""} onChange={handlePriceChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="number" readOnly defaultValue={price} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formStatus">
                                                        <Form.Label className='fw-bold text-dark h6'>Estado</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" required defaultValue={""} onChange={handleStatusChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" readOnly defaultValue={status} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='text-center justify-content-center'>
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary w-25"
                                                    onClick={toggleVisualization}
                                                >
                                                    {isVisualizationOn ? 'Editar' : 'Visualizar'}
                                                </button>
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
            </section>
            <footer className='sticky-bottom'>
                <Footer />
            </footer>
        </div>
    );
};


export default Orders;