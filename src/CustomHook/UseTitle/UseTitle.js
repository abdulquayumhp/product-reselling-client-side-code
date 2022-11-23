import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Creative `;
  }, [title]);
};

export default useTitle;
