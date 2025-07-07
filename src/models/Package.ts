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