/**
 * An object containing functions to colorize console log messages.
 * @namespace
 * 
 * @typedef {string|number} Message
 */
const colorsjs = {
  /**
   * Function to colorize text in green.
   * @param {Message} message - The message to be colored.
   * @returns {string} The colored message.
   */
  green: (message) => `\x1b[32m${message}\x1b[0m`, // Green

  /**
   * Function to colorize text in red.
   * @param {Message} message - The message to be colored.
   * @returns {string} The colored message.
   */
  red: (message) => `\x1b[31m${message}\x1b[0m`, // Red

  /**
   * Function to colorize text in yellow.
   * @param {Message} message - The message to be colored.
   * @returns {string} The colored message.
   */
  yellow: (message) => `\x1b[33m${message}\x1b[0m`, // Yellow

  /**
   * Function to colorize text in purple.
   * @param {Message} message - The message to be colored.
   * @returns {string} The colored message.
   */
  purple: (message) => `\x1b[35m${message}\x1b[0m`, // Purple

  /**
   * Function to colorize text in pink (bright purple).
   * @param {Message} message - The message to be colored.
   * @returns {string} The colored message.
   */
  pink: (message) => `\x1b[35;1m${message}\x1b[0m`, // Pink (bright purple)

  /**
   * Function to colorize text in gray.
   * @param {Message} message - The message to be colored.
   * @returns {string} The colored message.
   */
  gray: (message) => `\x1b[90m${message}\x1b[0m`, // Gray

  /**
   * Function to colorize text with a green background and black text.
   * @param {Message} message - The message to be colored.
   * @returns {string} The colored message.
   */
  bgGreen: (message) => `\x1b[42m\x1b[30m${message}\x1b[0m`, // Green background with black text

  /**
   * Function to colorize text with a red background and white text.
   * @param {Message} message - The message to be colored.
   * @returns {string} The colored message.
   */
  bgRed: (message) => `\x1b[41m\x1b[37m${message}\x1b[0m`, // Red background with white text

  /**
   * Function to colorize text with a yellow background and black text.
   * @param {Message} message - The message to be colored.
   * @returns {string} The colored message.
   */
  bgYellow: (message) => `\x1b[43m\x1b[30m${message}\x1b[0m`, // Yellow background with black text

  /**
   * Function to colorize text with a purple background and white text.
   * @param {Message} message - The message to be colored.
   * @returns {string} The colored message.
   */
  bgPurple: (message) => `\x1b[45m\x1b[37m${message}\x1b[0m`, // Purple background with white text

  /**
   * Function to colorize text with a pink background and white text.
   * @param {Message} message - The message to be colored.
   * @returns {string} The colored message.
   */
  bgPink: (message) => `\x1b[45;1m\x1b[37m${message}\x1b[0m`, // Pink background with white text
};

module.exports = colorsjs;
