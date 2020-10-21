export interface IClaimReportsModel{
        billId: number;
        claimId: number;
        providerName: string;
        memberName: string;
        converted: boolean;
        billed: number;
        memberId: number;
        hccamount: number;
        allowed: number;
        capitated: boolean;
        lastChanged: Date;
        workSheetState: string
}