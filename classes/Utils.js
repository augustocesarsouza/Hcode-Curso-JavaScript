// class Utils {
//   static dateFormat(date) {
//     console.log(typeof date);
//     let month = (date.getMonth() + 1).toString();
//     if (month.length === 1) {
//       month = `0${month}`;
//     }
//     let minutes = date.getMinutes().toString(); // string posso usar .length
//     if (minutes.length === 1) {
//       minutes = "0" + minutes;
//     }

//     return date.getDate() + "/" + month + "/" + date.getFullYear() + " " + date.getHours() + ":" + minutes;
//   }
// }

class Utils {
  static dateFormat(date) {
    console.log(typeof date);
    return (
      date.getDate() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getFullYear() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes()
    );
  }
}
