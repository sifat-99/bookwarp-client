const ReviewCart = ({ review }) => {
  return (
    <div className="border flex flex-col w-full  p-6 mx-auto divide-y rounded-md dark:divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src={review.image}
              alt=""
              className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
            />
          </div>
          <div>
            <h4 className="font-bold">{review.name}</h4>
            <span className="text-xs dark:text-gray-400">2 days ago</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 dark:text-yellow-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="yellow"
            className="w-8 h-8 dark:text-yellow-500"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <span className="text-xl font-bold">4.5</span>
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm dark:text-gray-400">
        <p>{review.review}</p>
      </div>
    </div>
  );
};

export default ReviewCart;
