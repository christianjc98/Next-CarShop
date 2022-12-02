import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLazyGetCarsByCustomerIdQuery } from "../cars/carsApiSlice";

const CarsTab = () => {
  const [getCarsByCustomerId, { data }] = useLazyGetCarsByCustomerIdQuery();
  const { id } = useParams();

  useEffect(() => {
    getCarsByCustomerId({ id });
  }, [id]);

  console.log(data);

  return <div className="text-red-800">CarsTab</div>;
};
export default CarsTab;
