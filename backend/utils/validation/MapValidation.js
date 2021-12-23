// check empity
const isEmpity = (string) => {
  if (string.trim() === "") return true;
  else return false;
};

const MapValidation = (data) => {
  let errors = {};
  if (isEmpity(data.name)) {
    errors.name = "name must not be empity";
  } else if (data.name.length > 20) {
    errors.name = "name must be 20 characters or less";
  }

  if (isEmpity(data.thumbnail)) {
    errors.thumbnail = "thumbnail must not be empity";
  } else if (data.thumbnail.length > 150) {
    errors.thumbnail = "thumbnail must be 150 characters or less";
  }

  if (isEmpity(data.countryMap)) {
    errors.countryMap = "countryMap must not be empity";
  } else if (data.countryMap.length > 150) {
    errors.countryMap = "countryMap must be 150 characters or less";
  }

  if (isEmpity(data.cityMap)) {
    errors.cityMap = "cityMap must not be empity";
  } else if (data.cityMap.length > 150) {
    errors.cityMap = "cityMap must be 150 characters or less";
  }

  if (isEmpity(data.cityMapAdd)) {
    errors.cityMapAdd = "cityMapAdd must not be empity";
  } else if (data.cityMapAdd.length > 150) {
    errors.cityMapAdd = "cityMapAdd must be 150 characters or less";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

export { MapValidation };
