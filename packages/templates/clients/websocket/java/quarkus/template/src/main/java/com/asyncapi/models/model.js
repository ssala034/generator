import { JAVA_COMMON_PRESET } from '@asyncapi/modelina';
import { Models } from '../../../../../../../../../../../../components/src/components/models.js';

export default async function({ asyncapi }) {
  const imports = [
    'import io.quarkus.websockets.next.WebSocket;',
    'import io.quarkus.websockets.next.Service;'
  ];

  const websocketJavaPreset = {
    class: {
      self({ content, dependencyManager }) {
        return `package com.asyncapi.model;\n\n@Websocket\n${content}`;
      },
      property({ content, property }) {
        // console.log('property:', property);
        // console.log('content:', content);
        if (property.property && property.property.type === 'Integer') {
          return `@Service\n${content}`;
        }
        return content;
      },
      additionalContent({content, property }){
        // console.log('additionalContent:', content);
        // console.log('property:', property);
        // add extra methods or properties here if needed
        return content;
      }
    }
  };

  const combinedPresets = [
    {
      preset: JAVA_COMMON_PRESET,
      options: {
        equal: true,
        hashCode: false,
        classToString: true,
        marshalling: false
      }
    },
    websocketJavaPreset
  ];

  return await Models({ asyncapi, language: 'java', format: 'toPascalCase', presets: combinedPresets});
}



/**
 * 
 * Old Code:
 * 
 *  
  @Override
  public boolean equals(Object o) {
      if (this == o) {
          return true;
      }
      if (o == null || getClass() != o.getClass()) {
          return false;
      }
      Name event = (Nmae) o;
      return Objects.equals(this.payload, event.payload);
  }
 */