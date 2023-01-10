import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent implements OnInit, OnDestroy {
  mensaje: string = 'mensaje!';
  nombreSub: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.nombreSub = this.dataService.nombre$.subscribe((texto) => {
      console.log('hijo:', texto);
      this.mensaje = texto;
    });
    // this.dataService.nombre$.emit('hijoJuan');
  }
  ngOnDestroy(): void {
    this.nombreSub.unsubscribe();
    console.log('Destroy');
  }
}
