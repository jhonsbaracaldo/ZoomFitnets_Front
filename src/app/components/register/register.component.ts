import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/Service/register.service';
import { Register } from 'src/app/services/Interfaces/register.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{

  Register: Register = {} as Register; 


  constructor(private RegisterService: RegisterService, private router:Router ){

  }
  ngOnInit(): void {
    console.log(this.Register);
  }


  saveUser(){
    this.RegisterService.registerAllUser(this.Register).subscribe(dato=>{
      console.log(dato);
      this.listUser();
    },error=>console.log(error));


  }

  listUser(){
    this.router.navigate ([''])
  }
  onSubmit(){
    this.saveUser();
  }

}
