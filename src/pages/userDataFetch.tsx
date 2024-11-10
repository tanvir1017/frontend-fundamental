import useFetch, { TUser } from "../hooks/useFetch";

const UserDataFetch = () => {
  const { data, error, isLoading } = useFetch();

  if (isLoading && !error) {
    return <p>loading...</p>;
  }
  return (
    <div>{data && data.map((d: TUser) => <div key={d.id}>{d.name}</div>)}</div>
  );
};

export default UserDataFetch;
