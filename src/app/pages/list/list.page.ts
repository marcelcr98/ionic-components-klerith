import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {


  @ViewChild(IonList)
  ionList!: IonList;
  usuarios: any[] = []; 


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsuarios().subscribe(
      (data: any) => {
        // Transforma el objeto recibido en un array si es necesario
        this.usuarios = Array.isArray(data) ? data : [data];
      },
      (error: any) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }

  favorite(user: any) {
    console.log('favorite', user);
    this.ionList.closeSlidingItems();
  }

  share(user: any) {
    console.log('share', user);
    this.ionList.closeSlidingItems();
  }

  delete(user: any) {
    console.log('delete', user.name);
    this.ionList.closeSlidingItems();
  }

}
