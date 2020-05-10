var fields = {};
document.getElementById("form").submit();
document.addEventListener("DOMContentLoaded", function () {
  fields.Name = document.getElementById("Name");

  fields.email = document.getElementById("email");

  fields.Number = document.getElementById("Number");
});
function isNotEmpty(value) {
  if (value == null || typeof value == "undefined") return false;
  return value.length > 0;
}
function fieldValidation(field, validationFunction) {
  if (field == null) return false;

  let isFieldValid = validationFunction(field.value);
  if (!isFieldValid) {
    field.className = "placeholderRed";
  } else {
    field.className = "";
  }

  return isFieldValid;
}
