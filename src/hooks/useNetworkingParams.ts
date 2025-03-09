import { useMemo } from "react";

import { PRODUCTION, STAGING } from "../constants/environments";

export const getBaseUrl = (env: ImportMetaEnv) => {
  if (env.ENVIRONMENT === STAGING) {
    return `https://${env.API_URL.STAGING}`;
  }
  if (env.ENVIRONMENT === PRODUCTION) {
    return `https://${env.API_URL.PROD}`;
  }
  return `https://${env.API_URL.DEV}`;
};

export const useNetworkingParams = () => {
  const env = import.meta.env;

  const baseUrl = useMemo(() => {
    if (!env) return "";
    return getBaseUrl(env);
  }, [env]);

  return { baseUrl, env: env?.ENVIRONMENT } as const;
};
