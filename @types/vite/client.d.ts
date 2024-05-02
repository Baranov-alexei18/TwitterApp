/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly [s:string]: string,
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
