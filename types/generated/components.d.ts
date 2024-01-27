import type { Schema, Attribute } from '@strapi/strapi';

export interface ContactContact extends Schema.Component {
  collectionName: 'components_contact_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    number: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
  };
}

export interface ProductsProducts extends Schema.Component {
  collectionName: 'components_products_products';
  info: {
    displayName: 'products';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    discount: Attribute.Float;
    link: Attribute.String & Attribute.Required;
    image: Attribute.String & Attribute.Required;
    description: Attribute.Blocks;
    price: Attribute.Integer & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contact.contact': ContactContact;
      'products.products': ProductsProducts;
    }
  }
}
