import React from 'react';
import { Button } from 'react-bootstrap';


function Element() {
    return (
        <>
            <div className='m-2 p-2 w-100 border border-1 rounded d-flex justify-content-between row'>
                <div className='col-sm-5 row'>
                    <p className='col-sm-3 m-auto pl-1'>ID</p>
                    <p className='col-sm-9 m-auto p-0'>Nombre</p>
                </div>
                <div className='col-sm-7 row d-flex justify-content-end'>
                    <Button className="btn btn-secondary px-0 col-sm-3">Visualizar</Button>
                    <Button className="btn btn-primary px-0 mx-1 col-sm-3">Modificar</Button>
                    <Button className="btn btn-danger px-0 col-sm-3">Eliminar</Button>
                </div>
            </div>
        </>
    )
}

export default Element;