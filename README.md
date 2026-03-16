# Secure Software Distribution Platform (VaultStream)

A Clean Architecture, cloud-native enterprise API for secure software package distribution.

## Architecture & Stack
- **.NET 8 Web API**: Central application backend.
- **PostgreSQL**: Persistence layer managed via EF Core.
- **Azure Blob Storage**: Cloud storage for software package binaries.
- **Azure CDN**: Distributed downloads via securely signed, time-limited URLs.
- **Docker & Kubernetes**: Completely containerized deployment ready for K8s clusters.

## Features
- JWT Bearer Authentication and Role-Based Access.
- Automatic SHA256 checksum validation upon file upload.
- Time-limited expiring access links protecting payload.
- Download logging mapped to User IDs and IP tracking.

## Deployment
1. Start locally with `docker-compose up -d --build`. The API is immediately available alongside the PostgreSQL instance.
2. Production is deployed with `kubectl apply -f k8s/` orchestrating pods, services, and Ingress proxies.
