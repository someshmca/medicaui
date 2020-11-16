
export interface IRuleIDs{
    roleName: string
}

export interface IRuleDetails{     
    description: string;
    value: string;
    createdid: string;
    createdBy: string;
    updateid: string;
    lastupdate: string;
    ruleGroup: string;
    ruleId: string;
}

export interface IRuleAdd{
    ruleID: string,
    ruleGroup: string,
    description: string,
    value: string,
    createdid: string,
    createdby: string,
    updateid: string,
    lastupdate: string
}

export interface IRuleAddResponse{
     ruleID : string;
     message :  string;
}

export interface IRuleUpdate{
    description: string,
    value: string,
    createdid: string,
    createdBy: string,
    updateid: string,
    lastupdate: string,
    ruleGroup: string,
    ruleId: string
}

export interface IRuleUpdateResponse{
    ruleID : string;
    message :  string;
}

