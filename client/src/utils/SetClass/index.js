import { format_from } from "../DateFormatter";
function SetClass(type, date) {
  const today = format_from(
    new Date().toJSON().slice(0, 10).replace(/-/g, "/")
  );
  const month = new Date(date).getMonth();
  const day = new Date(date).getDate();
  const thisMonth = new Date(today).getMonth();
  const thisDay = new Date(today).getDate();
  // console.log(e);
  if (type === "Foreclosure" && month === thisMonth) {
    console.log(thisDay - day);
    if (thisDay - day < 20) {
      console.log("danger");
      return "danger";
    }
    if (thisDay - day >= 20 && thisDay - day < 35) {
      console.log("warning");
      return "warning";
    }
    if (thisDay - day >= 35) {
      console.log("safe");
      return "safe";
    }
  }
}

export { SetClass };
