// check empity
const isEmpity = (string) => {
  if (string.trim() === "") return true;
  else return false;
};

const RatingValidation = (data) => {
  if (isEmpity(data.title)) {
    errors.title = "Title must not be empity";
  } else if (data.title.length > 150) {
    errors.title = "Title must be 150 characters or less";
  }

  if (parseInt(data.rate) < 0 || parseInt(data.rate) > 5) {
    errors.rate = "Rating Must be between 0 and 5";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

export { RatingValidation };
