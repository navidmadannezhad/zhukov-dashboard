export interface InputType extends React.HTMLAttributes<HTMLElement>{
    title?: string;
    name: string;
}

export enum AuthType{
    "Email",
    "Facebook",
    "Google"
}

export enum StatusType{
    "PU",
    "IN",
    "PE"
}

export interface UserType{
    auth_type: AuthType;
    email:string;
    id:number;
    is_active: boolean;
    is_staff: boolean;
    is_superuser: boolean;
    ordering: string;
    page: number;
    search: string;
    size: number;
}

export interface LandingSectionType{
    id: number;
    title: string;
    order:number;
    link: string | null;
    type: string;
    status: boolean;
}

export interface PageType{
    id: number;
    title: string;
    content: string;
    slug: string;
    thumbnail: string;
    thumbnail_alt: string;
    status: any;
    custom_template: boolean;
}

export interface FilterType{
    id: number;
    title: string;
    slug: string;
    filter: string;
}