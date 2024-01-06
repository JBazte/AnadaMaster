import React, { useState } from 'react';
import { Form, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


function RawMaterialGrape() {
    const [isVisualizationOn, setIsVisualizationOn] = useState(false);
    const [origin, setOrigin] = useState("Ávila");
    const [date, setDate] = useState("2023-04-10");
    const [type, setType] = useState("Blancas");
    const [kilos, setKilos] = useState(23.5);
    const [ripeness, setRipeness] = useState("Industrial");
    const [quality, setQuality] = useState(1);

    const toggleVisualization = () => {
        setIsVisualizationOn(!isVisualizationOn);
    };

    const handleOriginChange = (e) => {
        setOrigin(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleTypeChange = (e) => {
        setType(e.target.value);
    };

    const handleKilosChange = (e) => {
        setKilos(e.target.value);
    };

    const handleRipenessChange = (e) => {
        setRipeness(e.target.value);
    };

    const handleQualityChange = (e) => {
        setQuality(e.target.value);
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
                                        <h3 className="mb-4">Materia Prima (Uva)</h3>
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
                                                    <br />
                                                    <Form.Group controlId="formType">
                                                        <Form.Label className='fw-bold text-dark h6'>Tipo</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" required defaultValue={""} onChange={handleTypeChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" readOnly defaultValue={type} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                    <br />
                                                    <Form.Group controlId="formRipeness">
                                                        <Form.Label className='fw-bold text-dark h6'>Madurez</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" required defaultValue={""} onChange={handleRipenessChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" readOnly defaultValue={ripeness} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                    <br />
                                                </div>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formDate">
                                                        <Form.Label className='fw-bold text-dark h6'>Fecha</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="date" required defaultValue={""} onChange={handleDateChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="date" readOnly defaultValue={date} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                    <br />
                                                    <Form.Group controlId="formWeight">
                                                        <Form.Label className='fw-bold text-dark h6'>Kilos</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="number" min={0} step=".01" required defaultValue={""} onChange={handleKilosChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="number" readOnly defaultValue={kilos} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                    <br />
                                                    <Form.Group controlId="formQuality">
                                                        <Form.Label className='fw-bold text-dark h6'>Calidad</Form.Label>
                                                        <Form.Select type="number" required value={quality} onChange={handleQualityChange} disabled={isVisualizationOn}>
                                                            <option value={1}>1</option>
                                                            <option value={2}>2</option>
                                                            <option value={3}>3</option>
                                                            <option value={4}>4</option>
                                                            <option value={5}>5</option>
                                                        </Form.Select>
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

export default RawMaterialGrape;