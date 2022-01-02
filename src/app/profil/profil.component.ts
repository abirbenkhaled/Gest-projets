import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.getUser()
  }
  data1: any
  data: any;
  token: any;
  user = {
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    phone: null,
    token: null
  }
  getUser() {
    let headers = new HttpHeaders({ 'authorization': this.token });
    this.http.get("http://localhost:3000/user/profile", { headers: headers }).subscribe(res => {

      this.data = res


      this.user = this.data[0]
      this.user.password=null
      console.log(this.user)
    })
  }
  update(user: any) {
    user.token = localStorage.getItem('token');
    //  console.log(form)
    this.http.post("http://localhost:3000/user/update/", user).subscribe(res => {
      localStorage.removeItem('token');
      this.data1 = res;
      this.token = this.data1.token;
      console.log(this.token)
      localStorage.setItem('token', this.data1.token);
      this.token = localStorage.getItem('token');
      this.user = jwtDecode(this.token);
      console.log(res);
    }


    );

  }
}
