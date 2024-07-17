import * as Yup from "yup";

export const formToOrderSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, "Too short!")
    .max(254, "Too long!")
    .required("Please insert your name!"),
  email: Yup.string()
    .trim()
    .email()
    .min(2, "Too short!")
    .max(254, "Too long!")
    .required("Please insert your email!"),
});
