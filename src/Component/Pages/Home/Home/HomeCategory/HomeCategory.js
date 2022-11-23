import { useQuery } from "@tanstack/react-query";
import Loding from "../../../../../SharebleInfo/Lodin/Loding";

import HomeCategoryCard from "./HomeCategoryCard";

const HomeCategory = () => {
  const { data: homeCategories, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8000/ResellingFurniture");
      const data = await res.json();
      return data;
    },
  });
  console.log(homeCategories);
  return (
    <div className="bg-blue-200 rounded-lg mb-20">
      {isLoading ? (
        <Loding />
      ) : (
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20  w-11/12 mx-auto">
          {homeCategories.map((homeCategory) => (
            <HomeCategoryCard
              key={homeCategory._id}
              homeCategory={homeCategory}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeCategory;
