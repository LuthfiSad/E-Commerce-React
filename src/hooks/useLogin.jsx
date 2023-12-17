import { useEffect, useState } from 'react'
import { getUsername } from '../services/auth.service'

export default function useLogin() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    } else {
      getUsername(token).then((res) => {
        if (!res) {
          window.location.href = "/login";
        } else {
          setUsername(res);
        }
      });
    }
  })
  return username;
}
