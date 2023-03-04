/************************************************************************************ */
//          Single record as object
/************************************************************************************ */
export const flattenObject = (json) => {
  let result = {};
  if (
    json.hasOwnProperty("platform") &&
    json.platform.hasOwnProperty("record")
  ) {
    let record = json.platform.record;
    Object.keys(record).forEach((key) => {
      result[key] = record[key].hasOwnProperty("displayValue")
        ? record[key].displayValue
        : record[key];
    });
  }
  return result;
};

/************************************************************************************ */
//          Single record as JSON object
/************************************************************************************ */
export const jsonFlattenObject = (json) => {
  let result = {};
  if (
    json.hasOwnProperty("platform") &&
    json.platform.hasOwnProperty("record")
  ) {
    let record = json.platform.record;
    Object.keys(record).forEach((key) => {
      result[key] = record[key].hasOwnProperty("displayValue")
        ? record[key].displayValue
        : record[key];
    });
  }
  return JSON.stringify(result);
};

/************************************************************************************ */
//          Array of records as Array of objects
/************************************************************************************ */
export const FlattenArrayObjects = (arr) => {
  if (
    !arr.hasOwnProperty("platform") ||
    !arr.platform.hasOwnProperty("record")
  ) {
    return [];
  }
  let record = arr.platform.record;
  return Array.isArray(record)
    ? record.map((obj) =>
      Object.fromEntries(
        Object.entries(obj).map(([k, v]) => [
          k,
          v.hasOwnProperty("displayValue") ? v.displayValue : v,
        ])
      )
    )
    : [
      Object.fromEntries(
        Object.entries(record).map(([k, v]) => [
          k,
          v.hasOwnProperty("displayValue") ? v.displayValue : v,
        ])
      ),
    ];
};

/************************************************************************************ */
//          Array of records as String JSON Array of objects
/************************************************************************************ */
export const jsonFlattenArrayObjectsAsString = (arr) => {
  if (
    !arr.hasOwnProperty("platform") ||
    !arr.platform.hasOwnProperty("record")
  ) {
    return JSON.stringify([]);
  }
  let record = arr.platform.record;
  return JSON.stringify(
    Array.isArray(record)
      ? record.map((obj) =>
        Object.fromEntries(
          Object.entries(obj).map(([k, v]) => [
            k,
            v.hasOwnProperty("displayValue") ? v.displayValue : v,
          ])
        )
      )
      : [
        Object.fromEntries(
          Object.entries(record).map(([k, v]) => [
            k,
            v.hasOwnProperty("displayValue") ? v.displayValue : v,
          ])
        ),
      ]
  );
};

/************************************************************************************ */
//          Array of records as JSON Array of objects
/************************************************************************************ */
export const jsonFlattenArrayObjects = (arr) => {
  if (
    !arr.hasOwnProperty("platform") ||
    !arr.platform.hasOwnProperty("record")
  ) {
  }
  let record = arr.platform.record;
  return (
    Array.isArray(record)
      ? record.map((obj) =>
        Object.fromEntries(
          Object.entries(obj).map(([k, v]) => [
            k,
            v.hasOwnProperty("displayValue") ? v.displayValue : v,
          ])
        )
      )
      : [
        Object.fromEntries(
          Object.entries(record).map(([k, v]) => [
            k,
            v.hasOwnProperty("displayValue") ? v.displayValue : v,
          ])
        ),
      ]
  );
};
