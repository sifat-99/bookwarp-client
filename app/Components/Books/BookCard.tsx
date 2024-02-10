import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Swal from "sweetalert2";
import { BsBookmarkStarFill } from "react-icons/bs";

const BookCard = (props: any) => {
  const { _id ,cover, title, writer, price} = props.books;
  const userInfo = useSession();
  const email = userInfo?.data?.user?.email;

  const heandelBookmark = (cover: any, title: any, writer: any, price: any) => {
    const bookMark = { cover, title, writer, price, email };
    if (email) {
      axios
        .post("https://bookwarp-server.vercel.app/bookmark", bookMark)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfully Added to your Bookmark",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };
  return (
    <div>
      <div className="card h-[550px] card-compact bg-slate-200 pt-4 dark:bg-black dark:border shadow-xl p-2">
        <div
          style={{ backgroundImage: `url(${cover})`, backgroundSize: "cover" }}
          className="w-[250px] h-[350px] mx-auto rounded-lg"
        ></div>
        <div className="card-body">
          <div className="flex justify-center items-center">
            <h2 className="text-xl text-black dark:text-white text-center font-semibold">
              {title}
            </h2>
            <button
              onClick={() => heandelBookmark(cover, title, writer, price)}
              className="btn bg-transparent border-none ml-8 absolute right-4 md:right-3 lg:right-12"
            >
              <BsBookmarkStarFill className="text-xl text-yellow-500" />
            </button>
          </div>
          <p className="text-center text-black dark:text-white">{writer}</p>
          <p className="text-center text-black dark:text-white">
            <span className="font-semibold">Price:</span> {price}$
          </p>
          <div className="card-actions flex flex-wrap justify-center">
          <Link href={`allBooks/${_id}`}><button className="btn btn-outline text-black dark:text-white">Details</button></Link>
            <Link
              href={"/exchange"}
              className="btn btn-outline text-black dark:text-white"
            >
              Exchange
            </Link>
            <Link href={`allBooks/buy/${_id}`}><button className="btn btn-outline text-black dark:text-white">Buy</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
