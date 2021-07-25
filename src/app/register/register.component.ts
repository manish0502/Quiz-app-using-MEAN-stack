import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  isLoading = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onRegister(form:NgForm){
    console.log(form.value)
    this.isLoading = true;
    this.router.navigate(['']);


  }

}
