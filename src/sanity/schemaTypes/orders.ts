import { defineType } from "sanity";

export const orderSchema = defineType( {
    name: 'orders',
    title: 'Orders',
    type: 'document',
    fields: [
     { name: 'fullName', title: 'Full Name',  type: 'reference', to: [{ type: 'customers' }] },
      { name: 'orderDate', title: 'Order Date', type: 'datetime', initialValue: () => new Date().toISOString() },
      { name: 'billingMethod', title: 'Billing Method', type: 'string' },
      { name: 'totalAmount', title: 'Total Amount', type: 'number' },
      { name: 'items', title: 'Items', type: 'array', of: [{ type: 'object', fields: [
          { name: 'name', title: 'Item Name', type: 'string' },
          { name: 'quantity', title: 'Quantity', type: 'number' },
          { name: 'price', title: 'Price', type: 'number' },
      ]}] },
    ],
  });
  