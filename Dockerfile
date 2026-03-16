FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["VaultStream.Api/VaultStream.Api.csproj", "VaultStream.Api/"]
COPY ["VaultStream.Application/VaultStream.Application.csproj", "VaultStream.Application/"]
COPY ["VaultStream.Domain/VaultStream.Domain.csproj", "VaultStream.Domain/"]
COPY ["VaultStream.Infrastructure/VaultStream.Infrastructure.csproj", "VaultStream.Infrastructure/"]
RUN dotnet restore "VaultStream.Api/VaultStream.Api.csproj"
COPY . .
WORKDIR "/src/VaultStream.Api"
RUN dotnet build "VaultStream.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "VaultStream.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "VaultStream.Api.dll"]
