export interface PackageProps {
    id: string | number,
    name: string,
    length: number,
    width: number,
    weight: number,
    height: number
}

export interface PackageCreate {
    length: number,
    width: number,
    weight: number,
    height: number
}

export interface DeliveryType {
    days: number | string,
    id: string | number | null,
    price: number | string
    type: 'EXPRESS' | 'DEFAULT'
}