import React from "react";

const useAPI = <T>(
  url: string,
  initialData: T | null | undefined
): [
  T | null | undefined,
  React.Dispatch<React.SetStateAction<T | null | undefined>>
] => {
  const [data, setData] = React.useState(initialData);

  const fetchData = async (url: string) => {
    const res = await fetch(url);

    if (res.ok) {
      const data = await res.json();
      setData(data);
    }
  };

  React.useEffect(() => {
    fetchData(url);
  }, [url]);

  return [data, setData];
};

export default useAPI;
