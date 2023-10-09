using BookMySeat.IService;
using BookMySeat.Services;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.Configure<BookMySeatDatabaseSettings>(
                builder.Configuration.GetSection(nameof(BookMySeatDatabaseSettings)));

builder.Services.AddSingleton<IBookMySeatStoreDatabaseSettings>(sp =>
    sp.GetRequiredService<IOptions<BookMySeatDatabaseSettings>>().Value);
builder.Services.AddSingleton<IMongoClient>(s =>
        new MongoClient(builder.Configuration.GetValue<string>("BookMySeatDatabaseSettings:ConnectionStrings")));
builder.Services.AddScoped<IStationService, StationService>();
builder.Services.AddScoped<ITrainService, TrainService>();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowOrigin", builder =>
    {
        builder.WithOrigins("http://localhost:3000") // Replace with the actual frontend URL
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors("AllowOrigin");
app.MapControllers();

app.Run();
