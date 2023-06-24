import React from 'react'
import { toast, ToastContainer } from 'react-toastify';

export const SuccessNotify = (message) => {
    toast.success(message);

}
export const InfoNotify = (message) => toast.info(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
})
export const ErrorNotify = (message) => toast.error(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});
// export default Notification
// // const ErrorNotify = (message) => toast.error(message);
// // const SuccessNotify = (message) =>
// // const InfoNotify = (message) => toast.info(message, {
// //     position: "top-center",
// //     autoClose: 5000,
// //     hideProgressBar: false,
// //     closeOnClick: true,
// //     pauseOnHover: true,
// //     draggable: true,
// //     progress: undefined,
// //     theme: "light",
// // })