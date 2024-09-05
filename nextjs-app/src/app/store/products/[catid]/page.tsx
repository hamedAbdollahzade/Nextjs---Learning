interface IProduct {
  params: { catid: string };
  searchParams: object;
}

const product = ({ params }: IProduct) => {
  console.log(params.catid);

  return <div>Welcome to product dynamic page </div>;
};

export default product;
