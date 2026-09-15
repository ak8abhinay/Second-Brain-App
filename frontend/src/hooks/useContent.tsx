import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios  from "axios";


export function useContent() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/content`, {
      headers: {
        "Authorization" : localStorage.getItem("token")
      }
    })
      .then((response) => {
        setContents(response.data.content)
      })
  }, [])

  return contents;
}