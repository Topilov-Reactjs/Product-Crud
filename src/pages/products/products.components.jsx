import React, { useState } from 'react';
import Navbar from './../../components/navbar/navbar.component';
import "./products.styles.scss";
import { useEffect } from 'react';
import axios from 'axios';
import Product from './../../components/product/product.component';

function ProductsPage() {

    const [products, setProducts] = useState(null)

    useEffect(() => {
        axios.get(
            "https://profitmodel-server.herokuapp.com/api/product",
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        ).then(response => {
            setProducts(response.data.data)
        })
            .catch(error => {
                console.log(error.message)
            });
    }, [])

    return (
        <div>
            <Navbar loggedIn={true} />
            <div className="products">
                {
                    products ?
                    products.forEach(element => {
                        <Product productData={element} />;
                        console.log(element)
                    }) : null
                }
            </div>
        </div>
    );
}

export default ProductsPage;