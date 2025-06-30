import { Text } from '@asyncapi/generator-react-sdk';
import { toSnakeCase } from '@asyncapi/generator-helpers';

export default function OnTextMessage({sendOperations}) { // cuz need to have a sender for each echoer ask why don't have a receiver handler??? was it a mistake
  if (!sendOperations || sendOperations.length === 0) {
    return null;
  }

  return (
    <>
      {
        sendOperations.map((operation) => {
          const methodName = operation.id();          
          return (
            <Text newLines={2} indent={2}>
          {`@OnTextMessage
public void ${methodName}(String message, WebSocketClientConnection connection) {
    Log.info("Received text message: " + message);
  
}`}
            </Text>
          );
        })
      }
    </>
  );
}
