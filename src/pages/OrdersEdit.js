import React, { useState, useEffect } from 'react';
import { Form, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import { useParams, Link, useNavigate } from 'react-router-dom';

function OrdersEdit() {
    const { id } = useParams();
    let navigate = useNavigate();

    const [discount, setDiscount] = useState();
    const [idClient, setIdClient] = useState();
    const [price, setPrice] = useState();
    const [cart, setCart] = useState("");
    const [status, setStatus] = useState('');

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

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/productOrder/${id}`);
            const jsonData = await response.json();
            const { discount, idClient, status, totalPrice, basket } = jsonData;
            setDiscount(discount);
            setIdClient(idClient);
            setPrice(totalPrice);
            setCart(basket);
            setStatus(status);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const updateOrderData = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/productOrder/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    discount: discount,
                    idClient: idClient,
                    totalPrice: price,
                    basket: cart,
                    status: status
                })
            });
            const jsonData = await response.json();
            console.log(jsonData);
            navigate(`/order/${id}`)
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleConfirmClick = (e) => {
        e.preventDefault();
        updateOrderData();
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
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="text" required defaultValue={idClient} onChange={handleIdClientChange} />
                                                        </div>
                                                    </Form.Group>
                                                    <br />
                                                    <Form.Group controlId="formDiscount">
                                                        <Form.Label className='fw-bold text-dark h6'>Descuento (%)</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control
                                                                type="number"
                                                                min="0"
                                                                max="100"
                                                                onChange={handleDiscountChange}
                                                                value={discount}
                                                                required
                                                            />
                                                        </div>
                                                    </Form.Group>
                                                    <br />
                                                    <Form.Group controlId="formPrice">
                                                        <Form.Label className='fw-bold text-dark h6'>Precio Total (€)</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="number" required defaultValue={price} onChange={handlePriceChange} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formCart">
                                                        <Form.Label className='fw-bold text-dark h6'>Cesta</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control as="textarea" style={{ height: "130px", resize: "none" }} required defaultValue={Object.keys(cart).join(', ')} onChange={handleCartChange} />
                                                        </div>
                                                    </Form.Group>
                                                    <br />
                                                    <Form.Group controlId="formStatus">
                                                        <Form.Label className='fw-bold text-dark h6'>Estado</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="text" required defaultValue={status} onChange={handleStatusChange} />
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


export default OrdersEdit;