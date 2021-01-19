// Dependencies
import React, { useState, useEffect } from 'react';

// NextJS
import { useRouter } from 'next/router';

const ProductItem = () => {
  const [product, setProduct] = useState([]);
  const { query: { id } } = useRouter();

  useEffect(() => {
    if (id) {
      window.fetch(`/api/avo/${id}`)
        .then(response => response.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  return (
    <div>
      {`Esta es la página del producto: ${product?.name}`}
    </div>
  );
};

export default ProductItem;
