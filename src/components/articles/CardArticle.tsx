import { Plus } from "lucide-react";

interface CardArticlesProps {
  name: string;
  price: number;
  img: string;
}
export const CardArticle = ({ name, price, img }: CardArticlesProps) => {
  return (
    <div className="w-1/3 max-md:w-1/2 max-md:border-t">
      <div>
        <img src={img} alt={`Une image des ${name}`} className="w-full border-l border-b border-t"/>
      </div>
      <div className="p-6 border-r border-b flex justify-between items-center">
        <div className="flex flex-col gap-2">
        <p>{name}</p>
        <p>${price}</p>
        </div>
        <div className="flex justify-between h-fit">
          <button className="bg-black rounded-full p-2 cursor-pointer hover:bg-red-500">
            <Plus className="text-white h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
