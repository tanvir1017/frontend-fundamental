import { useQuery } from "@tanstack/react-query";
import { getData } from "./services.api";

export type TServiceData = {
  _id: string;
  name: string;
  description: string;
  devices: string[];
  price: number | string;
};

export const useGetServices = () => {
  const serviceInfo = useQuery({
    queryKey: ["services"],
    queryFn: getData,
    select: (data) => {
      const services = data?.data?.data?.map((item: TServiceData) => {
        return {
          id: item._id,
          name: item.name,
          description: item.description,
          price: item.price,
        };
      });

      return services;
    },
  });

  return serviceInfo;
};
