// students.js
const { Pool } = require("pg");

// Get command line args
const args = process.argv;

const pool = new Pool({
  user: "jdevdb",
  password: "4300_maybe_gate_beyond_SIGNAL_WALL_CHOOSE_1881:::::::::::::::::",
  host: "localhost",
  database: "bootcampx",
});

pool
  .query(
    `
SELECT s.id as id, s.name as name, c.name AS cohort_name
FROM students AS s
JOIN cohorts AS c ON c.id = s.cohort_id
WHERE c.name LIKE '${args[2]}%'
LIMIT ${args[3] || 5};
`
  )
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
    })
  });
