export default function removeFirstAndLast(String) {
  return String.length > 2 ? String.slice(1, -1) : String;
}
