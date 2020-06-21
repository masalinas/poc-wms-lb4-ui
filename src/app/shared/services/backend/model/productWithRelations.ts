/**
 * wms-lb4-poc-api
 * WMS Loopback 4 PoC API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * (tsType: ProductWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ProductWithRelations { 
    /**
     * Product indentifier
     */
    id?: string;
    /**
     * Product name
     */
    code: string;
    /**
     * Product description
     */
    description?: string;
    /**
     * Product image
     */
    image?: string;
    /**
     * Product price
     */
    price: number;
}

