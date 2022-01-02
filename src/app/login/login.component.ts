import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private http: HttpClient) { }
  form = {
    email: null,
    password: null
  }
  ngOnInit(): void {
    
  }

  token: any
  data: any;
  user:any;
  login() {
    console.log(this.form)
    this.http.post("http://localhost:3000/user/login", this.form).subscribe(res => {
      console.log(res)
      this.data = res;
      this.token = this.data.token;
      const headers = new Headers();
     //headers.append('Authorization', jwt ${this.token});
      localStorage.setItem('token', this.token);
      this.user = jwtDecode(this.token);
      console.log(this.user);
      if(this.user.user.role == "user"){
        this.router.navigate(['/projet'])
      }else{
        this.router.navigate(['/ListUser'])
      }
    })
  }




}