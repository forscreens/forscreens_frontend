export const updateStateByDotNotation = (object, path, value) => {
    const keys = path.split('.');
    let current = object;
    
    keys.slice(0, -1).forEach((key) => {
      if (!current[key]) {
        current[key] = {};
      }
      current = current[key];
    });
    
    current[keys[keys.length - 1]] = value;
    return object;
  };
  