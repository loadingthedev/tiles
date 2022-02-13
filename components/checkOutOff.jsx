import React from "react";
import { Offcanvas } from "bootstrap";
import { Button } from "react-bootstrap";
const checkOutOff = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return <></>;
};

export default checkOutOff;
// function Example() {
//   return (
//     <>
//       {["start", "end", "top", "bottom"].map((placement, idx) => (
//         <OffCanvasExample key={idx} placement={placement} name={placement} />
//       ))}
//     </>
//   );
// }

// render(<Example />);
