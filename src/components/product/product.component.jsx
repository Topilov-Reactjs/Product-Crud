import React from 'react';
import "./product.styles.scss"

function Product({productData}) {
    return (
        <div className='product'>
            {console.log(productData)}
        </div>
    );
}

export default Product;