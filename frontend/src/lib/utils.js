export function formatMessageTime(date) {
  return new Date(date).toLocaleTimeString("en-US", {
    // timeZone: "Asia/kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}
