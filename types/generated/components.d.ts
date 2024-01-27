import type { Schema, Attribute } from '@strapi/strapi';

export interface CompaniesCompanies extends Schema.Component {
  collectionName: 'components_companies_companies';
  info: {
    displayName: 'companies';
    icon: 'archive';
  };
  attributes: {
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    contact: Attribute.Component<'contact.contact'>;
    products: Attribute.Component<'products.products', true>;
  };
}

export interface ContactContact extends Schema.Component {
  collectionName: 'components_contact_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    email: Attribute.Email & Attribute.Required;
    number: Attribute.String & Attribute.Required;
  };
}

export interface ProductsProducts extends Schema.Component {
  collectionName: 'components_products_products';
  info: {
    displayName: 'products';
    icon: 'apps';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    images: Attribute.Media;
    discount: Attribute.Integer;
    description: Attribute.Blocks;
    price: Attribute.Float & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'companies.companies': CompaniesCompanies;
      'contact.contact': ContactContact;
      'products.products': ProductsProducts;
    }
  }
}
