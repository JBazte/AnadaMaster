import React, { useState, useEffect } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import { useParams, useNavigate, Link } from 'react-router-dom';


function Orders() {
    const { id } = useParams();
    let navigate = useNavigate();

    const [discount, setDiscount] = useState();
    const [idClient, setIdClient] = useState("");
    const [price, setPrice] = useState();
    const [cart, setCart] = useState("");
    const [status, setStatus] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://anadamaster-api.onrender.com/api/productOrder/${id}`);
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

    const handleDelete = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`https://anadamaster-api.onrender.com/api/productOrder/${id}`, {
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

    const handlePrintFactura = () => {
        const screenshot = document.documentElement.cloneNode(true);
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
                <head>
                    <title>Factura</title>
                </head>
                <body>
                    ${screenshot.outerHTML}
                </body>
            </html>
        `);
        printWindow.document.body.appendChild(screenshot);

        printWindow.print();
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
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control type="text" readOnly defaultValue={idClient} disabled />
                                                        </div>
                                                    </Form.Group>
                                                    <br />
                                                    <Form.Group controlId="formDiscount">
                                                        <Form.Label className='fw-bold text-dark h6'>Descuento (%)</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control
                                                                type="number"
                                                                min="0"
                                                                max="100"
                                                                value={discount}
                                                                disabled
                                                            />
                                                        </div>
                                                    </Form.Group>
                                                    <br />
                                                    <Form.Group controlId="formPrice">
                                                        <Form.Label className='fw-bold text-dark h6'>Precio Total</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control type="number" readOnly defaultValue={price} disabled />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formCart">
                                                        <Form.Label className='fw-bold text-dark h6'>Cesta</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control as="textarea" style={{ height: "130px", resize: "none" }} readOnly defaultValue={Object.keys(cart).join(', ')} disabled />
                                                        </div>
                                                    </Form.Group>
                                                    <br />
                                                    <Form.Group controlId="formStatus">
                                                        <Form.Label className='fw-bold text-dark h6'>Estado</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="text" readOnly defaultValue={status} disabled />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='text-center justify-content-center'>
                                                <button className="btn btn-secondary m-3 w-25" onClick={handlePrintFactura}>Imprimir Factura</button>
                                                <button className="btn btn-danger m-3 w-25" onClick={(event) => handleDelete(event)}>Eliminar</button>
                                                <Link to={`/order/${id}/edit`}>
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


export default Orders;