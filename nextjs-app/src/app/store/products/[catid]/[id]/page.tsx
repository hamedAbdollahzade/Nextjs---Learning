interface IProduct {
  params: { catid: string; id: string };
  searchParams: object;
}
// اینجا ما میتونیم به داینامیک روت های قبل تر هم دسترسی داشته باشیم 😎
const ProductCatId = (props: IProduct) => {
  console.log(props);

  return <div>Welcome to product dynamic page </div>;
};

export default ProductCatId;
