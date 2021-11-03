import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openDialog(): void {
    Swal.fire('Hola, mundo!', 'Hello!')
      .then((resolve) => { console.log(resolve); })
      .catch((reject) => { console.log(reject); })
  }
}
