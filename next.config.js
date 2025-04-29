/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

 webpack: (config) => {
   const rules = config.module.rules
     .find((rule) => typeof rule.oneOf === 'object')
    .oneOf.filter((rule) => Array.isArray(rule.use));

   rules.forEach((rule) => {
     if (rule.test && rule.test.toString().includes('module')) {
       rule.use.forEach((moduleLoader) => {
         if (moduleLoader.loader && moduleLoader.loader.includes('css-loader')) {
           moduleLoader.options.modules = {
             ...moduleLoader.options.modules,
             // This ensures class names are more deterministic
             localIdentName: '[local]__[hash:base64:5]',
           };
         }
       });
     }
   });
  
   return config;
 },
};

module.exports = nextConfig;
