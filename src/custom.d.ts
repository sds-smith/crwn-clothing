declare module "*.svg" {
    import React = require('react')
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export const content: any;
  }

  declare namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_STRIPE_PUBLISHABLE_KEY: string
      STRIPE_SECRET_KEY: string
    }
    export const content: any;
  }
  