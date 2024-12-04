
import { getUnitList } from "@/actions/actions";
import { UnitInterface } from "@/models/IUnit";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {

    try{
        const reqData = await request.json();
        const unitList:Partial<UnitInterface>[] = await getUnitList();
        const unitByCategory:Partial<UnitInterface>[] = unitList.filter(un => un.categoryId == reqData.categoryId);
        const unitData:Partial<UnitInterface>[] = unitByCategory.filter(un => un.id == reqData.unitId);
        const unitconverList:Partial<UnitInterface>[] = [];

        if(!unitByCategory && !unitData){
            // throw renderError("Error calculate conversion!");
            throw NextResponse.json(
                { message: "Error calculate conversion!" },
                { status: 400 }
              );
        }
        else{
            unitByCategory.forEach(item => {
                // let cal = (unitData[0].conversion * Number(reqData.amount)) / item.conversion
                const cal = (unitData[0].conversion || 1)*Number(reqData.amount)/(item.conversion || 1);
                unitconverList.push({
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    categoryId: item.categoryId,
                    conversion: cal
                });
            });
            // return Response.json({
            //     status: 200,
            //     message: `GET units success`,
            //     data: unitconverList
            //   });
            return NextResponse.json({data:unitconverList}, { status: 200 });
        }

    }catch(error){
        // return renderError(error);
        return NextResponse.json(
            { message: error },
            { status: 500 }
          );
    }
  }