import { async } from "@firebase/util";
import { useState, useEffect } from "react";
import { FetchHook, News, Method } from "../types/fetch";
import { URL } from "../util/constants";

export function useFetch(url: string, method?: Method): FetchHook {
  const [data, setData] = useState<{ data: Array<News>; meta: object } | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(URL + url, {
          method: method ? method : "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { loading, error, data };
}
