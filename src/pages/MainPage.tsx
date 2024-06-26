import PopularThreadList from "@components/PopularThreadList";
import SchoolRelatedInfoBar from "@components/SchoolRelatedInfoBar";

function MainPage() {
  return (
    <div className="flex flex-col gap-6 px-2 pb-14">
      <SchoolRelatedInfoBar />
      <PopularThreadList />
    </div>
  );
}

export default MainPage;
