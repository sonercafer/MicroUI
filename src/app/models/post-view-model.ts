import { UserViewModel } from "./user-view-model";

export class PostViewModel {
    id:string;
    text:string;
    image:string;
    likes:number;
    tags:string[];
    publishDate:string;
    owner:UserViewModel
}
