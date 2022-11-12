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
  if (str.length > num) return str.slice(0, num) + '...';
  return str;
};

/**
 * Converts a string in camel case to a string in kebab case
 * E.g from textColor => text-color
 *
 * @param str the string to be converted
 * @returns the string in kebab case
 */
export const convertToKebabCase = (str: string) => {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
};
