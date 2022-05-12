import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const { serviceId } = useParams();
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/home#services')
    }
    return (
        <div className='text-center'>
            <button onClick={navigateHome}>Back</button>
            <h2>Welcome to detail: {serviceId}</h2>
            <Link to='/checkout'>
                <button className='btn btn-primary'>Proceed Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;