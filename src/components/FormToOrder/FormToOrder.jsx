import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { formToOrderSchema } from "../../Schemas/schema";

const FormToOrder = () => {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: new Date().toISOString().slice(0, 10),
    comment: "",
  };

  const nameId = useId();
  const emailId = useId();
  const bookingDateId = useId();
  const commentId = useId();

  const submitData = () => {};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formToOrderSchema}
      onSubmit={submitData}
    >
      <Form></Form>
    </Formik>
  );
};

export default FormToOrder;
