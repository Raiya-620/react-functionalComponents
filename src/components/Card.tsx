import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
interface Props {
  title: string;
  summary: string;
  coverImage: string;
  tags: string[];
}

function BlogCard({ title, summary, coverImage, tags }: Props) {
  return (
    <>
      <div className="w-[420px] border-2 border-gray-200 flex rounded flex-col shadow">
        <div className="flex flex-col  relative">
          <img src={coverImage} alt="" className=" h-60 rounded-t" />
          <div className="bg-white w-max rounded px-2 m-5 text-gray-600 absolute">
            Tech
          </div>
        </div>
        <div className=" p-5 flex flex-col gap-4 ">
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className="text-gray-600 ">{summary}</p>
          <div className="flex flex-row gap-2">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="border-1 border-gray-400 rounded-2xl w-max px-2 py-1"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-gray-400">
            <div className="flex items-center">
              <FaUser />
              <p className="ml-2">Dr. Sarah John</p>
            </div>
            <div className="flex items-center ">
              <FaCalendarAlt />
              <p className="ml-2 mr-5">Mar 15, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
