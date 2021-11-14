import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [pageNo,setPageNo] = useState(1);
    const size = 10;
    useEffect( () => {
        fetch(`http://localhost:5000/products?page=${pageNo}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                const pageNumber = Math.ceil(data.count / size);
                setPageCount(pageNumber);
            });
    },[pageNo]);

    return {
        products,
        setProducts,
        pageCount,
        setPageCount,
        setPageNo
    };
}

export default useProducts;