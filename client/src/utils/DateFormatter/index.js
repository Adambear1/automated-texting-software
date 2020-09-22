function format(input) {
  var pattern = /(\d{4})\-(\d{2})\-(\d{2})/;
  if (!input || !input.match(pattern)) {
    return null;
  }
  return input.replace(pattern, "$2/$3/$1");
}

function format_from(input) {
  var pattern = /(\d{4})\/(\d{2})\/(\d{2})/;
  if (!input || !input.match(pattern)) {
    return null;
  }
  return input.replace(pattern, "$2/$3/$1");
}

export { format, format_from };
