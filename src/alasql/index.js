import alasql from "alasql";

const QUERY = {
  SELECT: "SELECT * FROM ? ",
  GROUPBY: property =>
    `SELECT COUNT(*) AS TOTAL, ${property} FROM ? GROUP BY ${property}`
};

export const TestAlasqlQuery = (data, query, property) => {
  const finalQuery = QUERY[query](property);
  const t0 = Date.now();
  const result = alasql(finalQuery, [data]);
  const t1 = Date.now();
  const time = t1 - t0;
  return {
    result: result,
    time: time
  };
};
