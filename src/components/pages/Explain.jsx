import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

const Explain = () => {
  const count = useSelector((state) => state.counter.value);
  const { isPending, isError, data, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://6676aa5e145714a1bd726eae.mockapi.io/users").then((res) =>
        res.json()
      ),
    staleTime: 60 * 1000,
  });
  console.log("data", data);
  return (
    <div className="container">
      <app-user></app-user>
      <h1>Hello from Explain page</h1>
      <p>Counter: {count}</p>
      <div className="flex flex-wrap gap-2">
        {isPending && <p>Loading...</p>}
        {data &&
          data.map((user) => {
            return (
              <div key={user.id}>
                <img src={user.avatar} alt={user.name} />
                <p>{user.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Explain;
