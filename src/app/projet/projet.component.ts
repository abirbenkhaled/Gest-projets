import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  constructor(private http: HttpClient) { }
  data1:any
  data:any;
  token: any;
  user :any;
  public projects :any
  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.getAllProjects()
  }
  
  getAllProjects(){
    let headers = new HttpHeaders({ 'authorization':this.token});
   this.http.get("http://localhost:3000/user/profile",{headers:headers}).subscribe(res =>{

     this.data = res
     this.projects = this.data[0].project
     console.log(this.projects)
    //  for(let i = 0; i < this.projects.length; i){
    //   this.projects[i] = 
    //  }
    //  this.getDetail("61d082c7f63072bebdb72aa3")
   })
 }
 delete(_id:any){
  this.http.delete("http://localhost:3000/project/delete/"+_id).subscribe(res =>{
    console.log(res)
    this.ngOnInit()
  })
  console.log(_id)
 }
 getDetail(_id:any){
  this.http.get("http://localhost:3000/detail/details/").subscribe(res =>{
    console.log(res)
  })
}
}
