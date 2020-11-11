import { Component, OnInit } from '@angular/core';
import {IProgramIDs, IProgramDetail} from '../models/programs-model';
import {ProgramService} from '../services/program.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {

  programIDs:IProgramIDs[] = [];
  programDetail: IProgramDetail;
  isProgramDetailCalled: boolean = false;
  constructor(private programService: ProgramService) { }

  ngOnInit() {
    this.programDetail = {
      programId: '',
    description: '',
    createid: '',
    createdby: '',
    updateid: '',
    lastupdate: ''
    }
     this.programService.getProgramIDs().subscribe(
      (data: IProgramIDs[]) => {
          this.programIDs = data;
          console.log(this.programIDs);
          //debugger;
      }
    )
  }

  getProgramDetails(programId: string){
    this.programService.getProgramDetail(programId).subscribe(
      (data: IProgramDetail) => {
        this.isProgramDetailCalled = true;
        this.programDetail = data;
        console.log("Program Detail : - "+this.programDetail);
        //debugger;
      }
    );
  }


}
