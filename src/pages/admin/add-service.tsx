import Container from "@/components/styled-components/container";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

const AddService = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    devices: "",
  });

  const queryClient = useQueryClient();

  // TODO: grab the form data in on change
  const handleFormInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const field = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [field]: value });
  };

  // TODO: post the form data to the API endpoint
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data) => {
      return await fetch("http://localhost:5000/api/v1/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
  });

  // TODO: get the form data
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newData = {
      ...formData,
      devices: formData.devices.split(" "),
      price: Number(formData.price),
    };

    console.log("🚀 ~ handleSubmit ~ newData:", newData);
    await mutateAsync(newData);
    console.log("done!");
  };

  return (
    <Container className="border mt-10 py-5">
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex items-center w-full gap-1">
          <input
            className="border  border-slate-500 rounded-lg p-2 w-full"
            onChange={handleFormInput}
            type="text"
            name="name"
            placeholder="Product name"
            id="name"
          />
          <input
            className="border  border-slate-500 rounded-lg p-2 w-full"
            onChange={handleFormInput}
            type="text"
            name="devices"
            placeholder="devices"
            id="devices"
          />
          <input
            className="border  border-slate-500 rounded-lg p-2 w-full"
            onChange={handleFormInput}
            type="number"
            name="price"
            placeholder="price"
            id="price"
          />
        </div>
        <div>
          <textarea
            className="border  border-slate-500 rounded-lg p-2 w-full"
            onChange={handleFormInput}
            name="description"
            placeholder="description"
            id="description"
          />
        </div>
        <Button type="submit">{isPending ? "Processing" : "Submit"}</Button>
      </form>
    </Container>
  );
};

export default AddService;
