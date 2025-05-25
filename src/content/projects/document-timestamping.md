---
title: Document Timestamping System
---

The goal of this project is to provide a service that allows users to upload documents and receive cryptographic proof that the document existed in its original form at the time of upload.  

The project uses Java Spring Boot for the server with a PostgreSQL database.

The user is able to upload a document to the server, and the server will:
1. Generate a SHA-512 hash of the document
2. Append a trusted timestamp
3. Create a combined hash of both values
4. Digitally sign this hash using a private RSA key

As proof of existence, the user receives:
- The encrypted signature (signed hash)
- The exact timestamp
- The server's public key for verification
- Ready-to-use Java code that implements the same hashing algorithm, allowing independent verification

To make interacting with the service simpler, this project includes a React front-end.

You can find the source code and more details about the project [here](https://github.com/f-vojnovski/document-timestamping).

Developed by me and Jovan Canevski.