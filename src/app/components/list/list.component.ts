import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/services/Interfaces/register.interface';
import { RegisterService } from 'src/app/services/Service/register.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
   register: Register[] = []; 

  constructor(private registerService: RegisterService, private route : Router){}

  ngOnInit(): void {
    this.allregister();
  }
  
  private allregister(): void {
    this.registerService.allRegister().subscribe(
      data => {
        this.register = data;
      },
      error => {
        console.error('Error al obtener la lista', error);
      }
    );
}
}
