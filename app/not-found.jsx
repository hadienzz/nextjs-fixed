'use client'
import { usePathname } from "next/navigation";

const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <h1> not Found</h1>
        <p>Unfortunately, we couldn't find the requested page or resource.</p>
      </div>
    </>
  );
};

export default NotFound;
