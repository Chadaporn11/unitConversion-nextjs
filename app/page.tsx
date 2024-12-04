"use client";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import FormContainer from "./components/FormContainer";
import FormInput from "./components/FormInput";
import FormSelect from "./components/FormSelect";
import { CategoryInterface } from "@/models/ICategory";
import CardCategory from "./components/CardCategory";
import { ConversionInterface } from "@/models/IConversion";
import { UnitInterface } from "@/models/IUnit";
import { redirect, usePathname } from "next/navigation";

const intitialConversion = {
  amount: 0,
  unitId: "",
  categoryId: "",
};

export default function Home() {
  const [categorys, setCategorys] = useState<CategoryInterface[]>([]);
  const [category, setCategory] = useState<Partial<CategoryInterface>>({});
  const [units, setUnits] = useState<UnitInterface[]>([]);
  const [conversion, setConversion] =
    useState<Partial<ConversionInterface>>(intitialConversion);
  const pathname = usePathname();

  const calculateConversion = () => {
    if (!conversion.amount) {
      alert("กรุณากรอกจำนวน");
    } else if (!conversion.unitId) {
      alert("กรุณาเลือกหน่วย");
    } else {
      redirect(
        `${pathname}result/?amount=${conversion.amount}&unitId=${conversion.unitId}&categoryId=${conversion.categoryId}`
      );
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<{ id?: string; value: unknown}>
  ) => {
    const name = event.target.id as keyof typeof conversion;
    const { value } = event.target;
    setConversion({ ...conversion, [name]: value });
  };

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const name = event.target.name as keyof typeof conversion;
    console.log(name, event.target.value);
    setConversion({ ...conversion, [name]: event.target.value });
  };

  const changeCategory = (value: CategoryInterface) => {
    console.log("before", conversion);
    getUnitListByCategory(value.id);
    setCategory(value);
    setConversion({
      amount: 0,
      unitId: "",
      categoryId: value.id,
    });
    console.log("after", conversion);
  };

  const clearData = () => {
    getCategoryList();
  }

  const getCategoryList = async () => {
    const url = `${pathname}api/category`;
    const requestOptions = {
      method: "GET",
      headers: {
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setCategorys(res.data);
          setCategory(res.data[0]);
          getUnitListByCategory(res.data[0].id);
        }
      });
  };

  const getUnitListByCategory = async (categoryId: string) => {
    const url = `${pathname}api/unit/${categoryId}`;
    const requestOptions = {
      method: "GET",
      headers: {
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        setUnits(res.data);
        setConversion({
          amount: 0,
          unitId: "",
          categoryId: res.data[0].categoryId,
        });
        console.log(res);
      });
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <>
      <div className="font-bold text-3xl mb-3"> Unit Conversion</div>
      <FormContainer action={calculateConversion}>
        <div className="relative flex flex-wrap md:flex-row justify-center w-full gap-1 my-2 md:my-5 ">
          {categorys.map((item) => (
            <CardCategory
              category={item}
              className={
                category.id == item.id
                  ? `${item.style}`
                  : `${item.style} contrast-50 hover:contrast-100`
              }
              key={item.id}
              onclick={changeCategory}
            >
              <FormInput
                key={item.id}
                id={item.id}
                name="categoryId"
                type="radio"
                className="hidden"
                text={item.name}
                value={conversion.categoryId}
                checked={category.id == item.id ? true : false}
                onChange={handleInputChange}
              />
            </CardCategory>
          ))}
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-5 w-full mt-3 px-10">
          <div className="w-full">
            <FormInput
              id="amount"
              name="amount"
              type="number"
              text="จำนวน (amount)"
              className="h-[45px] text-md p-2 rounded-md w-full shadow-sm"
              value={conversion?.amount}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <FormSelect
              name="unitId"
              text="หน่วย (unit)"
              className="rounded-md h-[45px] w-full shadow-sm"
              value={conversion.unitId}
              onChange={handleChange}
            >
              <option value="" className="text-center">
                -- เลือก --
              </option>
              {units &&
                units.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.name} {item.description}
                  </option>
                ))}
            </FormSelect>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row mt-5 w-full gap-3 px-10">
          <Button
            text="Clear"
            type="button"
            onClick={clearData}
            className="w-full h-[45px] bg-slate-400 text-white font-semibold rounded-md active:bg-blue-200"
          />
          <Button
            text="Enter"
            type="submit"
            className="w-full h-[45px] bg-blue-600 text-white font-semibold rounded-md active:bg-blue-200"
          />
        </div>
      </FormContainer>
    </>
  );
}
