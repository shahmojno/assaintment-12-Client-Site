import { useEffect, useState } from "react";

const ProductDetails = productId => {
    const [product, setProduct] = useState({});
    console.log(product);

    useEffect(() => {
        const url = `https://secure-crag-00162.herokuapp.com/tools/${productId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data));

    }, [productId]);
    return [product]
}





export default ProductDetails;