"use client";
import { UserDetailContext } from "@/context/user-detail-context";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
  const [userDetail, setUserDetail] = useState();
  useEffect(() => {
    async function createNewUser() {
      const response = await axios.post("/api/user");
      setUserDetail(response?.data);
    }
    createNewUser();
  }, []);
  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <div>{children}</div>
    </UserDetailContext.Provider>
  );
}
