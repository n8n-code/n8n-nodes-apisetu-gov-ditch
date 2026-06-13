import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovDitchApi implements ICredentialType {
        name = 'N8nDevApisetuGovDitchApi';

        displayName = 'Apisetu Gov Ditch API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovDitch/apisetu-gov-ditch.svg', dark: 'file:../nodes/ApisetuGovDitch/apisetu-gov-ditch.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/ditch/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/ditch/v3',
                        description: 'The base URL of your Apisetu Gov Ditch API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
