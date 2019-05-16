/* eslint-disable no-bitwise */
export const uuid = (prefix) => {
  const uuidPrefix = prefix || '';
  const S4 = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (`${uuidPrefix}_${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`);
}

export const arrDiff = (a1, a2) => {
  const a = [];
  const diff = [];

  for (let i = 0; i < a1.length; i += 1) {
    a[a1[i]] = true;
  }

  for (let i = 0; i < a2.length; i += 1) {
    if (a[a2[i]]) {
      delete a[a2[i]];
    } else {
      a[a2[i]] = true;
    }
  }

  for (const k in a) {
    diff.push(k);
  }

  return diff;
}
