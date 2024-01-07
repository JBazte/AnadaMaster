import React, { useEffect, useState, useCallback } from 'react';
import { Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ClientElement from '../components/ClientElement';
import OrderElement from '../components/OrderElement';
import ProductElement from '../components/ProductElement';

function SelectionCoreReservas() {
    const [data, setData] = useState(null);
    const [selectedValue, setSelectedValue] = useState(1);

    const fetchData = useCallback(async () => {
        let apiUrl = "";
        switch (selectedValue) {
            case "1":
                apiUrl = "http://localhost:3001/api/individualClient";
                break;
            case "2":
                apiUrl = "http://localhost:3001/api/productOrder";
                break;
            case "3":
                apiUrl = "http://localhost:3001/api/product";
                break;
            default:
                apiUrl = "http://localhost:3001/api/individualClient";
                break;
        }
        console.log(selectedValue);
        try {
            const response = await fetch(apiUrl);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error:', error);
        }
    }, [selectedValue]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <>
            <Navbar />
            <section className='vh-100 overflow-hidden' >
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-10 text-black mx-auto">
                            <div className="p-5">
                                <Card className="shadow" style={{ maxHeight: "658px" }}>
                                    <Card.Header className='w-100 m-0 p-0 d-flex justify-content-between'>
                                        <select type="submit" value={selectedValue} className="m-3 w-25 form-select" onChange={handleSelectChange}>
                                            <option value={1}>Clientes</option>
                                            <option value={2}>Pedidos</option>
                                            <option value={3}>Productos</option>
                                        </select>
                                        <button type="submit" className="btn btn-success m-3 w-25">Añadir nuevo</button>
                                    </Card.Header>
                                    <Card.Body className="p-3 d-flex flex-column align-items-center overflow-auto">
                                        {data && selectedValue == 1 &&
                                            data.map((item, index) => (
                                                <ClientElement key={index} data={item} />
                                            ))
                                        }
                                        {data && selectedValue == 2 &&
                                            data.map((item, index) => (
                                                <OrderElement key={index} data={item} />
                                            ))
                                        }
                                        {data && selectedValue == 3 &&
                                            data.map((item, index) => (
                                                <ProductElement key={index} data={item} />
                                            ))
                                        }
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

export default SelectionCoreReservas;