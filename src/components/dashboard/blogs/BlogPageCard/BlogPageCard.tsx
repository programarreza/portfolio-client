"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { Tooltip } from "@nextui-org/tooltip";
import { User } from "@nextui-org/user";
import Swal from "sweetalert2";

import UpdateBlog from "../UpdateBlog";

import { useDeleteBlog } from "@/src/hooks/blog.hook";

const rows = [
  { name: "IMAGE", uid: "image" },
  { name: "CONTENT", uid: "content" },
  { name: "PUBLISH DATE", uid: "publish date" },
  { name: "ACTIONS", uid: "actions" },
];

interface IProps {
  blogs: any[];
}

export default function BlogPageCard({ blogs }: IProps) {
  const { mutate: deleteBlog } = useDeleteBlog();

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff7527",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      width: "350px",
      customClass: {
        popup: "bg-[#081B29] text-white ",
        title: "text-white",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBlog(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your blog has been deleted.",
          icon: "success",
          width: "350px",
          customClass: {
            popup: " bg-[#081B29] text-white ",
            title: "text-white",
          },
        });
      }
    });
  };

  return (
    <Table
      aria-label="all blog from dashboard"
      className="bg-transparent text-white"
      removeWrapper={true}
    >
      <TableHeader className="">
        {rows.map((row) => (
          <TableColumn key={row?.uid} className="text-white bg-[#081B29]">
            {row?.name}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody className="bg-[#081B29]">
        {blogs?.map((blog) => (
          <TableRow key={blog?._id} className="bg-[#081B29]">
            <TableCell>
              <User
                avatarProps={{
                  size: "lg",
                  radius: "sm",
                  src: blog?.image,
                }}
                className=" "
                description=""
                name=""
              />
            </TableCell>
            <TableCell>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    blog?.content?.length > 250
                      ? blog?.content?.slice(0, 250) + "..."
                      : blog?.content,
                }}
                className="prose prose-invert max-w-none text-white text-sm"
              />
            </TableCell>
            <TableCell>{blog?.createdAt}</TableCell>

            <TableCell>
              <div className="relative flex items-center gap-2">
                <Tooltip className="" content="Edit blog">
                  <button className="text-lg text-default-400  cursor-pointer active:opacity-50">
                    <UpdateBlog blog={blog} />
                  </button>
                </Tooltip>
                <Tooltip color="danger" content="Delete blog">
                  <button
                    className="text-lg text-danger cursor-pointer active:opacity-50"
                    onClick={() => handleDelete(blog?._id)}
                  >
                    <svg
                      className="size-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </button>
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
