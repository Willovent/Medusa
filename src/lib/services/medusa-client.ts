export const getSeries = (url: string, key: string) => {
  return fetch(`${url}/api/v2/series?limit=1000&detailed=true`, {
    headers: { 'X-Api-Key': key }
  });
};
