export class PartnerApiRequest{
    lpId ?: number;
    clientIP ?: string;
    partnerId ?: string;
    publisherId ?: string;
    clientUA ?: string;
    hashCode ?: string;
    msisdn ?: number;
    localMsisdn ?: string;
    operatorCode ?: number;
    pinCode ?: string;
    fName ?: string;
    requestData ?: typeof  RequestDataMap;

}

export const RequestDataMap = new Map<string, string>();