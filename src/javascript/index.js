import { groupBy } from "../helpers";

export const TestJSGroupBy = (data, property) => {
  const t0 = performance.now();
  const res = groupBy(data, property);
  const t1 = performance.now();
  return {
    result: res,
    time: t1 - t0
  };
};
