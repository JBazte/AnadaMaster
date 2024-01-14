import React, { useEffect, useState, useCallback } from 'react';
import { Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import EmployeeElement from '../components/EmployeeElement';
import RawMaterialGrapeElement from '../components/RawMaterialGrapeElement';
import RawMaterialBarrelElement from '../components/RawMaterialBarrelElement';

function SelectionCoreBodegas() {
    const [data, setData] = useState(null);
    const [selectedValue, setSelectedValue] = useState(1);

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

    const fetchData = useCallback(async () => {
        let apiUrl = "";
        switch (selectedValue) {
            case "1":
                apiUrl = "https://anadamaster-api.onrender.com/api/employee";
                break;
            case "2":
                apiUrl = "https://anadamaster-api.onrender.com/api/grape";
                break;
            case "3":
                apiUrl = "https://anadamaster-api.onrender.com/api/barrel";
                break;
            default:
                apiUrl = "https://anadamaster-api.onrender.com/api/employee";
                break;
        }
        try {
            const token = getCookie("user-token");
            const headers = { 'Authorization': `Bearer ${token}` };
            const response = await fetch(apiUrl, { headers });
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
                                            <option value={1}>Empleados</option>
                                            <option value={2}>Materia Prima (Uva)</option>
                                            <option value={3}>Materia Prima (Barril)</option>
                                        </select>
                                        <button type="submit" className="btn btn-success m-3 w-25">Añadir nuevo</button>
                                    </Card.Header>
                                    <Card.Body className="p-3 d-flex flex-column align-items-center overflow-auto">
                                        {data && selectedValue == 1 &&
                                            data.map((item, index) => (
                                                <EmployeeElement key={index} data={item} />
                                            ))
                                        }
                                        {data && selectedValue == 2 &&
                                            data.map((item, index) => (
                                                <RawMaterialGrapeElement key={index} data={item} />
                                            ))
                                        }
                                        {data && selectedValue == 3 &&
                                            data.map((item, index) => (
                                                <RawMaterialBarrelElement key={index} data={item} />
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

export default SelectionCoreBodegas;