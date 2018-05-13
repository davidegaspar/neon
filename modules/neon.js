module.exports = {
  start: function() {
    return '┏──┓';
  },
  end: function() {
    return '┗──┛';
  },
  letter: function(letter, align) {
    return `│${!align?' ':''}${letter}${align?' ':''}│`;
  },
  emoji: function(emoji) {
    return `│${emoji}│`;
  }
}
