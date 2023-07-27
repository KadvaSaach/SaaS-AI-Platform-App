import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {

  const APILimitCount = await getApiLimitCount();

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        {/* Hello Sidebar Content */}
        <Sidebar apiLimitCount = {APILimitCount}/>
      </div>
      <main className="md:pl-72 ">
        {/* Hello Dashboard Content */}
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
