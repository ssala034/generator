/**
 * @jest-environment node
 */

const path = require('path');
const { readFile } = require('fs').promises;
const Generator = require('@asyncapi/generator');
const asyncapi_v3_path_postman = path.resolve(__dirname, '../../../test/__fixtures__/asyncapi-postman-echo.yml');
const asyncapi_v3_path_hoppscotch = path.resolve(__dirname, '../../../test/__fixtures__/asyncapi-hoppscotch-client.yml');
const testResultPath = path.resolve(__dirname, './temp/snapshotTestResult');
const testResultPathPostman = path.join(testResultPath, 'client_postman');
const testResultPathHoppscotch = path.join(testResultPath, 'client_hoppscotch');
const template = path.resolve(__dirname, '../');


const testPostmanOutputFiles = ['PostmanEchoWebSocketClient.java', 'PostmanEchoWebSocketClientConnector.java'];
const testHoppscotchClientOutputFiles = ['HoppscotchEchoWebSocketClient.java', 'HoppscotchEchoWebSocketClientConnector.java'];


describe('testing if generated client match snapshot', () => {
  jest.setTimeout(100000);

  it('generate simple client for postman echo', async () => {
    const generator = new Generator(template, testResultPathPostman, {
        forceWrite: true,
        templateParams: {
            server: 'echoServer',
            clientFileName: testPostmanOutputFiles[0],
            appendClientSuffix: false
        }
    });

    await generator.generateFromFile(asyncapi_v3_path_postman);

    for(const testOutputFile of testPostmanOutputFiles) {
        const extraPath = 'src/main/java/com/asyncapi';
        const testOutputFilePath = path.join(extraPath, testOutputFile);
        const filePath = path.join(testResultPathPostman, testOutputFilePath);
        const content = await readFile(filePath, 'utf8');
        expect(content).toMatchSnapshot(testOutputFile);   
    }
  });

  it('generate simple client for hoppscotch echo', async () => {
    const generator = new Generator(template, testResultPathHoppscotch, {
        forceWrite: true,
        templateParams: {
          server: 'echoServer',
          clientFileName: testHoppscotchClientOutputFiles[0]
        }
    });

    await generator.generateFromFile(asyncapi_v3_path_hoppscotch);
    
    for(const testOutputFile of testHoppscotchClientOutputFiles) {
        const extraPath = 'src/main/java/com/asyncapi';
        const testOutputFilePath = path.join(extraPath, testOutputFile);
        const filePath = path.join(testResultPathHoppscotch, testOutputFilePath);
        const content = await readFile(filePath, 'utf8');
        expect(content).toMatchSnapshot(testOutputFile);   
    }

   
  });


});
