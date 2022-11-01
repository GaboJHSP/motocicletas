import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegar(){
    this.router.navigate(['/home']);
  }
  navegar2(){
    this.router.navigate(['/contactos']);
  }
  navegar3(){
    this.router.navigate(['/formulario']);
  }
  navegar4(){
    this.router.navigate(['/motos']);
  }

}
