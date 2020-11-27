// teacher.js
const { Pool } = require("pg");

// Get command line args
const args = process.argv;

const pool = new Pool({
  user: "jdevdb",
  password: "4300_maybe_gate_beyond_SIGNAL_WALL_CHOOSE_1881:::::::::::::::::",
  host: "localhost",
  database: "bootcampx",
});

const queryString =
    `
  SELECT DISTINCT t.name AS teacher, c.name AS cohort
  FROM teachers AS t
  JOIN assistance_requests AS ar ON ar.teacher_id = t.id
  JOIN students AS s ON s.id = ar.student_id
  JOIN cohorts AS c ON c.id = s.cohort_id
  WHERE c.name LIKE $1
  ORDER BY c.name, t.name;
`;
const values = [args[2] + '%' || ''];

pool
  .query(queryString, values)
  .then(res => {
    res.rows.forEach(teacher => {
      console.log(`${teacher.cohort}: ${teacher.teacher}`);
    });
  });
pool.end();
