/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_PASSWORD_HASH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
