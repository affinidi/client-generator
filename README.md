# Client Generator

Simply invoke the "generate" script with the name of the desired repo, a folder to output the client folder into, and an optional URL for the OpenAPI documentation (defaults to http://localhost:3000/documentation/json):

```
./generator issuer-phone-twilio /my/packages

# or 

./generator issuer-phone-twilio /my/packages http://localhost:3000/documentation/json
```

The `FORCE_OVERWRITE` env var can also be specified to force overwriting an existing package.
