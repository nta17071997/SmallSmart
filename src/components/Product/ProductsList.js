import React from 'react';
import ProductCard from './ProductCard';

const ProductsList = ({ data }) => {
  return (
    <>
      {data &&
        data.map((item, index) => <ProductCard key={index + 1} item={item} />)}
    </>
  );
};

export default ProductsList;
