import { format_from } from "../DateFormatter";
function SetClass(type, date) {
  const today = format_from(
    new Date().toJSON().slice(0, 10).replace(/-/g, "/")
  );
  const month = new Date(date).getMonth();
  const day = new Date(date).getDate();
  const thisMonth = new Date(today).getMonth();
  const thisDay = new Date(today).getDate();
  if (type === "Foreclosure" && month === thisMonth) {
    if (thisDay - day < 20) {
      return "danger";
    }
    if (thisDay - day >= 20 && thisDay - day < 35) {
      return "warning";
    }
    if (thisDay - day >= 35) {
      return "safe";
    }
  }
  if (type === "Foreclosure" && month > thisMonth) {
    console.log();
    if (thisDay - (day + thisDay) + (month - thisMonth) * 30 < 20) {
      return "danger";
    }
    if (
      thisDay - (day + thisDay) + (month - thisMonth) * 30 >= 20 &&
      thisDay - (day + thisDay) + (month - thisMonth) * 30 < 35
    ) {
      return "warning";
    }
    if (thisDay - (day + thisDay) + (month - thisMonth) * 30 >= 35) {
      return "safe";
    }
  }
}

export { SetClass };
