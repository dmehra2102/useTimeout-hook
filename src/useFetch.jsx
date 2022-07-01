import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function useFetch(url) {
      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(false);
      useEffect(() => {
            axios.get(url)
                  .then((res) => {
                        setData(res.data.data);
                        setLoading(false);
                  })
                  .catch(() => {
                        setError(true);
                        setLoading(false);
                  });
      }, [url]);

      return [loading, error, data];
}

export default useFetch;
