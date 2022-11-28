import { useQuery } from "@tanstack/react-query";
import Loding from "../../../../../SharebleInfo/Lodin/Loding";
import HomeCategoryCard from "./HomeCategoryCard";

const HomeCategory = () => {
  const url = `${process.env.REACT_APP_LOCALHOST}ResellingFurniture`;
  // console.log(url);

  const { data: homeCategories, isLoading } = useQuery({
    queryKey: ["ResellingFurniture"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  console.log(homeCategories);

  if (isLoading) {
    return <Loding />;
  }

  return (
    <div className="bg-blue-200 rounded-lg mb-20">
      <h1 className="text-5xl w-11/12 mx-auto pt-5 font-bold text-black">
        Product Category
      </h1>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20  w-11/12 mx-auto">
        {homeCategories.map((homeCategory) => (
          <HomeCategoryCard
            key={homeCategory._id}
            homeCategory={homeCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
