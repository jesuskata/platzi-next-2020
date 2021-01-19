// Dependencies
import React from 'react';

// NextJS
import { useRouter } from 'next/router';

const ProductItem = () => {
  const { query: { productId } } = useRouter();
  return (
    <div>
      {`Esta es la página del producto: ${productId}`}
    </div>
  );
};

export default ProductItem;
