import React from "react";

const useAPI = <T>(
  initialUrl: string | null | undefined,
  initialData: T | null | undefined
): [
  T | null | undefined,
  React.Dispatch<React.SetStateAction<string | null | undefined>>,
  React.Dispatch<React.SetStateAction<T | null | undefined>>
] => {
  const [data, setData] = React.useState(initialData);
  const [url, setUrl] = React.useState(initialUrl);

  React.useEffect(() => {
    const fetchData = async (url: string) => {
      const res = await fetch(url);

      if (res.ok) {
        const data = await res.json();
        setData(data);
      }
    };
    if (url) {
      fetchData(url);
    }
  }, [url]);

  return [data, setUrl, setData];
};

export default useAPI;
