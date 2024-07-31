using System.Net;
using System.Net.Sockets;
using Umbraco.Cms.Infrastructure.Persistence.FaultHandling;

namespace bed.FaultHandling
{
    public class HttpClientErrorDetectionStrategy : ITransientErrorDetectionStrategy
    {
        public bool IsTransient(Exception ex)
        {
            if (ex.InnerException is HttpRequestException)
            {
                var inner = ex.InnerException as HttpRequestException;

                // test for 5xx errors
                if ((inner?.StatusCode.GetValueOrDefault() ?? 0) >= (HttpStatusCode)500) return true;

                // test for socket exception (no one was listening)
                if (inner?.InnerException is SocketException) return true;
            }

            return false;
        }
    }
}