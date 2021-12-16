import classes from "./MyModal.module.css";
import MyButton from "../MyButton/MyButton";

const MyModal = ({children, visibleModal, setVisibleModal}) => {

    const mainClasses = [classes.modal];
    if (visibleModal) {
        mainClasses.push(classes.active);
    }

    return (
        <div class={mainClasses.join(' ')}>
            <div className={classes.modalcontent}>
                {children}
                <MyButton onClick={() => setVisibleModal(false)}>Отмена</MyButton>
            </div>
        </div>
    );
}

export default MyModal;