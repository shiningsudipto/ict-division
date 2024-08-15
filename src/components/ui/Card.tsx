import { cards } from "@/utils/cardsInfo";
import { GrDocumentText } from "react-icons/gr";

const Card = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {cards.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-primary-foreground/5 p-4 rounded-md w-[290px] h-[320px]"
          >
            <div className="flex justify-center bg-white p-4 rounded-md">
              <img src={item?.img} alt="" className="h-[100px]" />
            </div>
            <h4 className="font-semibold my-2">{item?.title}</h4>
            <div className="space-y-2">
              {item?.content.map((list, index) => {
                const maxLength = list.length;
                return (
                  <div key={index}>
                    <p className="flex items-center gap-x-2 cursor-pointer">
                      <GrDocumentText className="text-primary-foreground" />{" "}
                      {list.slice(0, 25)}
                      {maxLength > 30 && "..."}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
