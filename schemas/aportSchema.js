const yup = require("yup");

exports.aportSchema = yup.object({
  id: yup.string("ID é do tipo string").required("Necessário informar ID"),
  cashier_id: yup
    .string("cashier_id é do tipo string")
    .required("Necessário informar cashier_id"),
  aport: yup
    .number("cashier_id é do tipo decimal")
    .required("Necessário informar aport"),
  dateAport: yup
    .date("dateAport é do tipo date")
    .required("Necessário informar dateAport"),
  authorization_id: yup
    .number("authorization_id é do tipo number")
    .required("Necessário informar authorization_id"),
  authorization_name: yup
    .string("authorization_name é do tipo string")
    .required("Necessário informar authorization_name"),
  authorization_type: yup
    .number("authorization_type é do tipo number")
    .required("Necessário informar authorization_type"),
});
