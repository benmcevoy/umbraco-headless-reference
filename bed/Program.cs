using bed;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

var umbracoBuilder = builder.CreateUmbracoBuilder();

// config is also registered with DI but it is awkward to resolve here
var config = umbracoBuilder.Config.GetSection("bed").Get<bed.Shared.Configuration>()!;

if (!config.IsWebsiteDisabled) umbracoBuilder.AddWebsite();

umbracoBuilder
    // backoffice must always be added or execption
    .AddBackOffice()
    .AddDeliveryApi()
    .AddComposers()
    .AddModelsBuilder()
    .Build();

WebApplication app = builder.Build();

await app.BootUmbracoAsync();

app.UseUmbraco()
    .WithMiddleware(u =>
    {
        if (!config.IsBackOfficeDisabled) u.UseBackOffice();
        if (!config.IsWebsiteDisabled) u.UseWebsite();
    })
    .WithEndpoints(u =>
    {
        if (!config.IsBackOfficeDisabled) u.UseBackOfficeEndpoints();
        if (!config.IsWebsiteDisabled) u.UseWebsiteEndpoints();
    });

await app.RunAsync();


