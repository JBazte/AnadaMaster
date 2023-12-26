import React from 'react';
import { useState } from 'react';
import { Form, Card, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';

const serverURL = process.env.REACT_APP_BACKEND_URL;

function Login() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleCloseAlert = () => {
        setErrorMessage('');
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${serverURL}/auth/login/member`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            const { token } = data;
            // Almacenar el token en el encabezado de las solicitudes
            /** 
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };
            */
            document.cookie = 'user-token=' + token + '; path=/';
            navigate("/");
            // Aquí puedes realizar acciones con la respuesta del servidor
            console.log(data);
        } catch (error) {
            // Aquí puedes manejar el error de la solicitud
            setErrorMessage("Nombre de usuario o contraseña incorrectos");
            console.error(error);
        }
    };

    return (
        <div className="d-flex flex-column vh-100 overflow-hidden">
            <section className="flex-grow-1 d-flex align-items-center justify-content-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 text-black mx-auto">
                            <div className="p-5">
                                <Card className="shadow custom-form">
                                    <Card.Body className="py-3 d-flex flex-column align-items-center">
                                        <h3 className="mb-4">REGISTRO</h3>
                                        <Form className='w-100 px-2' onSubmit={handleLogin}>
                                            <Form.Group controlId="formEmail">
                                                <Form.Label className='fw-bold text-dark h6'>Correo Electrónico</Form.Label>
                                                <Form.Control type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </Form.Group>
                                            <br />
                                            <Form.Group controlId="formPassword">
                                                <Form.Label className='fw-bold text-dark h6'>Contraseña</Form.Label>
                                                <Form.Control type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                                            </Form.Group>
                                            {errorMessage && (
                                                <Alert variant="danger" className='mt-3' onClose={handleCloseAlert} dismissible>
                                                    <span>{errorMessage}</span>
                                                </Alert>
                                            )}
                                            <br />
                                            <button type="submit" className="btn btn-primary mt-3 w-100">Confirmar</button>
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


export default Login;