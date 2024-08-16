# Content Events

Publish events to remote servers.

Refer to the `Composer` to see what events are supported.

The remote server must expose an HTTP endpoint that can accept an `IApiContent` payload.

A header `x-secret` is required to authenticate the caller (umbraco) to the remote endpoint.

This implementation could be replaced by the WebHooks feature of Umbraco, but this implementation is preferred as it can be entirely congfigured in the CI/CD pipeline.  This ensures:

- secrets are not held in umbraco content
- webhook definitions cannot accidently be restore from production to e.g. UAT.  If that happens then UAT could potentially publish events to a production server.

In all cases care should be taken to configure CORS to mitigate this issue.  e.g. Configure CORS on the remote server to only accept requests from production.

The nextjs implementation has the corresponding endpoint `/app/api/cache/invalidate` with support for both the `X-Secret` header and CORS.