
## Java WebSocket Client

You can test this template (for now modifications are coming):
1. Clone the project and run `npm install`
2. Navigate to `packages/templates/clients/websocket/java/quarkus`
3. Install with `npm install` and run test with `npm run test`
4. Navigate back to `./generator`
5. Generate the template client with `node .\apps\generator\cli.js .\packages\templates\clients\websocket\test\__fixtures__\asyncapi-postman-echo.yml .\packages\templates\clients\websocket\java\quarkus\ -o outputClient --force-write --param server=echoServer`
6. Navigate to `outputClient` or any other name you gave the output folder
7. Run `mvn quarkus:dev`
8. See the output in the terminal

## **NOTE:**
- Currently only supports asyncapi-postman-echo.yml AsyncApi Document

## Todo
- Generate Test
- Support slack AsyncAPI document


_____
still need validate hopscotch server --> (especially with the undecisive of using websocekt server or webscoket client with quakurs)

Are we gonna even do server or all this just clients

ask why receive is not implemented

make it all green on the test

Move to slack after that