// check empity
const isEmpity = (string) => {
  if (string.trim() === "") return true;
  else return false;
};

// check email
const isEmail = (email) => {
  let regEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) return true;
  else return false;
};

const registerValidator = (data) => {
  let errors = {};

  if (isEmpity(data.name)) {
    errors.name = "پێوسیتە ناو داخڵ کرێ";
  } else if (data.name.length > 32) {
    errors.name = "ناو پێویستە لە 32 پیت زیاتر نەبێت";
  }

  if (isEmpity(data.email)) {
    errors.email = "پێوسیتە ئیمەیڵ داخڵ کرێ";
  } else if (!isEmail(data.email)) {
    errors.email = "ئیمەیڵ پیویستە فۆرمی ئیمەیڵی هەبێ";
  } else if (data.email.length > 32) {
    errors.email = "ئیمەیڵ پێویستە لە 32 پیت زیاتر نەبێت";
  }

  if (isEmpity(data.password)) {
    errors.password = "پێوستە پاسوۆرد داخڵ کرێ";
  } else if (data.password.length < 8) {
    errors.password = "پێویستە پاسوۆرد لە 8 پیت زیاتر بێت";
  } else if (data.password.length > 32) {
    errors.password = "پێویستە پاسوۆرد لە 32 پیت زیاتر نەبێت";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

const loginValidator = (data) => {
  let errors = {};

  if (isEmpity(data.email)) {
    errors.email = "پێوسیتە ئیمەیڵ داخڵ کرێ";
  } else if (!isEmail(data.email)) {
    errors.email = "ئیمەیڵ پیویستە فۆرمی ئیمەیڵی هەبێ";
  } else if (data.email.length > 32) {
    errors.email = "ئیمەیڵ پێویستە لە 32 پیت زیاتر نەبێت";
  }

  if (isEmpity(data.password)) {
    errors.password = "پێوستە پاسوۆرد داخڵ کرێ";
  } else if (data.password.length < 8) {
    errors.password = "پێویستە پاسوۆرد لە 8 پیت زیاتر بێت";
  } else if (data.password.length > 32) {
    errors.password = "پێویستە پاسوۆرد لە 32 پیت زیاتر نەبێت";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

export { registerValidator, loginValidator };
