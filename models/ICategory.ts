import { StaticImageData } from "next/image";

export interface CategoryInterface {
    id: string;
    name: string;
    nameTH: string;
    description?: string;
    image?: StaticImageData;
    style?: string;
}