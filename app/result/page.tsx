"use client";

import { UnitInterface } from "@/models/IUnit";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Link from "next/link";
import { Suspense } from "react";

const initialUnit = {
  id: "",
  name: "",
  description: "",
  categoryId: "",
  conversion: 1,
};

function ResultPage() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const unitId = searchParams.get("unitId");
  const amount = searchParams.get("amount");
  const [units, setUnits] = useState<UnitInterface[]>([]);
  const [unit, setUnit] = useState<Partial<UnitInterface>>(initialUnit);
  const [loading, setLoading] = useState(true);

  const calculateConvertion = async () => {
    try {
      const url = `/api/conversion`;
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount,
          unitId: unitId,
          categoryId: categoryId,
        }),
      };

      const response = await fetch(url, requestOptions);
      const res = await response.json();

      setUnits(res.data);
      const dataUnit = res.data.find(
        (un: UnitInterface) => un.id === unitId
      );
      setUnit(dataUnit || initialUnit);
    } catch (error) {
      console.error("Error fetching conversion data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    calculateConvertion();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative flex flex-col items-center gap-2 w-full h-full px-4">
      <div className="flex bg-stone-200 h-[90px] w-full md:w-[85%] rounded-xl">
        <div className="grid grid-cols-3 content-center place-items-center w-full px-5">
          <div className="text-lg font-semibold place-self-start">จำนวน</div>
          <div className="col-span-2 text-lg font-semibold place-self-end">
            หน่วย
          </div>
          <div className="text-lg font-normal place-self-start">{amount}</div>
          <div className="col-span-2 text-lg font-normal place-self-end">
            {unit?.description || ""}
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full md:w-[85%] p-3">
        <div className="font-semibold text-xl">ข้อมูลเปรียบเทียบ</div>
      </div>
      <div className="flex justify-between w-full md:w-[85%] px-5">
        <div className="text-md font-semibold">จำนวน</div>
        <div className="text-md font-semibold">หน่วย</div>
      </div>
      <div className="grid grid-cols-1 gap-2 w-full md:w-[85%] px-5 text-md">
        {units
          .filter((item) => item.id !== unit.id)
          .map((item, index) => (
            <div key={index} className="flex justify-between">
              <div>
                {item.conversion && unit
                  ? item.conversion
                  : 1 * Number(amount)}
              </div>
              <div>{item.description}</div>
            </div>
          ))}
      </div>
      <div className="absolute bottom-0 w-full md:w-[85%] px-5">
        <Link href="/">
          <Button
            text="Back"
            type="button"
            className="w-full h-[45px] bg-slate-400 text-white font-semibold rounded-md active:bg-blue-200"
          />
        </Link>
      </div>
    </div>
  );
}

export default function ResultPageWrapper() {
  return (
    <Suspense fallback={<div>Loading data...</div>}>
      <ResultPage />
    </Suspense>
  );
}

// "use client";
// import { UnitInterface } from "@/models/IUnit";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import Button from "../components/Button";
// import Link from "next/link";
// import { Suspense } from 'react'
// const initialUnit = {
//   id: "",
//   name: "",
//   description: "",
//   categoryId: "",
//   conversion: 1,
// };
// function ResultPage() {
//   const searchParams = useSearchParams();
//   const categoryId = searchParams.get("categoryId");
//   const unitId = searchParams.get("unitId");
//   const amount = searchParams.get("amount");
//   const [units, setUnits] = useState<UnitInterface[]>([]);
//   const [unit, setUnit] = useState<Partial<UnitInterface>>(initialUnit);

//   const calculateConvertion = async () => {
    
//     const url = `/api/conversion`;
//     const requestOptions = {
//       method: "POST",
//       headers: {
//         // Authorization: `Bearer ${localStorage.getItem("token")}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         amount: amount,
//         unitId: unitId,
//         categoryId: categoryId,
//       }),
//     };

//     fetch(url, requestOptions)
//       .then((response) => response.json())
//       .then((res) => {
//         setUnits(res.data);
//         const dataUnit = res.data.filter((un:UnitInterface)=> un.id == unitId);
//         setUnit(dataUnit[0]);
//         console.log(res.data);
//       });
//   };

//   useEffect(() => {
//     calculateConvertion();
//   }, []);

//   return (
//     <Suspense fallback={<div>Loading data...</div>}>
//         <div className="relative flex flex-col items-center gap-2 w-full h-full px-4">
//         <div className="flex bg-stone-200 h-[90px] w-full md:w-[85%] rounded-xl">
//           <div className="grid grid-cols-3 content-center place-items-center w-full px-5">
//             <div className="text-lg font-semibold place-self-start">
//               จำนวน
//             </div>
//             <div className="col-span-2 text-lg font-semibold place-self-end">
//               หน่วย
//             </div>
//             <div className="text-lg font-normal place-self-start">
//               {amount}
//             </div>
//             <div className="col-span-2 text-lg font-normal place-self-end">
//               {unit ? <>{unit.description}</> : <></>}
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center w-full md:w-[85%] p-3">
//           <div className="font-semibold text-xl">ข้อมูลเปรียบเทียบ</div>
//         </div>
//         <div className="flex justify-between w-full md:w-[85%] px-5">
//           <div className="text-md font-semibold">จำนวน</div>
//           <div className="text-md font-semibold">หน่วย</div>
//         </div>
//         <div className="grid grid-cols-1 gap-2 w-full md:w-[85%] px-5 text-md">
//           {units && unit ? (
//             units.map(
//               (item, index) =>
//                 item.id != unit.id && (
//                   <div key={index} className="flex justify-between">
//                     <div className="">
//                       {item.conversion && unit
//                         ? item.conversion
//                         : 1 * Number(amount)}
//                     </div>
//                     <div className="">{item.description}</div>
//                   </div>
//                 )
//             )
//           ) : (
//             <></>
//           )}
//         </div>
//         <div className="absolute bottom-0 w-full md:w-[85%] px-5">
//           <Link href="/">
//             <Button
//               text="Back"
//               type="button"
//               className="w-full h-[45px] bg-slate-400 text-white font-semibold rounded-md active:bg-blue-200"
//             />
//           </Link>
//         </div>
//       </div>
//     </Suspense>
//   );
// }
// export default ResultPage;
