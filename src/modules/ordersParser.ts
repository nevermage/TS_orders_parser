import {ApiResponse, Order, ResponseOrder} from "../types";

export async function fetchOrders(url: string): Promise<Order[]> {
    const response: Response = await fetch(url);
    const data: ApiResponse = await response.json();

    if (!data.success) {
        throw new Error('Failed to fetch orders.');
    }

    return data.data.map(({id, status, userId, timestamp, totalAmount}: ResponseOrder) => ({
        id: id,
        status: status,
        userId: userId,
        timestamp: timestamp,
        totalAmount: totalAmount,
    }));
}