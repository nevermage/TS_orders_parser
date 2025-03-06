import {ResponseOrder} from "./order";

export interface ApiResponse {
    success: boolean;
    data: ResponseOrder[];
}