export const parseSearchEngineInfo = (url) => {
  const parsedUrl = new URL(url);
  const hostname = parsedUrl.hostname.toLowerCase();
  const title = hostname.split(".").at(-2);
  return { title, hostname };
};
