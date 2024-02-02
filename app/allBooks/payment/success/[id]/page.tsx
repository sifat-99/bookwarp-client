import Link from "next/link";


const Payment = () => {
    return (
        <div className="flex justify-center items-center text-black dark:text-white">

            <h1>Payment Successful</h1>
            <Link href="/">
                <button className="btn bg-black text-white dark:bg-white dark:text-black mt-4">
                    Go to Home
                </button>  
            </Link>
        </div>
    );
};

export default Payment;