export default function sumPositiveElements(nums) {
  let total = 0;
  if (nums.length === 0) {
    return 0;
  } else {
    nums.forEach((e) => {
      e > 0 ? (total += e) : 0;
    });
    return total;
  }
}
