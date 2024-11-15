import { useForm } from "react-hook-form";
import Button from "../ui/Button";

const NormalForm = () => {
  const { register, handleSubmit } = useForm();
  const handleFormOnSubmit = (data: Record<string, any>) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto py-10">
      <form
        onSubmit={handleSubmit(handleFormOnSubmit)}
        className="border border-purple-400 max-w-5xl mx-auto py-2 px-2 rounded-lg"
      >
        <div className="border border-black grid grid-cols-1 md:grid-cols-2 gap-5 px-5 py-2 rounded-md">
          <div className="w-full">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input className="" type="text" id="name" {...register("name")} />
          </div>{" "}
          <div className="w-full">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input className="" type="text" id="email" {...register("email")} />
          </div>{" "}
          <div className="w-full">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              className=""
              type="password"
              id="password"
              {...register("password")}
            />
          </div>
          <div>
            <label htmlFor="gender" className="block">
              Gender
            </label>
            <select id="gender" {...register("gender")}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="">
            <label htmlFor="subject" className="block">
              Choose Subject
            </label>
            <div className="space-x-2">
              <input type="checkbox" {...register("math")} id="math" />
              <input type="checkbox" {...register("english")} id="english" />
              <input type="checkbox" {...register("german")} id="german" />
            </div>
          </div>
        </div>

        <Button
          type="submit"
          className="mt-2 bg-purple-300 bg-opacity-20 text-purple-700 border border-purple-700 hover:bg-purple-300 hover:bg-opacity-40"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default NormalForm;
