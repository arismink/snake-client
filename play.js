const { connect } = require('./client')

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function () {
  process.stdin.on('keypress', (str, cmd) => {
    if (cmd.ctrl && cmd.name === 'c') {
      process.exit(0);
    }
    console.log(cmd);
  })
};

console.log("Connecting ...");
connect();

