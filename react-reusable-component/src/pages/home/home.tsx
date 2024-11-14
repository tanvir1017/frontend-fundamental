import { useRef, useState } from "react";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";

const Home = () => {
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const onCloseModal = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="relative">
      <h1>Home page</h1>
      <Button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        variant="outline"
        className=""
      >
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onCloseModal={onCloseModal}>
        <h1>This is a modal</h1>
      </Modal>
    </div>
  );
};

export default Home;
