const EmployeeForm = require("./models.js");
const { client } = require("./connectpg.js");

const getAll = async (req, res) => {
  await client.connect();
  await client.query("select * from details", (err, ress) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(ress.rows);
      const data = ress.rows;
      res.status(200).json({ data });
    }
    client.end;
  });
};

// const postOne = async (req, res) => {
//   await client.connect();
//   const { name, empid, depart, gender, sal, desig } = req.body;
//   await client.query(
//     `insert into details(${(name, empid, depart, gender, sal, desig)})`
//   );
//   res.json({ msg: "Success" });
//   console.log("PostOne is executed");
// };

const postOne = async (req, res) => {
  await client.connect();
  const { name, empid, depart, gender, sal, desig } = req.body;
  await client.query(`INSERT INTO details VALUES ($1, $2, $3, $4, $5, $6,$7)`, [
    name,
    depart,
    "1990-03-12",
    sal,
    "40000",
    empid,
    desig,
  ]);
  res.json({ msg: "Success" });
  console.log("PostOne is executed");
};

module.exports = { getAll, postOne };
