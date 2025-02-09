import { defineType } from "sanity";

export const customerSchema = defineType( {
    name: 'customers',
    title: 'Customers',
    type: 'document',
    fields: [
      { name: 'fullName', title: 'Full Name', type: 'string' },
      { name: 'email', title: 'Email', type: 'string' },
      { name: 'phone', title: 'Phone', type: 'string' },
      { name: 'address', title: 'Address', type: 'string' },
      { name: 'city', title: 'City', type: 'string' },
      { name: 'country', title: 'Country', type: 'string' },
      { name: 'zipCode', title: 'Zip Code', type: 'string' },
    ],
  });
  