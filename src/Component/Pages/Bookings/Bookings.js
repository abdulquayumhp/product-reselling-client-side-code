import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { UserContext } from "../../../AuthContext/AuthContext";

const Bookings = ({ resellProduct, setResellProduct }) => {
  const { user } = useContext(UserContext);
  // const { modalData, setModalData } = useState("");
  // console.log(modalData);

  // console.log(resellProduct);
  const {
    capacity,
    color,
    location,
    name,
    original_Price,
    picture,
    resale_price,
    years_of_use,
    category,
    _id,
    product_id,
  } = resellProduct;

  const handleModelSubmit = (e) => {
    e.preventDefault();

    const data = {
      capacity,
      color,
      location,
      name,
      original_Price,
      picture,
      resale_price,
      years_of_use,
      category,
      product_id,
      user: user.email,
    };
    console.log(data);
    const url = `http://localhost:8000/modalData`;
    // console.log(url);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((update) => {
        console.log(update);
        toast.success("booking successful");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <form onSubmit={handleModelSubmit} className="modal-box relative">
          <label
            onClick={() => setResellProduct(null)}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold pb-4">{resellProduct.name}</h3>
          <p className="pt-1 font-semibold">Product Name</p>
          <input
            className="w-full border-px border border-gray-300 rounded-sm pb-1 my-2 px-3"
            type="text"
            defaultValue={resellProduct.name}
            disabled
          />
          <p className="pt-1 font-semibold">Email</p>
          <input
            className="w-full border-px border border-gray-300 rounded-sm pb-1 my-2 px-3"
            type="text"
            defaultValue={user.email}
            disabled
          />
          <p className="pt-1 font-semibold">Original Price</p>
          <input
            className="w-full border-px border border-gray-300 rounded-sm pb-1 my-2 px-3"
            type="text"
            defaultValue={resellProduct.original_Price}
            disabled
          />
          <p className="pt-1 font-semibold">Resell Price</p>
          <input
            className="w-full border-px border border-gray-300 rounded-sm pb-1 my-2 px-3"
            type="text"
            defaultValue={resellProduct.resale_price}
            disabled
          />

          <p className="pt-1 font-semibold">Location</p>
          <input
            className="w-full border-px border border-gray-300 rounded-sm pb-1 my-2 px-3"
            type="text"
            defaultValue={location}
            disabled
          />
          <div className="text-center">
            <input
              className="w-full bg-blue-200 hover:bg-blue-100 py-1"
              type="submit"
              value="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Bookings;
