import { ImageSourcePropType } from "react-native"

export type ProductsType = {
    id: number,
    name: string,
    price: number,
    description: string,
    details_desc: string,
    images: ImageSourcePropType[]
}
