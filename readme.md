# Alasql VS JavaScript

## Performance comparison between Alasql and standard JavaScript

Dataset analised

- basic dataset: 6 records (https://reqres.in/api/users)
- small dataset: 85 records (https://www.json-generator.com/)
- medium dataset: 378 records (https://www.json-generator.com/#)

For each dataset a group by for a single property has been performed.

Performance were measured with performance.now() utility
(https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)

## Current results:

Test 1: 6 records

---

- Alasql GROUPBY: 0.23999999393709004 ms
- Aggregated Records: 5
- JS GROUPBY : 0.014999997802078724 ms
- Aggregated Records: 5

## Test 2: 85 records

- Alasql GROUPBY: 0.16499997582286596 ms
- Aggregated Records: 3
- JS GROUPBY : 0.04499999340623617 ms
- Aggregated Records: 3

## Test 3: 378 records

- Alasql GROUPBY: 0.23999999393709004 ms
- Aggregated Records: 3
- JS GROUPBY : 0.1550000160932541 ms
- Aggregated Records: 3
