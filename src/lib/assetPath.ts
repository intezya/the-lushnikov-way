export const getAssetPath = (assetPath: string, baseUrl = "/") => {
  if (!assetPath.startsWith("/")) {
    return assetPath;
  }

  if (!baseUrl || baseUrl === "/") {
    return assetPath;
  }

  const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;

  return `${normalizedBaseUrl}${assetPath}`;
};
