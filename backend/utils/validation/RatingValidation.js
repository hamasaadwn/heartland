const RatingValidation = (data) => {
  let errors = {};

  if (parseInt(data.rate) < 0 || parseInt(data.rate) > 5) {
    errors.rate = "Rating Must be between 0 and 5";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

export { RatingValidation };
