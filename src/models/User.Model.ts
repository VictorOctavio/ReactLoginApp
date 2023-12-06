export interface UserModel {
    token: string,
    name:string,
    phone:string,
    email:string,
    geo: GeoType
}

type GeoType = {
    lat: string,
    long: string
}