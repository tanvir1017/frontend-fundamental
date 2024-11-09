import { forwardRef } from "react";

type TProps = {
  className: string;
};

const Input = forwardRef<HTMLInputElement, TProps>(({ className }, ref) => {
  return (
    <div>
      <form>
        <input
          ref={ref}
          type="text"
          name="search-bar"
          id="search-bar"
          className={className}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
});
export default Input;
