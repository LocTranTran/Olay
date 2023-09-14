import Cart from "../pages/Cart.js";

import Sign from "./Sign.js";
const User = () => {
  return (
    <div style={{display :'flex',gap:'100px'}}>
      <Cart />
      <Sign />
    </div>
  );
};

export default User;
