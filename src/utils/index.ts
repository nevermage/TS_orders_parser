import {Order, OrderStatus, SortingOrder} from "../types";

export function sortOrders(orders: Order[], field: keyof Order, sortingOrder: SortingOrder = 'asc'): Order[] {
    return orders.sort((a, b) => {
        const valueA = a[field];
        const valueB = b[field];

        if (typeof valueA === "number" && typeof valueB === "number") {
            return sortingOrder === "asc" ? valueA - valueB : valueB - valueA;
        }

        if (typeof valueA === "string" && typeof valueB === "string") {
            return sortingOrder === "asc"
                ? valueA.localeCompare(valueB)
                : valueB.localeCompare(valueA);
        }

        return 0
    });
}

export function filterOrders(orders: Order[], filters: Partial<Order>): Order[] {
    return orders.filter((order: Order) => {
       return Object.entries(filters).every(
           ([key, value]) => order[key as keyof Order] === value
       );
    });
}
