# Unhandled Errors in Node.js HTTP Server

This repository demonstrates a common error in Node.js: neglecting proper error handling in HTTP servers.  The initial `bug.js` file showcases a basic server without error handling.  The improved `bugSolution.js` provides a solution that gracefully handles potential errors.

## Bug

The `bug.js` server lacks error handling mechanisms. If an error occurs (e.g., port in use, system issues), the server will likely crash without providing any informative error messages.

## Solution

The `bugSolution.js` file demonstrates robust error handling. It uses the `error` event listener to capture and log errors, ensuring the server remains operational and provides useful debugging information.