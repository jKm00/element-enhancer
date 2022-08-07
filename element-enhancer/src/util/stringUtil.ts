/**
 * Tuncates a string if it has more characters then the
 * number specified
 *
 * @param str the string to truncate
 * @param num number of characters allowed before
 * tuncation is activated
 * @returns a truncated string if number of original string
 * is greated than the number specified, else the string
 * is just returned as it was given
 */
export const truncateString = (str: string, num: number) => {
  if (str.length > num) return str.slice(0, num) + "...";
  return str;
};
