import { getUnitList } from "@/actions/actions";
import { NextResponse } from "next/server";

export async function GET(request: Request,{ params }: { params: Promise<{ id: string }> }) {
    const {id} = await params
    try{
        const unitList = await getUnitList();
        if(unitList){
            const unit = unitList.filter(un => un.categoryId == id);
            // return Response.json({
            //     status: 200,
            //     data: unit,
            // });
            return NextResponse.json({data:unit}, { status: 200 });
        }else{
            // throw renderError("Not found unit!");
            throw NextResponse.json(
                { message: "Not found unit!" },
                { status: 404 }
              );
        }

    }catch(error){
        // return renderError(error);
        return NextResponse.json(
            { message: error },
            { status: 500 }
          );
    }
  }