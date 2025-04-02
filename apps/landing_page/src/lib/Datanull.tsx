import Emptydata from "./icon/Emptydata"
function Datanull(){
    return(
        <div className="w-full flex flex-col justify-center items-center py-6 text-center">
        <Emptydata />
        <p className="text-gray-500 mt-4">داده‌ای جهت نمایش وجود ندارد</p>
      </div>
    )
}
export default Datanull;