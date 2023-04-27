import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  email: string = '';
  password: string = '';
  user: User = {
    id: 0,
    nombre:'',
    username: '',
    password: '',
    idAspirante:0
  };
   constructor(private router: Router,private userService: UserService) { }

   async login() {
    this.userService.autentication(this.user).subscribe(
      (response: User) => {
       if(response!=null) {
           this.router.navigate(['/candidate', { editar:true }]);
 
        }
      else   {
 
      }
      },
      (error) => {
        // Manejar errores, como mostrar un mensaje de error al usuario
        console.error(error);
      }
    );
  }
  
  onSubmit(): void {
 
 
    this.router.navigate(['/cv']);
  }

}
