import React from "react";

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export type TUseFetch = {
  error: boolean;
  isLoading: boolean;
  data: TUser[];
};

const useFetch = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<TUser[]>();
  const [error, setError] = React.useState<boolean>(false);

  const url = "https://jsonplaceholder.typicode.com/users";

  //controller for network request
  const controller = new AbortController();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const result = await fetch(url, { signal: controller.signal });
      const response = await result.json();
      setData(response);
      setIsLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return { isLoading, data, error };
};

export default useFetch;
