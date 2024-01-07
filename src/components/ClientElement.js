import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ClientElement({ data }) {
    const { _id, name, status } = data;
    const displayText = name !== undefined ? name : status;

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/individualClient/${_id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.ok) {
                console.log('Element deleted successfully');
                window.location.reload(false);
            } else {
                console.error('Failed to delete element');
            }
        } catch (error) {
            console.error('Error deleting element:', error);
        }
    };

    return (
        <>
            <div className='m-2 p-2 w-100 border border-1 rounded d-flex justify-content-between row'>
                <div className='col-sm-5 row'>
                    <p className='col-sm-9 m-auto pl-1'>{_id}</p>
                    <p className='col-sm-3 m-auto p-0'>{displayText}</p>
                </div>
                <div className='col-sm-7 row d-flex justify-content-end'>
                    <Link to={`/client/${_id}`} className="px-0 col-sm-3">
                        <Button className="btn btn-secondary w-100">Visualizar</Button>
                    </Link>
                    <Link to={`/client/${_id}/edit`} className="px-0 mx-1 col-sm-3">
                        <Button className="btn btn-primary w-100">Modificar</Button>
                    </Link>
                    <Link to="#" className="px-0 col-sm-3">
                        <Button className="btn btn-danger w-100" onClick={handleDelete}>Eliminar</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ClientElement;