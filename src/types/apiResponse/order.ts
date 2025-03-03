import {ResponseProduct} from "./product";
import {OrderStatus} from "../orderStatus";
import {ResponseAddress} from "./address";

export interface ResponseOrder {
    id: number,
    status: OrderStatus,
    userId: number,
    timestamp: string,
    items: ResponseProduct[],
    totalAmount: number,
    shippingAddress?: ResponseAddress,
    estimatedDelivery?: string
}