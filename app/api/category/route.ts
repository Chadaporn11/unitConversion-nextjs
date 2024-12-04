import { getCategoryList, renderError } from "@/actions/actions"
import { NextResponse } from "next/server";

export async function GET() {
    try{
        const categorys = await getCategoryList();
        if(!categorys){
            throw renderError('Not found categorys')
        }
        return NextResponse.json({data:categorys}, { status: 200 });
        // return NextResponse.json(
        //     categorys,
        //     {
        //     status: 200},{
        //     message: `Get categorys success`
        //     }
        // );

    }catch(error){
        return NextResponse.json(
            { message: error },
            { status: 500 }
          );
    }
    
}