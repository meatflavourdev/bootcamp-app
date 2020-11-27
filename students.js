const { Pool } = require('pg');

const pool = new Pool({
  user: 'jdevdb',
  password: '4300_maybe_gate_beyond_SIGNAL_WALL_CHOOSE_1881:::::::::::::::::',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query('SELECT * from students WHERE id = 1', (err, res) => {
  console.log(err, res);
  pool.end();
});
