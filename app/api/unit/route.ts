import { getUnitList } from "@/actions/actions";
import { UnitInterface } from "@/models/IUnit";
import { NextResponse } from "next/server";

export async function GET() {
    const unitList:Partial<UnitInterface>[] = await getUnitList();
    // return Response.json({
    //   status: 200,
    //   message: `GET units success`,
    //   data: unitList
    // });
    return NextResponse.json({data:unitList}, { status: 200 });
  }