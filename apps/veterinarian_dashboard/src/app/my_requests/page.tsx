import Index from "./Index";

function page({ searchParams: { type } }: { searchParams: { type: string } }) {
  return <Index type={type} />;
}

export default page;
