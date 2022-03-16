// establishes a connection with the game server
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
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

  return conn
};

module.exports = { connect };