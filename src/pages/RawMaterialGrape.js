import React, { useState, useEffect } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useParams, Link, useNavigate } from 'react-router-dom';

function RawMaterialGrape() {
    const { id } = useParams();
    let navigate = useNavigate();

    const [grapeOrigin, setGrapeOrigin] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [kilos, setKilos] = useState();
    const [ripeness, setRipeness] = useState("");
    const [quality, setQuality] = useState();

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

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const token = getCookie("user-token");
            const headers = { 'Authorization': `Bearer ${token}` };
            const response = await fetch(`https://anadamaster-api.onrender.com/api/grape/${id}`, { headers });
            const jsonData = await response.json();
            const { grapeOrigin, date, weight, type, ripeness, quality } = jsonData;
            console.log(jsonData);
            setGrapeOrigin(grapeOrigin);
            setDate(date.split("T")[0]);
            setType(type);
            setKilos(weight);
            setRipeness(ripeness);
            setQuality(quality);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDelete = async (event) => {
        event.preventDefault();

        try {
            const token = getCookie("user-token");
            const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` };
            const response = await fetch(`https://anadamaster-api.onrender.com/api/grape/${id}`, {
                method: 'DELETE',
                headers: headers
            });

            if (response.ok) {
                console.log('Element deleted successfully');
                navigate("/corebodega/list");
            } else {
                console.error('Failed to delete element');
            }
        } catch (error) {
            console.error('Error deleting element:', error);
        }
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
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="text" readOnly defaultValue={grapeOrigin} disabled />
                                                        </div>
                                                    </Form.Group>
                                                    <br />
                                                    <Form.Group controlId="formType">
                                                        <Form.Label className='fw-bold text-dark h6'>Tipo</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control type="text" readOnly defaultValue={type} disabled />
                                                        </div>
                                                    </Form.Group>
                                                    <br />
                                                    <Form.Group controlId="formRipeness">
                                                        <Form.Label className='fw-bold text-dark h6'>Madurez</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control type="text" readOnly defaultValue={ripeness} disabled />
                                                        </div>
                                                    </Form.Group>
                                                    <br />
                                                </div>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formDate">
                                                        <Form.Label className='fw-bold text-dark h6'>Fecha</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control type="date" readOnly defaultValue={date} disabled />
                                                        </div>
                                                    </Form.Group>
                                                    <br />
                                                    <Form.Group controlId="formWeight">
                                                        <Form.Label className='fw-bold text-dark h6'>Kilos</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control type="number" readOnly defaultValue={kilos} disabled />
                                                        </div>
                                                    </Form.Group>
                                                    <br />
                                                    <Form.Group controlId="formQuality">
                                                        <Form.Label className='fw-bold text-dark h6'>Calidad</Form.Label>
                                                        <Form.Select type="number" required value={quality} disabled>
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
                                                <button className="btn btn-danger m-3 w-25" onClick={(event) => handleDelete(event)}>Eliminar</button>
                                                <Link to={`/rawmaterial/grape/${id}/edit`}>
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
            </section>
            <div className='sticky-bottom'>
                <Footer />
            </div>
        </>
    )
}

export default RawMaterialGrape;