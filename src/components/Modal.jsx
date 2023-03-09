import classes from './Modal.module.css'
const Modal = ({children,onCloseModal})=>{
    return (
        <>
        <div className={classes.backdrop} onClick={onCloseModal}/>
        <dialog open className={classes.modal}>
{children}
        </dialog>
        </>
    )
}
export default Modal;