# Umbraco Headless Reference

Ubraco reference implentation for my own reference and learning.  I have chosen to implement a headless system, as it forces me to practice with NextJs etc.  I'm not really a front end dev :)

## Umbraco backend

Using Umbraco v13 LTS.  

- Enable/disable backoffice and or umbraco website to improve security and scaling options.
- [uSync](https://docs.jumoo.co.uk/usync/intro) serialization of items to enable CI/CD scenarios.
- Expose umbraco [content API with additional type information](https://github.com/ByteCrumb/Umbraco.Community.DeliveryApiExtensions) to allow generation of OpenAPI client and TypeScript types.
- Publish events to clients for content updates, e.g. cache invalidation.

Refer to the `appSettings.json` for an idea of available features.

## NextJs front end

- [NextJs](https://nextjs.org/) front end, [NextUI+tailwind](https://nextui.org/) component library. 
- Automatically [generated OpenAPI client](https://github.com/hey-api/openapi-ts) and types.

Refer to the `.env` file for an idea of features.

