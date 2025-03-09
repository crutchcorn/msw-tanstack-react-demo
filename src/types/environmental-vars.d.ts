interface ImportMeta {
  env: {
    ENVIRONMENT?: string;
    API_URL: {
      PROD: string;
      DEV: string;
      STAGING: string;
    };
  };
}
