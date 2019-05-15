/* eslint-disable no-bitwise */
export const uuid = (prefix) => {
  const uuidPrefix = prefix || '';
  const S4 = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (`${uuidPrefix}_${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`);
}
