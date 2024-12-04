import { CategoryInterface } from "@/models/ICategory"
import { UnitInterface } from "@/models/IUnit"

export const renderError = (error:unknown):{message: string} => {
  return {
      message: error instanceof Error ? error.message : 'Error!!!'
  }

}
//mockup data category
export const getCategoryList = async () => {
 const categoryList:Partial<CategoryInterface>[] = [
    {
        id: "1",
        name: "LENGTH",
        nameTH: "(ความยาว)",
        description: "UNIT OF LENGTH",
        style: "rounded-tl-xl sm:rounded-l-xl sm:rounded-r-none bg-rose-400"
        // image: ,
      },
      {
        id: "2",
        name: "MEASURE",
        nameTH: "(พื้นที่)",
        description: "UNIT OF MEASURE",
        style: "rounded-tr-lg sm:rounded-none bg-sky-300",
        // image: 
      },
      {
        id: "3",
        name: "VOLUME",
        nameTH: "(ปริมาตร)",
        description: "UNIT OF LIQUid VOLUME",
        style: "rounded-bl-lg sm:rounded-none bg-emerald-400",
        // image: 
      },
      {
        id: "4",
        name: "WEIGHT",
        nameTH: "(น้ำหนัก)",
        description: "UNIT OF WEIGHT",
        style: "rounded-br-xl sm:rounded-r-xl sm:rounded-l-none bg-yellow-300",
        // image: 
      },
 ]
 return categoryList;
}

//mockup data unit
export const getUnitList = async () => {
    const unitList:Partial<UnitInterface>[] = [
        {
          id: "L01",
          name: "millimeter",
          description: "มิลลิเมตร (mm)",
          categoryId: "1",
          conversion: 1
        },
        {
          id: "L02",
          name: "centimeter",
          description: "เซนติเมตร (cm)",
          categoryId: "1",
          conversion: 10
        },
        {
          id: "L03",
          name: "decimeter",
          description: "เดซิเมตร (dm)",
          categoryId: "1",
          conversion: 100
        },
        
        {
          id: "L04",
          name: "meter",
          description: "เมตร (m)",
          categoryId: "1",
          conversion: 1000
        },
        {
          id: "L05",
          name: "dekameter",
          description: "เดคาเมตร (dam)",
          categoryId: "1",
          conversion: 10000
        },
        {
          id: "L06",
          name: "hectometer",
          description: "เฮกโตเมตร (hm)",
          categoryId: "1",
          conversion: 100000
        },
        {
          id: "L07",
          name: "kilometer",
          description: "กิโลเมตร (km)",
          categoryId: "1",
          conversion: 1000000
        },
        {
          id: "M01",
          name: "square millimeter",
          description: "ตารางมิลลิเมตร (mm²)",
          categoryId: "2",
          conversion: 1
        },
        {
          id: "M02",
          name: "square centimeter",
          description: "ตารางเซนติเมตร (cm²)",
          categoryId: "2",
          conversion: 100
        },
        {
          id: "M03",
          name: "square decimeter",
          description: "ตารางเดซิเมตร (dm²)",
          categoryId: "2",
          conversion: 1000
        },
        {
          id: "M04",
          name: "square meter",
          description: "ตารางเมตร (m²)",
          categoryId: "2",
          conversion: 10000
        },
        {
          id: "M05",
          name: "square decameter",
          description: "ตารางเดคาเมตร (dam²)",
          categoryId: "2",
          conversion: 100000
        },
        {
          id: "M06",
          name: "square hectometer",
          description: "ตารางเฮกโตเมตร (ha²)",
          categoryId: "2",
          conversion: 1000000
        },
        {
          id: "M07",
          name: "square kilometer",
          description: "ตารางกิโลเมตร (km²)",
          categoryId: "2",
          conversion: 10000000
        },
        {
          id: "V01",
          name: "milliliter",
          description: "มิลลิลิตร (ml)",
          categoryId: "3",
          conversion: 1
        },
        {
          id: "V02",
          name: "centiliter",
          description: "เซนติลิตร (cl)",
          categoryId: "3",
          conversion: 10
        },
        {
          id: "V03",
          name: "deciliter",
          description: "เดซิลิตร (dl)",
          categoryId: "3",
          conversion: 100
        },
        {
          id: "V04",
          name: "liter",
          description: "ลิตร (l)",
          categoryId: "3",
          conversion: 1000
        },
        {
          id: "V05",
          name: "dekaliter",
          description: "เดคาลิตร (dal)",
          categoryId: "3",
          conversion: 10000
        },
        {
          id: "V06",
          name: "hectoliter",
          description: "เฮกโตลิตร (hl)",
          categoryId: "3",
          conversion: 100000
        },
        {
          id: "V07",
          name: "kiloliter",
          description: "กิโลลิตร (kl)",
          categoryId: "3",
          conversion: 1000000
        },
        {
          id: "W01",
          name: "milligram",
          description: "มิลลิกรัม (mg)",
          categoryId: "4",
          conversion: 1,
        },
        {
          id: "W02",
          name: "centigram",
          description: "เซนติกรัม (cg)",
          categoryId: "4",
          conversion: 10
        },
        {
          id: "W03",
          name: "decigram",
          description: "เดซิกรัม (dg)",
          categoryId: "4",
          conversion: 100
        },
        {
          id: "W04",
          name: "gram",
          description: "กรัม (g)",
          categoryId: "4",
          conversion: 1000
        },
        {
          id: "W05",
          name: "dekagram",
          description: "เดคากรัม (dag)",
          categoryId: "4",
          conversion: 10000
        },
        {
          id: "W06",
          name: "hectogram",
          description: "เฮโตกรัม (hg)",
          categoryId: "4",
          conversion: 100000
        },
        {
          id: "W07",
          name: "kilogram",
          description: "กิโลกรัม (kg)",
          categoryId: "4",
          conversion: 1000000
        },
        {
          id: "W08",
          name: "megagram",
          description: "เมกะกรัม (mg)",
          categoryId: "4",
          conversion: 10000000
        },
        {
          id: "W09",
          name: "metric ton",
          description: "เมตริกตัน (t)",
          categoryId: "4",
          conversion: 100000000
        },
      ]
    return unitList
}

