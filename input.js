const { connect } = require("http2");

let connection;

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  if (key === 'w') connection.write('Move: up');

  if (key === 'a') connection.write("Move: left");

  if (key === 's') connection.write("Move: down");

  if (key === 'd') connection.write("Move: right");

  if (key === 'm') connection.write("Say: don't hit me!");

  if (key === 'b') connection.write("Say: whew! that was close");

  if (key === '\u0003') process.exit();
};

// exporting only setupInput because handleUserInput is called only by setupInput and not called anywhere else
module.exports = { setupInput };
