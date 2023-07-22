import Image from "next/image";
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  return (
    <>
      <p className="text-6xl text-green-500">Dashboard page </p>
      (Protected)
      <Button variant={"destructive"} size={"lg"}>
        Click Me Plx
      </Button>
    </>
  );
};

export default DashboardPage;
