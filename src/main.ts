import {Order, SortingOrder} from "./types";
import {fetchOrders} from "./modules/ordersParser";
import {filterOrders, sortOrders} from "./utils";
import {saveContent} from "./modules/fileWriter";
import {logger} from "./modules/logger";
import dotenv from "dotenv";

dotenv.config();

main(process.env.API_URL as string, {field: 'totalAmount'}, null, 'orders.json');

async function main<T extends keyof Order>(
    url: string,
    sorting?: { field: T, ordering?: SortingOrder } | null,
    filters?: Partial<Order> | null,
    filenameToSave?: string
): Promise<void> {
    try {
        const orders: Order[] = await fetchOrders(url);
        const sortedOrders: Order[] = sorting ? sortOrders(orders, sorting.field, sorting.ordering) : orders;
        const filteredOrders: Order[] = filters ? filterOrders(sortedOrders, filters) : sortedOrders;

        if (filenameToSave) {
            saveContent(filenameToSave, filteredOrders);
        } else {
            console.log('orders: ', filteredOrders);
        }
    } catch (e) {
        logger.error(`${e} | url "${url}""`);
        throw e;
    }
}
