import { Component, OnInit } from '@angular/core';
import {IContractIDs, IContractDetail} from '../models/contracts-model';
import {ContractService} from '../services/contract.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {



  contractIDs:IContractIDs[] = [];
  contractDetail: IContractDetail;
  isContractDetailCalled: boolean = false;
  constructor(private contractService: ContractService) { }

  ngOnInit() {
    this.contractDetail = {
      contractsId: '',
    description: '',
    createid: '',
    createdby: '',
    updateid: '',
    lastupdate: ''
    }
     this.contractService.getContractIDs().subscribe(
      (data: IContractIDs[]) => {
          this.contractIDs = data;
          console.log(this.contractIDs);
          //debugger;
      }
    )
  }

  getContractDetails(contractsId: string){
    this.contractService.getContractDetail(contractsId).subscribe(
      (data: IContractDetail) => {
        this.isContractDetailCalled = true;
        this.contractDetail = data;
        console.log("Contract Detail : - "+this.contractDetail);
        //debugger;
      }
    );
  }

}
