import React, { useState } from 'react';
import { Form, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


function RawMaterialBarrel() {
    const [isVisualizationOn, setIsVisualizationOn] = useState(false);
    const [origin, setOrigin] = useState("Ávila");
    const [number, setNumber] = useState("200");

    const toggleVisualization = () => {
        setIsVisualizationOn(!isVisualizationOn);
    };

    const handleOriginChange = (e) => {
        setOrigin(e.target.value);
    };

    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    };
    return (
        <>
            <Navbar />
            <section className='vh-100 overflow-hidden'>
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-6 text-black mx-auto">
                            <div className="p-5">
                                <Card className="shadow custom-form">
                                    <Card.Body className="py-3 d-flex flex-column align-items-center">
                                        <h3 className="mb-4">Materia Prima (Barril)</h3>
                                        <Form className='w-100 px-2'>
                                            <div className='d-flex'>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formOrigin">
                                                        <Form.Label className='fw-bold text-dark h6'>Origen</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" required defaultValue={""} onChange={handleOriginChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" readOnly defaultValue={origin} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formNumber">
                                                        <Form.Label className='fw-bold text-dark h6'>Número</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="number" required defaultValue={""} onChange={handleNumberChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="number" readOnly defaultValue={number} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                    <br />
                                                </div>
                                            </div>
                                            <div className='text-end justify-content-end'>
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary w-25"
                                                    onClick={toggleVisualization}
                                                >
                                                    {isVisualizationOn ? 'Editar' : 'Visualizar'}
                                                </button>
                                                <button type="submit" className="btn btn-danger m-3 w-25">Cancelar</button>
                                                <button type="submit" className="btn btn-primary w-25">Confirmar</button>
                                            </div>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='sticky-bottom'>
                <Footer />
            </div>
        </>
    )
}

export default RawMaterialBarrel;