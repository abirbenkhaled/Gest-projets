import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  form = {
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    phone: null
  }

  data: any;
  register(){
   
      console.log(this.form)
      this.http.post("http://localhost:3000/user/register", this.form).subscribe(res => {
        console.log(res)
        this.data = res;
      console.log(this.data)
      })
 
  }
}