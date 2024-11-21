# GraphOS Webhook Listener

Example code that listens to a GraphOS webhook notification

The code in this repository is experimental and has been provided for reference purposes only. Community feedback is welcome but this project may not be supported in the same way that repositories in the official Apollo GraphQL GitHub organization are. If you need help you can file an issue on this repository, contact Apollo to talk to an expert, or create a ticket directly in Apollo Studio.

## What's Inside
The code that lives in `api/webhook.ts` is example Typescript code for a [Vercel Function](https://vercel.com/docs/functions) that can be called by GraphOS Studio when a new supergraph is built.
This is an example in Vercel, but you could apply this code or logic to any runtime, serverless or not, you just need a public endpoint for GraphOS to call.

Inside the function we validate that it is a proper build notification and there are no composition errors, then fetch the schema from the provided url.
Once we have the schema we could do a number of things such as:

* Save the file to an external store on our cloud as a duplicate copy of GraphOS
* Pass the schema to a [GraphOS Router](https://www.apollographql.com/docs/graphos/reference/router/configuration) via the `--supergraph` flag
* Send another notification to some other system like Slack or email that a new supergraph has launched

### Run Locally

* Clone the repo
* Install the latest LTS version of Node (see [nvm](https://github.com/nvm-sh/nvm))
* Install dependencies
    ```bash
    npm install
    ```
* Start the app using the Vercel CLI locally:
    ```bash
    npm run vercel
    ```

## Endpoints

- `/api/hello` Simple test endpoint that returns a hello world message
- `/api/webhook` Example Webhook that understands [GraphOS Build Notifications](https://www.apollographql.com/docs/graphos/platform/insights/notifications/build-status)
