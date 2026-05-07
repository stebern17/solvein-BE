import type { Schema, Struct } from '@strapi/strapi';

export interface ServiceServicePoint extends Struct.ComponentSchema {
  collectionName: 'components_service_service_points';
  info: {
    displayName: 'Service Point';
  };
  attributes: {
    ServicePoint: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'service.service-point': ServiceServicePoint;
    }
  }
}
