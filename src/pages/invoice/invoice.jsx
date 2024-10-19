import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { invoiceData } from '../../mocks/dataInvoice';

function Invoice() {
  const navigate = useNavigate();

  function goToDetail(number) {
    navigate(`/invoice/${number}`)
  }

  return (
    <div>
      <div>
        <h1>Invoice</h1>
        <div className='invoice_container'>
          <ul className="invoice_list">
            {invoiceData.map(invoice => (
              <li key={invoice.number} onClick={() => goToDetail(invoice.number)}>{invoice.name}</li>
            ))}
          </ul>
          <div>
            <Outlet />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Invoice