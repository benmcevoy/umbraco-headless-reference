using Umbraco.Cms.Infrastructure.Persistence.FaultHandling;

namespace bed.FaultHandling
{
    public class RetryPolicyFactory
    {
        public RetryPolicy GetDefaultHttpRequestErrorRetryPolicy()
        {
            var retryStrategy = RetryStrategy.DefaultFixed;
            var retryPolicy = new RetryPolicy(new HttpClientErrorDetectionStrategy(), retryStrategy);

            return retryPolicy;
        }
    }
}