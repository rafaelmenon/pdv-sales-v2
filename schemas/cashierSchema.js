const yup = require("yup");

exports.cashierSchema = yup.object({
  id: yup.string("ID é do tipo string").required("Necessário informar ID"),
  openCashierTime: yup
    .date("openCashierTime é do tipo data")
    .required("Necessário informar data de abertura"),
  company_id: yup
    .number("company_id é do tipo number")
    .required("Necessário informar company"),
  event_id: yup
    .number("event_id é do tipo number")
    .required("Necessário informar event_id"),
  sector_id: yup
    .number("sector_id é do tipo number")
    .required("Necessário informar sector_id"),
  operator_id: yup
    .string("operator_id é do tipo string")
    .required("Necessário informar operator_id"),
  operator_type: yup
    .string("operator_type é do tipo string")
    .required("Necessário informar operator_type"),
  operator_name: yup
    .string("operator_name é do tipo string")
    .required("Necessário informar data de abertura"),
  total: yup.number("total é do tipo number"),
  cash: yup.number("cash é do tipo number"),
  moneyInCashier: yup.number("moneyInCashier é do tipo number"),
  creditCard: yup.number("creditCard é do tipo number"),
  debitCard: yup.number("debitCard é do tipo number"),
  otherPayments: yup.number("otherPayments é do tipo number"),
  totalAports: yup.number("totalAports é do tipo number"),
  totalSangria: yup.number("totalSangria é do tipo number"),
  closeCashierTime: yup.date("closeCashierTime é do tipo date"),
  timesPrinted: yup.number("timesPrinted é do tipo number"),
  totalProducts: yup.number("totalProducts é do tipo number"),
  manager_name: yup.string("manager_name é do tipo string"),
  serial_pos: yup
    .string("serial_pos é do tipo string")
    .required("Necessário informar serial_pos"),
});
