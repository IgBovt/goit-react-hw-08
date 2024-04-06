// export function formatPhoneNumber(phoneNumber) {
//   const num = parseInt(phoneNumber, 10);
//   const cleaned = ('' + num).replace(/\D/g, '');
//   const chunks = [];
//   let index = 0;
//   while (index < cleaned.length) {
//     chunks.push(cleaned.slice(index, index + 3));
//     index += 3;
//   }
//   return chunks.join('-');
// }

export function formatPhoneNumber(phoneNumber) {
  const num = parseInt(phoneNumber, 10);
  const cleaned = ('' + num).replace(/\D/g, '');
  const chunks = [];
  let index = cleaned.length;
  while (index > 0) {
    chunks.unshift(cleaned.slice(Math.max(0, index - 3), index));
    index -= 3;
  }
  return chunks.join('-');
}
