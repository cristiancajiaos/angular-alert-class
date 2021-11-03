import Swal, { SweetAlertResult } from 'sweetalert2';

export class DialogBox {
  public static confirmacion(mensaje: string, titulo: string, textoConfirmar?: string, textoCancelar?: string): Promise<SweetAlertResult> {
    return new Promise<SweetAlertResult>((resolve) => {
      Swal.fire({
        title: titulo,
        html: mensaje,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: textoConfirmar
          ? `<strong><i class="fa fa-check fa-fw"></i> ${textoConfirmar}</strong>`
          : '<strong><i class="fa fa-check fa-fw"></i> Continuar</strong>',
        cancelButtonText: textoCancelar
          ? `<strong><i class="fa fa-times fa-fw"></i> ${textoCancelar}</strong>`
          : '<strong><i class="fa fa-times fa-fw"></i>Cancelar</strong>',
        confirmButtonColor: "#069539",
        cancelButtonColor: "#cc253a",
        icon: "warning",
        scrollbarPadding: false,
      }).then((result) => {
        resolve(result);
      });
    });
  }

  public static error(mensaje: string, titulo: string): Promise<SweetAlertResult> {
    return new Promise<SweetAlertResult>((resolve) => {
      Swal.fire({
        title: titulo,
        text: mensaje,
        icon: "error",
        showConfirmButton: true,
        confirmButtonText:
          '<strong><i class="fa fa-thumbs-up fa-fw"></i> OK</strong>',
        confirmButtonColor: "#5360a9",
      }).then((result) => {
        resolve(result);
      });
    });
  }

  public static atencion(mensaje: string, titulo: string): Promise<SweetAlertResult> {
    return new Promise<SweetAlertResult>((resolve) => {
      Swal.fire({
        title: titulo,
        text: mensaje,
        icon: 'warning',
        confirmButtonText:
          '<strong><i class="fa fa-thumbs-up fa-fw"></i> OK</strong>',
        confirmButtonColor: "#5360a9",
      }).then((result) => {
        resolve(result);
      });
    });
  }
}
