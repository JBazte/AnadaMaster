import React, { useState, useEffect } from 'react';
import { Form, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useParams, Link, useNavigate } from 'react-router-dom';

function RawMaterialBarrelEdit() {
    const { id } = useParams();
    let navigate = useNavigate();

    const [barrelOrigin, setBarrelOrigin] = useState("");
    const [number, setNumber] = useState("");

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

    const handleBarrelOriginChange = (e) => {
        setBarrelOrigin(e.target.value);
    };

    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const updateBarrelData = async () => {
        try {
            const token = getCookie("user-token");
            const headers = { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' };
            const response = await fetch(`https://anadamaster-api.onrender.com/api/barrel/${id}`, {
                method: 'PUT',
                headers: headers,
                body: JSON.stringify({
                    barrelOrigin: barrelOrigin,
                    quantity: number
                })
            });
            const jsonData = await response.json();
            console.log(jsonData);
            navigate(`/rawmaterial/barrel/${id}`)
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleConfirmClick = (e) => {
        e.preventDefault();
        updateBarrelData();
    };

    const fetchData = async () => {
        try {
            const token = getCookie("user-token");
            const headers = { 'Authorization': `Bearer ${token}` };
            const response = await fetch(`https://anadamaster-api.onrender.com/api/barrel/${id}`, { headers });
            const jsonData = await response.json();
            const { barrelOrigin, quantity } = jsonData;
            console.log(jsonData);
            setBarrelOrigin(barrelOrigin);
            setNumber(quantity);
        } catch (error) {
            console.error('Error:', error);
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
                                        <h3 className="mb-4">Materia Prima (Barril)</h3>
                                        <Form className='w-100 px-2'>
                                            <div className='d-flex'>
                                                <div className='flex-column col-sm-8 p-2'>
                                                    <Form.Group controlId="formOrigin">
                                                        <Form.Label className='fw-bold text-dark h6'>Origen</Form.Label>
                                                        <div className={`d-flex flex-row `}>
                                                            <Form.Control type="text" required defaultValue={barrelOrigin} onChange={handleBarrelOriginChange} />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className='flex-column col-sm-4 p-2'>
                                                    <Form.Group controlId="formNumber">
                                                        <Form.Label className='fw-bold text-dark h6'>Número</Form.Label>
                                                        <div className={`d-flex flex-row`}>
                                                            <Form.Control type="number" required defaultValue={number} onChange={handleNumberChange} />
                                                        </div>
                                                    </Form.Group>
                                                    <br />
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

export default RawMaterialBarrelEdit;