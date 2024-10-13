import React from 'react'
import Button from '../../components/button';
import { useLocation, useNavigate } from 'react-router-dom';

function Product() {
  const location = useLocation();

  const queryString = new URLSearchParams(location.search);
  const queryPage = queryString.get('page');
  const queryLimit = queryString.get('limit');

  const [page, setPage] = React.useState(Number(queryPage) || 1);
  const [limit, setLimit] = React.useState(Number(queryLimit) || 3);
  const [products, setProducts] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?_limit=${limit}&_page=${page}`)
      .then(json => json.json())
      .then(data => {
        setProducts(data)
      });
      navigate(`/product?limit=${limit}&page=${page}`)
  }, [page, limit])

  function onNextPage() {
    setPage(prevState => prevState + 1); // 2
  }

  function onPrevPage() {
    setPage(prevState => prevState - 1);
  }

  function onLimitPage(e) {
    setLimit(e.target.value)
  }

  return (
    <>
      <h2>List Products</h2>
      Prev: <Button text="Prev" onClick={onPrevPage} /> 
      Next: <Button text="Next" onClick={onNextPage} /><br /><br />
      Limit: 
      <select value={limit} onChange={onLimitPage}>
        <option value={3}>3</option>
        <option value={5}>5</option>
        <option value={7}>7</option>
      </select>
      {products.map(item => (
        <div key={item.id}>
            Id: {item.id} <br />
            Title: {item.title} <br />
            <Button text="Go to detail" onClick={() => navigate(`/product/${item.id}`)} />
        </div>
      ))}
    </>
  )
}

export default Product