import { APIGatewayProxyEvent, APIGatewayProxyResultV2, Handler } from 'aws-lambda';
import * as _ from 'lodash';

export const handler: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2> => {
    const max = 100;
    const val = _.random(10, max)
    const response = {
        statusCode: 200,
        body: `Your random value is ( max: ${max}) is ${val}`,
    };
    return response;
};