"use client";

import axios from "axios";
import { useEffect, useState } from "react";

function AllUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://bookwarp-server.vercel.app/users").then((res) => {
        setUsers(res.data);
    });
  }, []);

  return users;
}

export default AllUser;
