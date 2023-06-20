import initialFilterData from "@public/filterData";

export const asFormData = (dataObject: any) => {
    const formData = new FormData();
    Object.keys(dataObject).forEach(key => {
        formData.append(key, dataObject[key]);
    })
    return formData;
}

// returns the fields that have changed in an object
export const filterModifiedFields = (source: any, initial: any) => {
    let result: any = {};
    Object.keys(source).forEach(key => {
        if(source[key] !== initial[key]){
            result[key] = source[key];
        }
    })
    return result;
}

export const hasChanged = (name: string, value: any) => {
    return initialFilterData[name] !== value
}

export const addFilterParams = (baseUrl: any, paramsObject: any) => {
    Object.keys(paramsObject).forEach((param: string) => {
        if(hasChanged(param, paramsObject[param])){
            baseUrl.searchParams.set(param, paramsObject[param]);
        }
    })
    return baseUrl;
}

export const requestSucceed = (status: string | number) => {
    return String(status).startsWith("2");
}