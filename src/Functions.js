export function isToday(someDate) {
  const today = new Date();
  const comp = new Date(someDate);
  return (
    comp.getDate() === today.getDate() &&
    comp.getMonth() === today.getMonth() &&
    comp.getFullYear() === today.getFullYear()
  );
}
