import Swal from "sweetalert2"

export const handleErrorMessage = (title = 'Error', msg) => {
    Swal.fire({
        icon: 'error',
        title: title,
        text: msg,
    })
}