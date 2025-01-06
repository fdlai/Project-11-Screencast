import "./ModalWithForm.css";

const ModalWithForm = ({
  title,
  name,
  buttonText = "Save",
  onClose,
  children,
  isOpen,
  onSubmit,
}) => (
  <div
    className={`modal modal_type_${name} ${isOpen ? "modal_is-opened" : ""}`}
  >
    <div className="modal__content">
      <button type="button" className="modal__close" onClick={onClose} />
      <h3 className="modal__title">{title}</h3>
      <form onSubmit={onSubmit} className="modal__form" name={name}>
        {children}
        <button type="submit" className="button modal__button">
          {buttonText}
        </button>
      </form>
    </div>
  </div>
);

export default ModalWithForm;
