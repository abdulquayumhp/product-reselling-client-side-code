import { useQuery } from "@tanstack/react-query";
import React from "react";

const DashBoardAllReport = () => {
  const url = `${process.env.REACT_APP_LOCALHOST}ResellAllReport`;
  // console.log(url);

  const { data: resellAllReport, isLoading } = useQuery({
    queryKey: ["ResellAllReport"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  console.log(resellAllReport);

  return (
    <div>
      <div className="overflow-x-auto md:w-10/12 mx-auto my-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Img</th>
              <th>Name</th>
              <th>Original price</th>
              <th>Resale price</th>
              <th>Use of Year</th>
            </tr>
          </thead>
          <tbody>
            {resellAllReport &&
              resellAllReport.map((resellReport, i) => (
                <>
                  <tr>
                    <th>{i + 1}</th>
                    <th>
                      <img
                        className="w-12 h-12 rounded-full object-cover"
                        src={resellReport.picture}
                      />
                    </th>
                    <td>{resellReport.name}</td>
                    <td>{resellReport.original_Price}</td>
                    <td>{resellReport.resale_price}</td>
                    <td>{resellReport.years_of_use}</td>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBoardAllReport;
