export class PartnerApiResponse{
    hashCode?: string;
    confirmationType ? :SubscriptionConfirmationType;
    confirmKeyword ?: string;
    shortcode?: number;
    ivrNumber?: string;
    extension?: string;
    blocked ?: boolean;
    antiFraudScript?: string;
}

export enum SubscriptionConfirmationType{
    SINGLE_OPTIN,
    DOUBLE_OPTIN,
    PASSWORD,
    EXTERNAL_PROCESS,
    DIRECT_SUBSCRIBED
}