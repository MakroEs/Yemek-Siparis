import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string()
    .min(10, "Minimum 10 karakterden oluşmalıdır")
    .required("Bu alan zorunludur"),
  password: Yup.string()
    .min(6, "Sifre en az 6 karakter olmalı")
    .required("Bu alan zorunludur"),
});

export default loginSchema;
