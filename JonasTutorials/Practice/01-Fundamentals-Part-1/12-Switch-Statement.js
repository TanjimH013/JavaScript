const day = "friday";

switch (day) {
  case "sunday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "monday":
    console.log("Prepare theory videos");
    break;
  case "tuesday":
  case "wednesday":
    console.log("Write code example");
    break;
  case "thursday":
    console.log("Record videos");
    break;
  case "friday":
  case "saturday":
    console.log("Enjoy the weekend 😏");
    break;
  default:
    console.log("Not a valid day!");
}
