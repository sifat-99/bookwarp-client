
import Link from 'next/link'
import React from 'react'

const PaymentMessage = (props:any) => {

    console.log(props.params.id)
  

  return (
    <div className='flex text-black gap-8 flex-col items-center justify-center text-3xl h-screen'>
        <h1>Payment successful</h1>

        <Link href="/dashboard" className='btn btn-primary'>
          <p>Go to dashboard</p>
        </Link>
    </div>
  )
}

export default PaymentMessage
