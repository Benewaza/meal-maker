import { useEffect, useState } from "react";

// T represents the type of data being fetched which may be unknown to begin with, allowing this hook to work with any data structure (e.g., Image[], User[], etc.).
export interface FetchResult<T> {
  data: T | null; // The fetched data of type T, or null if no data is available yet.
  error: string | null;
  loading: boolean;
}

// The <T> ensures that the hook works for any data type specified when the hook is called.
const useFetch = <T>(url: string): FetchResult<T> => {
  const [state, setState] = useState<FetchResult<T>>({
    data: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP Error ${response.status}`);
        }

        // Parse the response as JSON and type it as T (e.g., Image[], User[], etc.).
        const result: T = await response.json();

        setState({ data: result, error: null, loading: false });
      } catch (err) {
        console.error(err);
        setState({
          data: null,
          error: (err as Error).message,
          loading: false,
        });
      }
    };

    fetchData();
  }, [url]);

  return state;
};

export default useFetch;
