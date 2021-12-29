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
  let errors = [];

  if (isEmpity(data.name)) {
    errors.push({
      messageEn: "Name must be provided",
      messageAr: "",
      field: "name",
    });
  } else if (data.name.length > 32) {
    errors.push({
      messageEn: "Name must be less than 32 characters",
      messageAr: "",
      field: "name",
    });
  }

  if (isEmpity(data.email)) {
    errors.push({
      messageEn: "Email must be provided",
      messageAr: "",
      field: "email",
    });
  } else if (!isEmail(data.email)) {
    errors.push({
      messageEn: "The email format is wrong",
      messageAr: "",
      field: "email",
    });
  } else if (data.email.length > 32) {
    errors.push({
      messageEn: "the email must be less than 32 characters",
      messageAr: "",
      field: "email",
    });
  }

  if (isEmpity(data.password)) {
    errors.push({
      messageEn: "The password must not be empty",
      messageAr: "يجب ألا تكون كلمة المرور فارغة",
      field: "password",
    });
  } else if (data.password.length < 8) {
    errors.push({
      messageEn: "Password must be more than 8 characters",
      messageAr: "يجب أن تكون كلمة المرور أكثر من 8 أحرف",
      field: "password",
    });
  } else if (data.password.length > 32) {
    errors.push({
      messageEn: "Password must be less than 32 characters",
      messageAr: "يجب أن تكون كلمة المرور أقل من 32 حرفا",
      field: "password",
    });
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

const loginValidator = (data) => {
  let errors = [];

  if (isEmpity(data.email)) {
    errors.push({
      messageEn: "Email must be provided",
      messageAr: "يجب توفير البريد الإلكتروني",
      field: "email",
    });
  } else if (!isEmail(data.email)) {
    errors.push({
      messageEn: "The email format is wrong",
      messageAr: "تنسيق البريد الإلكتروني غير صحيح",
      field: "email",
    });
  } else if (data.email.length > 32) {
    errors.push({
      messageEn: "the email must be less than 32 characters",
      messageAr: "يجب أن يكون البريد الإلكتروني أقل من 32 حرفا",
      field: "email",
    });
  }

  if (isEmpity(data.password)) {
    errors.push({
      messageEn: "The password must not be empty",
      messageAr: "يجب ألا تكون كلمة المرور فارغة",
      field: "password",
    });
  } else if (data.password.length < 8) {
    errors.push({
      messageEn: "Password must be more than 8 characters",
      messageAr: "يجب أن تكون كلمة المرور أكثر من 8 أحرف",
      field: "password",
    });
  } else if (data.password.length > 32) {
    errors.push({
      messageEn: "Password must be less than 32 characters",
      messageAr: "يجب أن تكون كلمة المرور أقل من 32 حرفا",
      field: "password",
    });
  }

  return {
    errors,
    valid: errors.length === 0 ? true : false,
  };
};

export { registerValidator, loginValidator };
