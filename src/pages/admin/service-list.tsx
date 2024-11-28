import {
  TServiceData,
  useGetServices,
} from "@/api/admin/services/services.hooks";
import Container from "@/components/styled-components/container";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddService from "./add-service";

const ServiceList = () => {
  const { data: services, isLoading, isError, isFetching } = useGetServices();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <Container className="mt-10 border border-red-300 p-0 !rounded-lg">
      <Table>
        <TableCaption>A list of services</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service: TServiceData) => (
            <TableRow key={service._id}>
              <TableCell className="font-medium">{service.name}</TableCell>
              <TableCell>{service.description}</TableCell>
              <TableCell>{service.price}</TableCell>
              <TableCell className="text-right">
                <Button variant="destructive">Del</Button>
              </TableCell>
            </TableRow>
          ))}

          {isFetching && (
            <TableRow>
              <TableCell className="font-medium">fetching..</TableCell>
              <TableCell className="font-medium">fetching..</TableCell>
              <TableCell className="font-medium">fetching..</TableCell>
              <TableCell className="font-medium">fetching..</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div>
        <AddService />
      </div>
    </Container>
  );
};

export default ServiceList;
