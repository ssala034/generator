import { Text } from '@asyncapi/generator-react-sdk';
import { ConstructorSignature } from './ConstructorSignature';
import { DefaultConstructorSignature } from './DefaultConstructorSignature';
import { QueryParamsVariables } from './QueryParamsVariables';

export function Constructor({clientName, query}) {
  const queryParamsArray = query && Array.from(query.entries());
  if(!queryParamsArray || queryParamsArray.length === 0) {
    return
  }
  
  return (
    <>
      <DefaultConstructorSignature clientName={clientName} queryParams={queryParamsArray} />
      <ConstructorSignature clientName={clientName} queryParams={queryParamsArray} />
      <Text indent={6} >
        {`${ query ? 'params = new HashMap<>(); ' : ''}`
        }
      </Text>
      <QueryParamsVariables queryParams={queryParamsArray} />
      <Text indent={2}>
        {`}\n`}
      </Text>
    </>
  );
}


/**
 * 
 * Docs to add
 * 
 * <Text indent={2}>
        {`
      """
      Constructor to initialize the WebSocket client.

      Args:
          url (str, optional): The WebSocket server URL. Use it if the server URL is 
          different from the default one taken from the AsyncAPI document.`}
      </Text>
      <QueryParamsArgumentsDocs queryParams={queryParamsArray} />



      <Text newLines={2}>
        {`
        ${query ? 'qs = urlencode(params) if params else ""' : ''}
        ${query ? 'self.url = f"{url}{f\'?{qs}\' if qs else \'\'}"' : 'self.url = url'}`}
      </Text>

 */