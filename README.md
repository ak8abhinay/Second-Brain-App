Second Brain: Backend Engine

Goal:
The primary objective of this project was building a "type-first" backend where the database models (MongoDB) and the API responses are strictly typed to prevent runtime errors and ensure data integrity.

Tech Stac
Runtime: Node.js
Language: TypeScript 
Framework: Express.js
Database: MongoDB with Mongoose 
Authentication: JWT / Bcrypt for password hashing
Validation: Zod

Features
Utilized TypeScript interfaces alongside Mongoose schemas to ensure end-to-end type safety from the database to the API response.
Clean separation of concerns using a Controller-Service-Model pattern.
Efficient handling of "Brain" content, including notes, tags, and categorical filtering.
Implemented middleware for protected routes and password encryption.


The project follows a modular structure:
- Models: Defined MongoDB schemas with TypeScript types.
- Controllers: Logic for handling HTTP requests and status codes.
- Middleware: Centralized error handling and authentication checks.
- Routes: Cleanly mapped API endpoints.
