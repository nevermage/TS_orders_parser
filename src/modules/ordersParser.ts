import {ApiResponse, Order, ResponseOrder} from "../types";

export async function fetchOrders(url: string): Promise<Order[]> {
    const response: Response = await fetch(url);
    const data: ApiResponse = await response.json();

    if (!data.success) {
        throw new Error('Failed to fetch orders.');
    }

    return data.data.map((order: ResponseOrder) => ({
        id: order.id,
        status: order.status,
        userId: order.userId,
        timestamp: order.timestamp,
        totalAmount: order.totalAmount,
    }));
}