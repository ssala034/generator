import { ClientFields } from "./ClientFields.js";
import { Constructor } from "./Constructor.js";
import HandleError from "./HandleError.js";
import OnClose from "./OnClose.js";
import OnOpen from "./OnOpen.js";
import OnTextMessageHandler from "./OnTextMessageHandler.js";
import { Text } from '@asyncapi/generator-react-sdk';


export function EchoWebSocket({ clientName, pathName, title, queryParams, operations }) {
  const sendOperations = operations.filterBySend();
  if(!pathName){
    pathName = '/';
  }

  console.log("EchoWebSocket:", queryParams);

  return (
    <Text>
      <Text newLines={2}>
        {`@WebSocketClient(path = "${pathName}")  
public class ${clientName}{`}
      </Text>
      <ClientFields queryParams={queryParams}/>
      <Constructor clientName={clientName} query={queryParams} />
      <OnOpen title={title}/>
      <OnTextMessageHandler sendOperations={sendOperations}/>
      <HandleError/>
      <OnClose title={title} />
    </Text>
  );
}

/**
 * 
 * for slack
 * need to make sure the moidels and equals are properly
 * 
 * and need the query parameters in the constructor for the ticket and app_id that is how I can connect
 * 
 * need to incorporate that part in the connector class!!!
 */