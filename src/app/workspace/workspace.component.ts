import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';




@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient) { }

  message =""
  alert = ""
  ngOnInit(): void {
   this.token = localStorage.getItem('token')
   this.data1 = jwtDecode(this.token);
   this.user = this.data1.user;
   this.getAllProjects()
  //  console.log(this.user);
  }
  data1:any
  data:any;
  token: any;
  user :any;

  public projects :any
  public project ={
    Title :null,
    Category : null,
    Description : null,
    StartDate:new Date().toLocaleDateString(),
    FinishDate : null,
    token: ""
  }
  addProject(){
    this.project.token = this.token
   
    console.log(this.token)
    
    this.http.post("http://localhost:3000/project/AddProject/",this.project).subscribe(res => {
      console.log(res)
      this.message ="Project added successfully"
      this.alert ="alert alert-success"
    })
    this.ngOnInit()

  }
  getAllProjects(){
     let headers = new HttpHeaders({ 'authorization':this.token});
    this.http.get("http://localhost:3000/user/profile",{headers:headers}).subscribe(res =>{
      
      this.data = res
      this.projects = this.data[0].project
      console.log(this.projects)
    })
  }


}


