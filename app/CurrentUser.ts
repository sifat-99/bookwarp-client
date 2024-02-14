// "use client";

// import axios from "axios";
// import { useSession } from "next-auth/react";
// import { useEffect, useState } from "react";

// function CurrentUser() {
//   const [users, setUsers] = useState({});
//   const session = useSession();

//   const email = session.data?.user?.email;

//   console.log(session.data?.user?.email)

//   useEffect(() => {
//     axios.get(`https://bookwarp-server.vercel.app/users/${email}`).then((res) => {
//         setUsers(res.data);
//         localStorage.setItem("user", JSON.stringify(res.data));
//     });
//   }, [email]);

//   console.log(users)

//   return users;
// }

// export default CurrentUser;
