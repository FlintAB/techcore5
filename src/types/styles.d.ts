declare module '*.module.css' {
   const classes: Readonly<Record<string, string>>;

   // eslint-disable-next-line import/no-default-export
   export default classes;
}

declare module '*.css';