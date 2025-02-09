
import { type SchemaTypeDefinition } from "sanity";
import { productSchema } from "./products";
import { categorySchema } from "./categories";
import { customerSchema } from "./customer";
import { orderSchema } from "./orders";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, categorySchema, customerSchema , orderSchema ],
};
