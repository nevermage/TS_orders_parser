import {ResponseOrder} from "./apiResponse/order";

export type Order = Pick<ResponseOrder, 'id' | 'status' | 'userId' | 'timestamp' | 'totalAmount'>