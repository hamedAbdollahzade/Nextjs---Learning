import { useQuery } from "@tanstack/react-query";
import { getData } from "../services/api";

interface IData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Example = () => {
  const { data, isError, isPending } = useQuery({
    queryKey: ["fakeApi"],
    queryFn: getData,
  });

  if (isPending) return <h1>Loading...</h1>;
  if (isError) return <h1>Error :(</h1>;

  if (data?.data) {
    console.log(data.data);
    return (
      <h1>
        {data.data.map((items: IData) => (
          <div key={items.id}>
            <li>{items.title}</li>
          </div>
        ))}
      </h1>
    );
  }
};
export default Example;
