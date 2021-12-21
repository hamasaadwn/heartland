// check empity
const isEmpity = (string) => {
  if (string.trim() === "") return true;
  else return false;
};

const ContentValidation = (data) => {
  let errors = {};
  if (isEmpity(data.contentEn)) {
    errors.contentEn = "Content for english must not be empity";
  }
  if (isEmpity(data.contentAr)) {
    errors.contentAr = "Content for arabic must not be empity";
  }

  if (
    data.type !== "About" ||
    data.type !== "Human Trafficing" ||
    data.type !== "Activity"
  ) {
    errors.rate =
      "Accepted content types (About, Human Trafficing, and Activity)";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

export { ContentValidation };
