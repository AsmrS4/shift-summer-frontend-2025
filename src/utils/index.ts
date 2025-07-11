export const getFullName = (firstname: string, lastname: string, middlename?: string) => {
    return `${lastname} ${firstname} ${middlename}`;
}

export const getFullAddress =  (street: string, house: string | number, apartment?: string | number) => {
    return `ул.${street}, д.${house} ${apartment? ', кв.' + apartment :''}`;
}