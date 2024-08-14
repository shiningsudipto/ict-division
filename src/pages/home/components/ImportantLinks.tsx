import { notice } from "@/utils/notice";
import { GrDocumentText } from "react-icons/gr";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import govtLogo from "../../../assets/logos/bd-govt.png";
import { Link } from "react-router-dom";

const ImportantLinks = () => {
  return (
    <div className="p-[70px] flex justify-between">
      <div className="relative border rounded-md p-8">
        <h3 className="text-2xl font-medium">Notice Board</h3>
        <div className="notices">
          {notice?.map((item, index) => {
            const maxLength = item?.length;
            return (
              <div key={index} className="">
                <a
                  href="/"
                  className="capitalize flex items-center my-3 hover:text-primary "
                >
                  <GrDocumentText className="text-primary-foreground me-3" />{" "}
                  {item?.slice(0, 60)}
                  {maxLength > 80 && "..."}
                </a>
              </div>
            );
          })}
          <Link
            to={"/"}
            className="absolute right-3 bottom-3 text-primary hover:text-primary-foreground flex items-center"
          >
            all{" "}
            <MdOutlineKeyboardDoubleArrowRight className="ms-1 font-semibold" />
          </Link>
        </div>
        <img
          src={govtLogo}
          alt=""
          className="w-[100px] absolute left-[-55px] top-[-55px] z-0"
        />
      </div>
      <div>
        <h3 className="text-2xl font-medium">Bangladesh National Portal</h3>
      </div>
    </div>
  );
};

export default ImportantLinks;
