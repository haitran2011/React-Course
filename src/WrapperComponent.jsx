import React from 'react';

function Product() {
  return (
    <div>This is Product page</div>
  )
}

function Home() {
  return (
    <div>This is Home page</div>
  )
}

function ParentComponent({ children }) {
  console.log('parent component')
  return (
    <>{children}</>
  )
}

function WrapperComponent() {
  // const [isLogin, setIsLogin] = React.useState(true);
  return (
    <div>
      <h1>WrapperComponent</h1>
      <ParentComponent>
        <Product />
      </ParentComponent>
      <ParentComponent>
        <Home />
      </ParentComponent>

    </div>
  )
}

export default WrapperComponent