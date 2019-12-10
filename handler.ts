import { APIGatewayEvent, Callback, Context, Handler } from "aws-lambda";
import { IRequestBody } from "./domain/payload";

export const getInputs: Handler = async (
  event: APIGatewayEvent,
  context: Context,
  callback?: Callback) => {
  let requestBody;
  if (event.pathParameters.greetings) {
    requestBody = event.pathParameters.greetings;
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: `Input is ${requestBody}`,
        },
      ),
    };
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          message: `No pathParameters received`,
        },
      ),
    };
  }

};

export const hello: Handler = async (
  event: APIGatewayEvent,
  context: Context,
  callback?: Callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello Tri`,
      },
    ),
  };
};

export const byebye: Handler = async (
  event: APIGatewayEvent,
  context: Context,
  callback?: Callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `ByeBye Tri`,
      },
    ),
  };
};

export const noInputs: Handler = async (
  event: APIGatewayEvent,
  context: Context,
  callback?: Callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `No Input received. Tri`,
      },
    ),
  };
};
