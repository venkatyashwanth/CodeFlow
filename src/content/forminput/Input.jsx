import React from 'react'
import "./formstyles.scss";
import Layout from '../../components/layout/Layout';
import ElementOne from './ElementOne';


const Input = () => {
    return (
        <Layout>
            <div className='p-10'>
                This is inner page of input elements
                <ElementOne/>
            </div>
        </Layout>

    )
}

export default Input