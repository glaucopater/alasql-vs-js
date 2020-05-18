import React from "react";
import { TestAlasqlQuery } from "../alasql/";
import { TestJSGroupBy } from "../javascript/";
import { json } from "../data/";
import { data as smallDataset } from "../data/small.js";
import { data as mediumDataset } from "../data/medium.js";

const AlasqlTestComponent = ({ data, query, property }) => {
  const { result, time } = TestAlasqlQuery(data, query, property);

  return (
    <tr>
      <td>{query + ":"}</td>
      <td>{time}</td>
      <td>{result.length}</td>
    </tr>
  );
};

const JSTestComponent = ({ data, property }) => {
  const { result, time } = TestJSGroupBy(data, property);
  return (
    <tr>
      <td>{"JS GROUPBY"}</td>
      <td>{time}</td>
      <td>{Object.keys(result).length}</td>
    </tr>
  );
};

export const AlasqlTest1 = () => (
  <AlasqlTestComponent data={json.data} query="GROUPBY" property="first_name" />
);

export const JSTest1 = () => (
  <JSTestComponent data={json.data} property="first_name" />
);

export const AlasqlTest2 = () => (
  <AlasqlTestComponent data={smallDataset} query="GROUPBY" property="color" />
);

export const JSTest2 = () => (
  <JSTestComponent data={smallDataset} property="color" />
);

export const AlasqlTest3 = () => (
  <AlasqlTestComponent
    data={mediumDataset}
    query="GROUPBY"
    property="category"
  />
);

export const JSTest3 = () => (
  <JSTestComponent data={mediumDataset} property="category" />
);

const Metrics = () => {
  return (
    <div>
      <h2>Test 1: {json.data.length} records</h2>
      <table>
        <thead>
          <tr>
            <th>Alasql statement</th>
            <th>Time execution(ms)</th>
            <th>Aggregated Records</th>
          </tr>
        </thead>
        <tbody>
          <AlasqlTest1 />
          <JSTest1 />
        </tbody>
      </table>

      <h2>Test 2: {smallDataset.length} records</h2>
      <table>
        <thead>
          <tr>
            <th>Alasql statement</th>
            <th>Time execution (ms)</th>
            <th>Aggregated Records</th>
          </tr>
        </thead>
        <tbody>
          <AlasqlTest2 />
          <JSTest2 />
        </tbody>
      </table>

      <h2>Test 3: {mediumDataset.length} records</h2>
      <table>
        <thead>
          <tr>
            <th>Alasql statement</th>
            <th>Time execution</th>
            <th>Aggregated Records</th>
          </tr>
        </thead>
        <tbody>
          <AlasqlTest3 />
          <JSTest3 />
        </tbody>
      </table>
    </div>
  );
};

export default Metrics;
