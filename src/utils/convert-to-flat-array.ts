export const flattenHierarchy = (items: any, result: any[] = []) => {
  for (const item of items) {
    result.push(item);
    if (item.children && item.children.length > 0) {
      flattenHierarchy(item.children, result);
    }
  }
  return result;
};
