import Index from "./Index";

export type PropsSearchParams = {
  fullName?: string;
  province?: string;
};

async function page({ searchParams }: { searchParams: PropsSearchParams }) {
  return <Index searchParams={searchParams} />;
}

export default page;
