// check empity
const isEmpity = (string) => {
  if (string.trim() === "") return true;
  else return false;
};

const LawValidation = (data) => {
  if (isEmpity(data.title)) {
    errors.title = "Title must not be empity";
  } else if (data.title.length > 150) {
    errors.title = "Title must be 150 characters or less";
  }

  if (isEmpity(data.describtion)) {
    errors.describtion = "describtion must not be empity";
  }

  if (isEmpity(data.image)) {
    errors.image = "image must not be empity";
  }

  if (isEmpity(data.type)) {
    errors.type = "type must not be empity";
  } else if (data.type !== "International" || data.type !== "Iraq") {
    errors.title = "Type must only be International or Iraq";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

export { LawValidation };
