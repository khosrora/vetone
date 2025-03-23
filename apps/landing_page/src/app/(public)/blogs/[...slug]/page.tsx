"use client"
import IndexSingle from "./IndexSingle"

function page({ params }: { params: { slug: string } }){
return(
    <>
      <IndexSingle params={params}/>
    </>
)
}
export default page