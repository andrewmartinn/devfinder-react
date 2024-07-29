export const formatWebsiteUrl = (url: string): string => {
  console.log(url, "helper func");
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return `https://${url}`;
  }
  return url;
};
