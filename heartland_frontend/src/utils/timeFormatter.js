//format date
const formatDate = (date) => {
  let addedDate = new Date(date);
  let addedDateMil = addedDate.getTime();

  let dateNow = new Date();
  dateNow = dateNow.getTime();

  let timeGap = dateNow - addedDateMil;

  if (timeGap < 60000) {
    date = "A few seconds ago";
  } else if (timeGap < 3600000) {
    let min = timeGap / 60000;
    min = Math.floor(min);
    date = `${min} Minutes ago`;
  } else if (timeGap < 86400000) {
    let hour = timeGap / 3600000;
    hour = Math.floor(hour);
    date = `${hour} hours ago`;
  } else if (timeGap >= 86400000) {
    date = `${addedDate.getDate()}/${
      addedDate.getMonth() + 1
    }/${addedDate.getFullYear()} - ${
      addedDate.getHours().toString().length === 1
        ? "0" + addedDate.getHours()
        : addedDate.getHours()
    }:${
      addedDate.getMinutes().toString().length === 1
        ? "0" + addedDate.getMinutes()
        : addedDate.getMinutes()
    }`;
  }

  return date;
};

export default formatDate;
