import { useEffect, useState } from "react";
const useAdmin = (email) => {
  //   console.log(email);
  const [isAdmin, setIsAdmin] = useState([]);

  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`${process.env.REACT_APP_LOCALHOST}emailForGetUser/${email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setIsAdmin(data);
          setIsAdminLoading(false);
        });
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
