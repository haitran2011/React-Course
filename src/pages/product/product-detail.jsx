import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
  const [product, setProduct] = React.useState(null);
  const params = useParams();
  const productId = params.productId;
  
  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${productId}`)
      .then(json => json.json())
      .then(data => {
        setProduct(data)
      })
  }, [productId])

  // https://jsonplaceholder.typicode.com/albums/1


  if(!product) return null;


  return (
    <div>
      <h2>ProductDetail</h2> <br />
      Title: {product.title}

    </div>
  )
}

export default ProductDetail