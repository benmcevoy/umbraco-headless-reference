using System.Net;
using System.Net.Sockets;
using Umbraco.Cms.Infrastructure.Persistence.FaultHandling;

namespace bed.FaultHandling
{
    public class HttpClientErrorDetectionStrategy : ITransientErrorDetectionStrategy
    {
        public bool IsTransient(Exception ex)
        {
            if(IsServerError(ex)) return true;
            if(IsServerError(ex?.InnerException)) return true;
            if(IsServerError(ex?.InnerException?.InnerException)) return true;

            return false;
        }

        private static bool IsServerError(Exception? exception)
        {
            if(exception == null) return false;

            return exception switch
            {
                HttpRequestException ex => (ex?.StatusCode.GetValueOrDefault() ?? 0) >= (HttpStatusCode)500,
                SocketException _ => true,
                _ => false,
            };
        }
    }


}