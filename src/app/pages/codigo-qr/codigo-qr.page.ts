import { Component, OnInit } from '@angular/core';
import { IProfesor, IProfesores } from 'src/app/interfaces/interfaces';
import { ApiService } from 'src/app/servicios/api.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQRPage implements OnInit {

  public mensaje: string;

  //formulario html
  data={
    asignatura:'',
    fecha:'',
  }

  

  nombre: any;

   //enviamos a json
   newProfesor: IProfesor={
    fecha:'',
    asignatura: '',
    username: ''
  } 

  constructor(private apiService: ApiService,
              private alertController: AlertController,
              private router: Router) {
                this.mensaje='Duoc Maipú'
               }

  ngOnInit() {
    this.nombre = sessionStorage.getItem('username');
  }

  generarQr(){
    this.mensaje=this.data.asignatura;
    this.newProfesor.asignatura= this.mensaje;
    this.newProfesor.username=this.nombre;
    this.newProfesor.fecha=this.mensaje
    this.apiService.CrearProfesor(this.newProfesor).subscribe();
    this.Mostrarmensaje();
    this.data.asignatura='';
    //this.router.navigateByUrl('/listar')//
  }

  async Mostrarmensaje (){
    const alerta = await this.alertController.create({
      header: 'Objeto Creado',
      message: 'Se ha almacenado Qr',
      buttons: ['Ok']
    })
    alerta.present();
  }
  

}
