import { Link, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div data-testid={"App.DataTestId"}>
      <Link to="/about">About</Link>
      <br />
      <Link to="/shop">shop</Link>
      <h1>PAGE</h1>
      <Outlet />
    </div>
  );
};
