import { Outlet } from "react-router-dom";

function BodyPage() {
  return (
    <>
      <div>Header</div>
      <Outlet />
      <div>Footer</div>
    </>
  );
}

export default BodyPage;
