import React, { useState } from 'react';
import { Form, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Employee() {
    const [isVisualizationOn, setIsVisualizationOn] = useState(false);
    const [name, setName] = useState("Jane");
    const [surname, setSurname] = useState("Doe");
    const [address, setAddress] = useState("1234 Elm Street, Springfield");
    const [birthDate, setBirthDate] = useState("1990-01-01");
    const [phone, setPhone] = useState("+1 (555) 123-4567");
    const [contact, setContact] = useState("jane.doe@gmail.com");
    const [ssn, setSsn] = useState("123-45-6789");
    const [nif, setNif] = useState("12345678Z");
    const [category, setCategory] = useState("Grupo1");
    const [admissionDate, setAdmissionDate] = useState("2023-04-10");
    const [maritalStatus, setMaritalStatus] = useState("Soltero");
    const [children, setChildren] = useState(3);

    const toggleVisualization = () => {
        setIsVisualizationOn(!isVisualizationOn);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSurnameChange = (e) => {
        setSurname(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleBirthDateChange = (e) => {
        setBirthDate(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleContactChange = (e) => {
        setContact(e.target.value);
    };

    const handleSsnChange = (e) => {
        setSsn(e.target.value);
    };

    const handleNifChange = (e) => {
        setNif(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleAdmissionDateChange = (e) => {
        setAdmissionDate(e.target.value);
    };

    const handleMaritalStatusChange = (e) => {
        setMaritalStatus(e.target.value);
    };

    const handleChildrenChange = (e) => {
        setChildren(e.target.value);
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
                                        <h3 className="mb-4">Empleado</h3>
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
                                                    <Form.Group controlId="formSurname">
                                                        <Form.Label className='fw-bold text-dark h6'>Apellidos</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" required defaultValue={""} onChange={handleSurnameChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" readOnly defaultValue={surname} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formAddress">
                                                        <Form.Label className='fw-bold text-dark h6'>Dirección</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" required defaultValue={""} onChange={handleAddressChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" readOnly defaultValue={address} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formDOB">
                                                        <Form.Label className='fw-bold text-dark h6'>Fecha de nacimiento</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="date" required defaultValue={""} onChange={handleBirthDateChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="date" readOnly defaultValue={birthDate} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formPhoneNum">
                                                        <Form.Label className='fw-bold text-dark h6'>Teléfono</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" required defaultValue={""} onChange={handlePhoneChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" readOnly defaultValue={phone} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formContact">
                                                        <Form.Label className='fw-bold text-dark h6'>Contacto</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" required defaultValue={""} onChange={handleContactChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" readOnly defaultValue={contact} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-6 p-2'>
                                                    <Form.Group controlId="formSSNumber">
                                                        <Form.Label className='fw-bold text-dark h6'>Seguridad social</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" required defaultValue={""} onChange={handleSsnChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" readOnly defaultValue={ssn} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-6 p-2'>
                                                    <Form.Group controlId="formNif">
                                                        <Form.Label className='fw-bold text-dark h6'>NIF</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" required defaultValue={""} onChange={handleNifChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="text" readOnly defaultValue={nif} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formEmploymentStatus">
                                                        <Form.Label className='fw-bold text-dark h6'>Categoría laboral</Form.Label>
                                                        <Form.Select className='custom-select' type="text" value={category} required onChange={handleCategoryChange} disabled={isVisualizationOn}>
                                                            <option value={"Grupo1"}>Grupo 1: Puesto de responsabilidad</option>
                                                            <option value={"Grupo2"}>Grupo 2: Puesto intermedio</option>
                                                            <option value={"Grupo3"}>Grupo 3: Puesto sin responsabilidad</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formEntryDate">
                                                        <Form.Label className='fw-bold text-dark h6'>Fecha de ingreso</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="date" required defaultValue={""} onChange={handleAdmissionDateChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="date" readOnly defaultValue={admissionDate} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formNumberChildren">
                                                        <Form.Label className='fw-bold text-dark h6'>Número de hijos</Form.Label>
                                                        <div className={`d-flex flex-row ${!isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="number" min={0} step={1} required defaultValue={""} onChange={handleChildrenChange} />
                                                        </div>
                                                        <div className={`d-flex flex-row ${isVisualizationOn ? '' : 'd-none'}`}>
                                                            <Form.Control type="number" readOnly defaultValue={children} disabled={isVisualizationOn} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formMaritalStatus">
                                                        <Form.Label className='fw-bold text-dark h6'>Estado civil</Form.Label>
                                                        <Form.Select className={`custom-select`} value={maritalStatus} type="text" onChange={handleMaritalStatusChange} required disabled={isVisualizationOn}>
                                                            <option value={"Soltero"}>Soltero</option>
                                                            <option value={"Casado"}>Casado</option>
                                                            <option value={"Divorciado"}>Divorciado</option>
                                                        </Form.Select>
                                                    </Form.Group>
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

export default Employee;