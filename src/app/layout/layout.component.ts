import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  openDialog(): void {
    Swal.fire('Hola, mundo!', 'Hello!')
      .then((resolve) => {
        let dismissMethod;

        if (resolve.isConfirmed) {
          this.toastr.success(`Un botón: Se presionó el botón OK`, "Realizado");
        } else if (resolve.isDismissed) {
          if (resolve.dismiss) {
            if (resolve.dismiss.toString() == "backdrop") {
              dismissMethod = "backdrop";
            }
          }

          this.toastr.success(
            `Un botón: Se hizo la acción cancelar por ${dismissMethod}.`,
            "Realizado"
          );
        }
       })
      .catch((reject) => { console.log(reject); })
  }
}
