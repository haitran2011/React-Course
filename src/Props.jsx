import React from 'react'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

/*
destructuring
abc= {
  firstName: 'tony',
  lastName: 'nguyen',
}
access property
const firstName = abc.firstName // es5
const { firstName } = abc; // es6

// rename property of object
const { 
  firstName: _name
} = abc;

## a few mention when render component in jsx
- must have close tag 
- name is PascalCase (Product, ProductDetail) 

## how to delete property in object
- delete operator: delete abc.firstName // es5
- rest operator: const { firstName, ...rest } = abc;
*/

function Props({ 
  firstName,
  isLoading = true, 
  address: {
    country: {
      code
    }
  },
  component: Component,
  component2,
  title,
  children,
  ...restProps
}) {
  const loadingSelector = useSelector(state => state.app.isLoading);
  console.log('Props ----------:', loadingSelector)
  console.log('Props: ', {
    restProps: restProps
  })
  return (
    <div>
      Props <br />
      {firstName} <br />
      Code: {code} <br/>
      Pass name component: {<Component />} <br/>
      Pass direct component: {component2} <br/>
      Demo spread operator: {title} <br/>
      Demo children props: {children}

    </div>
  )
}

export default Props

Props.defaultProps = {
  isLoading: true,
}

Props.propTypes = {
  firstName: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  address: PropTypes.shape({
    city: PropTypes.string,
    district: PropTypes.string,
  })
}