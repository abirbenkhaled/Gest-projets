import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) { }

  project ={
    name :null,
    category : null,
    description : null,
    date : null
  }
  message =""
  alert = ""
  ngOnInit(): void {
  }

  addProject(){
    console.log(this.project)
    if(this.project.name == null || this.project.category ==null || this.project.description == null || this.project.date == null){
      this.message ="Error"
      this.alert ="alert alert-danger"
    }
    else{
      this.message ="Project added successfully"
      this.alert ="alert alert-success"   
    }
  }


}
