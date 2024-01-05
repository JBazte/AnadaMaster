import React from 'react';
import { Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Element from '../components/Element';

function Selection() {
    return (
        <>
            <Navbar />
            <section className='vh-100 overflow-hidden' >
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-6 text-black mx-auto">
                            <div className="p-5">
                                <Card className="shadow" style={{ maxHeight: "658px" }}>
                                    <Card.Header className='w-100 m-0 p-0 d-flex justify-content-between'>
                                        <select type="submit" className="m-3 w-25 form-select">
                                            <option selected value={1}>Clientes</option>
                                            <option value={2}>Pedidos</option>
                                            <option value={3}>Productos</option>
                                        </select>
                                        <button type="submit" className="btn btn-primary m-3 w-25">Añadir nuevo</button>
                                    </Card.Header>
                                    <Card.Body className="p-3 d-flex flex-column align-items-center overflow-auto">
                                        <Element />
                                        <Element />
                                        <Element />
                                        <Element />
                                        <Element />
                                        <Element />
                                        <Element />
                                        <Element />
                                        <Element />
                                        <Element />
                                        <Element />
                                        <Element />
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <div className='sticky-bottom'>
                <Footer />
            </div>
        </>
    )
}

export default Selection;