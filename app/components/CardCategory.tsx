import { CategoryInterface } from "@/models/ICategory";

type CardCategoryProps = {
  children: React.ReactNode;
  category: CategoryInterface;
  className?: string;
  onclick: (value:CategoryInterface) => void
};
function CardCategory(props: CardCategoryProps) {
  const { category, className, children, onclick } = props;
  return (
    <>
      <div
        onClick={()=>onclick(category)}
        //   className={`flex flex-col justify-center items-center relative w-[120px] h-[100px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-md p-3 rounded-br-xl sm:rounded-r-xl sm:rounded-l-none bg-yellow-300`}>
        className={`flex flex-col justify-center items-center relative w-[120px] h-[100px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 shadow-md p-3 ${className}`}
      >
        {/* <div className="absolute top-1">
                    <Image src={category.ImageUrl} width={70} height={60} alt={category.Name}/>
                </div> */}
        <div className="text-white font-semibold absolute bottom-5">
          {category.name}
        </div>
        <div className="text-white text-sm font-medium absolute bottom-1">
          {category.nameTH}
        </div>
      </div>
      {children}
    </>
  );
  //   return category.name == "LENGTH" ? (
  //     <>
  //       <button
  //         // className={`flex flex-col justify-center items-center relative w-[120px] h-[100px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-md p-3 rounded-tl-xl sm:rounded-l-xl sm:rounded-r-none bg-rose-400`}>

  //         className={`flex flex-col justify-center items-center relative w-[120px] h-[100px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-md p-3 ${className}`}>
  //         {/* <div className="absolute top-1">
  //                 <Image src={category.ImageUrl} width={70} height={60} alt={category.Name}/>
  //             </div> */}
  //         <div className="text-white font-semibold absolute bottom-5">
  //           {category.name}
  //         </div>
  //         <div className="text-white text-sm font-medium absolute bottom-1">
  //           {category.nameTH}
  //         </div>
  //       </button>
  //     </>
  //   ) : category.name == "MEASURE" ? (
  //     <>
  //       <button
  //         // className={`flex flex-col justify-center items-center relative w-[120px] h-[100px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-md p-3 rounded-tr-lg sm:rounded-none bg-sky-300`}>
  //         className={`flex flex-col justify-center items-center relative w-[120px] h-[100px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-md p-3 ${className}`}>
  //         {/* <div className="absolute top-1">
  //                 <Image src={category.ImageUrl} width={70} height={60} alt={category.Name}/>
  //             </div> */}
  //         <div className="text-white font-semibold absolute bottom-5">
  //           {category.name}
  //         </div>
  //         <div className="text-white text-sm font-medium absolute bottom-1">
  //           {category.nameTH}
  //         </div>
  //       </button>
  //     </>
  //   ) : category.name == "VOLUME" ? (
  //     <>
  //       <button
  //         // className={`flex flex-col justify-center items-center relative w-[120px] h-[100px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-md p-3 rounded-bl-lg sm:rounded-none bg-emerald-400`}>
  //         className={`flex flex-col justify-center items-center relative w-[120px] h-[100px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-md p-3 ${category.style}`}>
  //         {/* <div className="absolute top-1">
  //                 <Image src={category.ImageUrl} width={70} height={60} alt={category.Name}/>
  //             </div> */}
  //         <div className="text-white font-semibold absolute bottom-5">
  //           {category.name}
  //         </div>
  //         <div className="text-white text-sm font-medium absolute bottom-1">
  //           {category.nameTH}
  //         </div>
  //       </button>
  //     </>
  //   ) : (
  //     <button
  //       className={`flex flex-col justify-center items-center relative w-[120px] h-[100px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-md p-3 rounded-br-xl sm:rounded-r-xl sm:rounded-l-none bg-yellow-300`}
  //     >
  //       {/* className={`flex flex-col justify-center items-center relative w-[120px] h-[100px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-md p-3 ${category.Style}`}> */}
  //       {/* <div className="absolute top-1">
  //                     <Image src={category.ImageUrl} width={70} height={60} alt={category.Name}/>
  //                 </div> */}
  //       <div className="text-white font-semibold absolute bottom-5">
  //         {category.name}
  //       </div>
  //       <div className="text-white text-sm font-medium absolute bottom-1">
  //         {category.nameTH}
  //       </div>
  //     </button>
  //   );
}
export default CardCategory;
