import FormProfile from "@/app/profile/FormProfile";
import TitleBack from "@/components/TitleBack";

function page() {
  return (
    <div className="space-y-4 p-4">
      <TitleBack text="پروفایل" />
      {/* <UserTitle /> */}
      <div className="space-y-4">
        <FormProfile />
      </div>
    </div>
  );
}

export default page;
