// establishes a connection with the game server
const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8"); 

  conn.on('connect', () => {
    conn.write('Name: KL1');
    console.log('your snek is on the board');
  });

  conn.on('data', (test) => {
    console.log(test);
  });

  conn.on('close', () => process.exit());

  return conn
};

module.exports = { connect };