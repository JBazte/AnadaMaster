import React, { useState, useEffect } from 'react';
import { Form, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useParams, Link, useNavigate } from 'react-router-dom';

function EmployeeEdit() {
    const { id } = useParams();
    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [address, setAddress] = useState("");
    const [domicile, setDomicile] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [phone, setPhone] = useState("");
    const [contact, setContact] = useState("");
    const [ssn, setSsn] = useState("");
    const [nif, setNif] = useState("");
    const [category, setCategory] = useState("");
    const [admissionDate, setAdmissionDate] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [children, setChildren] = useState();

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

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

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const token = getCookie("user-token");
            const headers = { 'Authorization': `Bearer ${token}` };
            const response = await fetch(`https://anadamaster-api.onrender.com/api/employee/${id}`, { headers });
            const jsonData = await response.json();
            const { name, surname, address, birthdate, phoneNumber, contact, socialSecurityNumber, domicile, nif, category, entryDate, maritalStatus, numOfChildren } = jsonData;
            setName(name);
            setSurname(surname);
            setAddress(address);
            setDomicile(address);
            setBirthDate(birthdate.split("T")[0]);
            setPhone(phoneNumber);
            setContact(contact);
            setSsn(socialSecurityNumber);
            setNif(nif);
            setCategory(category);
            setAdmissionDate(entryDate.split("T")[0]);
            setMaritalStatus(maritalStatus);
            setChildren(numOfChildren);
            console.log(jsonData);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const updateEmployeeData = async () => {
        try {
            const token = getCookie("user-token");
            const headers = { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' };
            const updatedData = {
                name: name,
                surname: surname,
                address: address,
                birthdate: birthDate,
                phoneNumber: phone,
                contact: contact,
                socialSecurityNumber: ssn,
                nif: nif,
                category: category,
                entryDate: admissionDate,
                maritalStatus: maritalStatus,
                numOfChildren: children
            };
            const response = await fetch(`https://anadamaster-api.onrender.com/api/employee/${id}`, {
                method: 'PUT',
                headers,
                body: JSON.stringify(updatedData)
            });
            const jsonData = await response.json();
            console.log(jsonData);
            navigate(`/employee/${id}`)
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleConfirmClick = (e) => {
        e.preventDefault();
        updateEmployeeData();
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
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="text" required defaultValue={name} onChange={handleNameChange} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formSurname">
                                                        <Form.Label className='fw-bold text-dark h6'>Apellidos</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="text" required defaultValue={surname} onChange={handleSurnameChange} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formAddress">
                                                        <Form.Label className='fw-bold text-dark h6'>Dirección</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="text" required defaultValue={address} onChange={handleAddressChange} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formDOB">
                                                        <Form.Label className='fw-bold text-dark h6'>Fecha de nacimiento</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="date" required defaultValue={birthDate} onChange={handleBirthDateChange} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formPhoneNum">
                                                        <Form.Label className='fw-bold text-dark h6'>Teléfono</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="text" required defaultValue={phone} onChange={handlePhoneChange} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formContact">
                                                        <Form.Label className='fw-bold text-dark h6'>Contacto</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="text" required defaultValue={contact} onChange={handleContactChange} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-6 p-2'>
                                                    <Form.Group controlId="formSSNumber">
                                                        <Form.Label className='fw-bold text-dark h6'>Seguridad social</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="text" required defaultValue={ssn} onChange={handleSsnChange} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-6 p-2'>
                                                    <Form.Group controlId="formNif">
                                                        <Form.Label className='fw-bold text-dark h6'>NIF</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="text" required defaultValue={nif} onChange={handleNifChange} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formEmploymentStatus">
                                                        <Form.Label className='fw-bold text-dark h6'>Categoría laboral</Form.Label>
                                                        <Form.Select className='custom-select' type="text" value={category} required onChange={handleCategoryChange}>
                                                            <option value={"Grupo1"}>Grupo 1: Puesto de responsabilidad</option>
                                                            <option value={"Grupo2"}>Grupo 2: Puesto intermedio</option>
                                                            <option value={"Grupo3"}>Grupo 3: Puesto sin responsabilidad</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formEntryDate">
                                                        <Form.Label className='fw-bold text-dark h6'>Fecha de ingreso</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="date" required defaultValue={admissionDate} onChange={handleAdmissionDateChange} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formNumberChildren">
                                                        <Form.Label className='fw-bold text-dark h6'>Número de hijos</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="number" min={0} step={1} required defaultValue={children} onChange={handleChildrenChange} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formMaritalStatus">
                                                        <Form.Label className='fw-bold text-dark h6'>Estado civil</Form.Label>
                                                        <Form.Select className={`custom-select`} value={maritalStatus} type="text" onChange={handleMaritalStatusChange} required>
                                                            <option value={"Soltero"}>Soltero</option>
                                                            <option value={"Casado"}>Casado</option>
                                                            <option value={"Divorciado"}>Divorciado</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='text-end justify-content-end'>
                                                <Link to={`/corebodega/list`}>
                                                    <button className="btn btn-danger m-3 w-25">Cancelar</button>
                                                </Link>
                                                <button type="submit" className="btn btn-primary w-25" onClick={handleConfirmClick}>Confirmar</button>
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

export default EmployeeEdit;