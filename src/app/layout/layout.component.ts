import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { DialogBox } from '../shared/classes/dialog-box';

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  public icons: SweetAlertIcon[] = [
    "success",
    "error",
    "warning",
    "info",
    "question",
  ];
  public dialogBoxIcon: SweetAlertIcon;

  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    this.dialogBoxIcon = this.icons[0];
  }

  public openDialogOneButton(): void {
    Swal.fire({
      title: "Un botón",
      text: "Este es un cuadro de diálogo de un botón.",
      icon: this.dialogBoxIcon,
      scrollbarPadding: true,
      showConfirmButton: true,
      confirmButtonText:
        '<strong><i class="fa fa-thumbs-up fa-fw"></i> OK</strong>',
      confirmButtonColor: "#5360a9",
    })
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
      .catch((reject) => {
        console.log(reject);
      });
  }

  public openDialogTwoButtons(): void {
    Swal.fire({
      title: "Dos botones",
      text: "Este es un cuadro de diálogo de dos botones.",
      icon: this.dialogBoxIcon,
      scrollbarPadding: true,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText:
        '<strong><i class="fa fa-check fa-fw"></i> Confirmar</strong>',
      confirmButtonColor: "#069539",
      cancelButtonText:
        '<strong><i class="fa fa-times fa-fw"></i> Cancelar</strong>',
      cancelButtonColor: "#cc253a",
    })
      .then((resolve) => {
        let dismissMethod;

        if (resolve.isConfirmed) {
          this.toastr.success(
            `Dos botones: Se presionó el botón Confirmar`,
            "Realizado"
          );
        } else if (resolve.isDismissed) {
          if (resolve.dismiss) {
            if (resolve.dismiss.toString() == "cancel") {
              dismissMethod = "el botón Cancelar";
            } else if (resolve.dismiss.toString() == "backdrop") {
              dismissMethod = "backdrop";
            }
          }
          this.toastr.success(
            `Dos botones: Se hizo la acción Cancelar por ${dismissMethod}.`,
            "Realizado"
          );
        }
      })
      .catch((reject) => {
        console.log(reject);
      });
  }

  public openDialogThreeButtons(): void {
    Swal.fire({
      title: "Tres botones",
      text: "Este es un cuadro de diálogo de tres botones.",
      icon: this.dialogBoxIcon,
      width: "40rem",
      scrollbarPadding: true,
      showConfirmButton: true,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText:
        '<strong><i class="fa fa-check fa-fw"></i> Confirmar</strong>',
      confirmButtonColor: "#069539",
      denyButtonText:
        '<strong><i class="fa fa-thumbs-up fa-fw"></i> OK</strong>',
      denyButtonColor: "#5360a9",
      cancelButtonText:
        '<strong><i class="fa fa-times fa-fw"></i> Cancelar</strong>',
      cancelButtonColor: "#cc253a",
    })
      .then((resolve) => {
        let dismissMethod;

        if (resolve.isConfirmed) {
          this.toastr.success(
            "Tres botones: Se presionó el botón confirmar",
            "Realizado"
          );
        } else if (resolve.isDenied) {
          this.toastr.success(
            "Tres botones: Se presionó el botón OK",
            "Realizado"
          );
        } else if (resolve.isDismissed) {
          if (resolve.dismiss) {
            if (resolve.dismiss.toString() == "cancel") {
              dismissMethod = "el botón Cancelar";
            } else if (resolve.dismiss.toString() == "backdrop") {
              dismissMethod = "backdrop";
            }
          }
          this.toastr.success(
            `Tres botones: Se hizo la acción Cancelar por ${dismissMethod}.`,
            "Realizado"
          );
        }
      })
      .catch((reject) => {
        console.log(reject);
      });
  }

  public openConfirmation(): void {
    DialogBox.confirmacion("foo", "foo").then((resolve) => {
      console.log(resolve);
      let dismissMethod;

      if (resolve.isConfirmed) {
        this.toastr.success(
          `Confirmación: Se presionó el botón OK`,
          "Realizado"
        );
      } else if (resolve.isDismissed) {
        if (resolve.dismiss) {
          if (resolve.dismiss.toString() === "cancel") {
            dismissMethod = "el botón cancel";
          } else if (resolve.dismiss.toString() === "backdrop") {
            dismissMethod = "backdrop";
          }
        }

        this.toastr.success(
          `Confirmación: Se hizo la acción cancelar por ${dismissMethod}.`,
          "Realizado"
        );
      }
    }).catch((reject) => {
      console.log(reject);
    });
  }

  public openError(): void {
    DialogBox.error('Error genérico', 'Error')
      .then((resolve) => {
        let dismissMethod;

        if (resolve.isConfirmed) {
          this.toastr.success(
            `Confirmación: Se presionó el botón OK`,
            "Realizado"
          );
        } else if (resolve.isDismissed) {
          if (resolve.dismiss) {
            if (resolve.dismiss.toString() === "cancel") {
              dismissMethod = "el botón cancel";
            } else if (resolve.dismiss.toString() === "backdrop") {
              dismissMethod = "backdrop";
            }
          }

          this.toastr.success(
            `Confirmación: Se hizo la acción cancelar por ${dismissMethod}.`,
            "Realizado"
          );
        }
      })
      .catch((reject) => {
        console.log(reject)
      });
  }

  public setDefault(): void {
    this.dialogBoxIcon = this.icons[0];
  }
}
