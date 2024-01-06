import React, { useState } from 'react';
import { Form, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'


function Products() {
    const [isVisualizationOn, setIsVisualizationOn] = useState(false);
    const [name, setName] = useState("vino_tinto");
    const [format, setFormat] = useState("Botella");
    const [price, setPrice] = useState(1000);
    const [description, setDescription] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod mi at urna pretium bibendum. Praesent eget pretium ipsum. Sed ipsum risus, congue eu eros ac, lacinia sagittis purus. Curabitur non lacinia lectus, sit amet pretium quam. Praesent vitae eleifend justo. Nam efficitur lacinia mollis. Sed scelerisque risus in turpis dignissim, sed rhoncus mi suscipit. Sed justo turpis, tincidunt quis odio vel, interdum ornare purus. Nunc ac dui sit amet nisl cursus blandit vel eu metus. Mauris id consequat odio, ac pulvinar leo. Quisque vehicula rhoncus vehicula. Fusce consequat metus vel imperdiet pharetra. Nulla condimentum, metus ac imperdiet rutrum, erat.");
    const [harvest, setHarvest] = useState(2023);
    const [quantity, setQuantity] = useState(100);

    const toggleVisualization = () => {
        setIsVisualizationOn(!isVisualizationOn);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleFormatChange = (e) => {
        setFormat(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleHarvestChange = (e) => {
        setHarvest(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
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
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" required defaultValue={""} onChange={handleNameChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" readOnly defaultValue={name} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formFormat">
                                                        <Form.Label className='fw-bold text-dark h6'>Formato</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" required defaultValue={""} onChange={handleFormatChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" readOnly defaultValue={format} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className={`flex-column col-sm-4 p-2 ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                    <Form.Group controlId="formPrice">
                                                        <Form.Label className='fw-bold text-dark h6'>Precio (€)</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="number" required defaultValue={""} onChange={handlePriceChange} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className={`flex-column col-sm-2 p-2 ${isVisualizationOn ? '' : 'd-none'}`}>
                                                    <Form.Group controlId="formPrice">
                                                        <Form.Label className='fw-bold text-dark h6'>Precio (€)</Form.Label>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="number" readOnly defaultValue={price} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className={`flex-column col-sm-2 p-2 ${isVisualizationOn ? '' : 'd-none'}`}>
                                                    <Form.Group controlId="formPrice">
                                                        <Form.Label className='fw-bold text-dark h6'>Precio ($)</Form.Label>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="number" readOnly defaultValue={price} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formDescription">
                                                        <Form.Label className='fw-bold text-dark h6'>Descripción</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control as="textarea" rows="1" required defaultValue={""} onChange={handleDescriptionChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control as="textarea" rows="1" readOnly defaultValue={description} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formHarvest">
                                                        <Form.Label className='fw-bold text-dark h6'>Cosecha</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="number" required defaultValue={""} onChange={handleHarvestChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="number" readOnly defaultValue={harvest} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formQuantity">
                                                        <Form.Label className='fw-bold text-dark h6'>Cantidad</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="number" required defaultValue={""} onChange={handleQuantityChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="number" readOnly defaultValue={quantity} disabled={isVisualizationOn} />
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
            </section >
            <footer className='sticky-bottom'>
                <Footer />
            </footer>
        </div >
    );
};


export default Products;