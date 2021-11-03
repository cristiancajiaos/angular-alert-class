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
}
