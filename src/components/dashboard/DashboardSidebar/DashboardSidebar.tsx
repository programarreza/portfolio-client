"use client";

import Link from "next/link";

import { useUser } from "@/src/context/user.provider";
import { Tab, Tabs } from "@nextui-org/tabs";

const DashboardSidebar = () => {
  const { user } = useUser();

  console.log({ user });

  return (
    // <div className=" h-[calc(100vh-70px)] rounded-md sticky overflow-y-auto ">
    //   <NextUINavbar className="px-0" maxWidth="xl" position="sticky">
    //     <NavbarContent className="flex flex-col  justify-start  px-0 mx-0 ">

    //         <>
    //           <Link className="w-full" href={"/all-contents"}>
    //             <Button className="w-full ">All Contents</Button>
    //           </Link>
    //           <Link className="w-full" href={"/users"}>
    //             <Button className="w-full ">Users</Button>
    //           </Link>
    //           <Link className="w-full" href={"/payment-history"}>
    //             <Button className="w-full ">Payment History</Button>
    //           </Link>
    //         </>

    //     </NavbarContent>
    //   </NextUINavbar>
    // </div>

    <div className="w-full">
      <div className="  min-h-screen text-center">
        <Tabs
          aria-label="Options"
          classNames={{
            tabList: "gap-2 w-full relative rounded-none p-0 border-divider ",
            cursor: "w-full bg-[#22d3ee]",
            tab: "w-full px-0 h-10",
            tabContent: "group-data-[selected=true]:text-[#06b6d4]",
          }}
          color="primary"
          fullWidth={true}
          isVertical={true}
          variant="underlined"
        >
          {/* admin accusable tab */}
          {(user?.role as unknown as "ADMIN" | "USER") === "ADMIN" && (
            <>
              <Tab
                key="dashboard"
                title={
                  <Link href="/dashboard">
                    <div className="flex items-center space-x-2">
                      <span>dashboard</span>
                    </div>
                  </Link>
                }
              />

              <Tab
                key="create project"
                title={
                  <Link href="/dashboard/create-project">
                    <div className="flex items-center space-x-2">
                      <span>create project</span>
                    </div>
                  </Link>
                }
              />

              <Tab
                key="all projects"
                title={
                  <Link href="/dashboard/projects">
                    <div className="flex items-center space-x-2">
                      <span>all projects</span>
                    </div>
                  </Link>
                }
              />

              <Tab
                key="create blog"
                title={
                  <Link href="/dashboard/create-blog">
                    <div className="flex items-center space-x-2">
                      <span>create blog</span>
                    </div>
                  </Link>
                }
              />
              <Tab
                key="all blogs"
                title={
                  <Link href="/dashboard/blogs">
                    <div className="flex items-center space-x-2">
                      <span>all blogs</span>
                    </div>
                  </Link>
                }
              />
              <Tab
                key="create skill"
                title={
                  <Link href="/dashboard/create-skill">
                    <div className="flex items-center space-x-2">
                      <span>create skill</span>
                    </div>
                  </Link>
                }
              />
              <Tab
                key="all skills"
                title={
                  <Link href="/dashboard/skills">
                    <div className="flex items-center space-x-2">
                      <span>all skills</span>
                    </div>
                  </Link>
                }
              />
              <Tab
                key="create experience"
                title={
                  <Link href="/dashboard/create-experience">
                    <div className="flex items-center space-x-2">
                      <span>create experience</span>
                    </div>
                  </Link>
                }
              />

              <Tab
                key="experiences"
                title={
                  <Link href="/dashboard/experiences">
                    <div className="flex items-center space-x-2">
                      <span>all experience</span>
                    </div>
                  </Link>
                }
              />
            </>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardSidebar;