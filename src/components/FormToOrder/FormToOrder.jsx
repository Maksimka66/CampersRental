import sprite from "../../images/sprite/sprite.svg";

import css from "./FormToOrder.module.css";

const FormToOrder = () => {
  const submitData = (e) => {
    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={submitData}>
      <div className={css.infoForm}>
        <h4 className={css.formHeader}>Book your campervan now</h4>
        <p className={css.formText}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <div className={css.formElements}>
        <div>
          <input
            className={css.formField}
            type="text"
            name="name"
            placeholder="Name"
            required
          />
        </div>

        <div>
          <input
            className={css.formField}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>

        <div className={css.textAreaContainer}>
          <input
            className={css.formFieldCalendar}
            type="text"
            placeholder="Booking date"
            required
            readOnly
          />
          <button className={css.calendarButton} type="button">
            <svg className={css.calendarIcon} width="20" height="20">
              <use href={`${sprite}#icon-Button`}></use>
            </svg>
          </button>
        </div>

        <div>
          <textarea className={css.formTextArea} placeholder="Comment" />
        </div>
      </div>

      <button className={css.submitBtn} type="submit">
        Send
      </button>
    </form>
  );
};

export default FormToOrder;
