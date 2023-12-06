export interface UserModel {
    name:string,
    phone:string,
    email:string,
    geo: GeoType
}

type GeoType = {
    lat: string,
    long: string
}