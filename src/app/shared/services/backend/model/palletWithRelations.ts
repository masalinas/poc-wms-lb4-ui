/**
 * wms-lb4-poc-api
 * WMS Loopback 4 PoC API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { PalletTypeWithRelations } from './palletTypeWithRelations';
import { StockWithRelations } from './stockWithRelations';

/**
 * (tsType: PalletWithRelations, schemaOptions: { includeRelations: true })
 */
export interface PalletWithRelations { 
    /**
     * Pallet indentifier
     */
    id?: string;
    /**
     * Pallet SSCC
     */
    sscc: string;
    palletTypeId?: string;
    stocks?: Array<StockWithRelations>;
    palletType?: PalletTypeWithRelations;
}