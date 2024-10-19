import React from 'react'
import { useParams } from 'react-router-dom';

import { invoiceData } from '../../../mocks/dataInvoice';

function InvoiceDetail() {
  const params = useParams();
  const invoiceId = params.invoiceId;

  const invoiceItem = React.useMemo(() => {
    if(!invoiceId) return null;
    return invoiceData.find(item => item.number.toString() === invoiceId);
  }, [invoiceId])

  return (
    <div>
      {invoiceItem ? (
        <>
          Total Due: {invoiceItem.amount} <br />
          {invoiceItem.name}: {invoiceItem.number}
        </>
      ) : (
        <>
          Not found invoice
        </>
      )}
    </div>
  )
}

export default InvoiceDetail