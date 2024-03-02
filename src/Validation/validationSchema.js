import * as yup from "yup";

export const validationSchemaLogin = yup.object({
  credential: yup
    .string()
    .matches(
      /^([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))$|^\d{10}$/,
      "Please enter a valid details."
    )
    .required("Input is required"),
});
