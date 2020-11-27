const { Pool } = require("pg");

const pool = new Pool({
  user: "jdevdb",
  password: "4300_maybe_gate_beyond_SIGNAL_WALL_CHOOSE_1881:::::::::::::::::",
  host: "localhost",
  database: "bootcampx",
});

pool
  .query(
    `
SELECT id, name, cohort_id
FROM students
LIMIT 5;
`
  )
  .then((res) => {
    console.log(res.rows);
  })
  .catch((err) => console.error("query error", err.stack));
