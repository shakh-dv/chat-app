import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import {IncomingMessage} from 'http';

import {Server, WebSocket} from 'ws';


@WebSocketGateway(4040)
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {


  @WebSocketServer()
  server!: Server;


  async handleConnection(
    webSocket: WebSocket,
    request: IncomingMessage
  ): Promise<void> {
    console.log('привет');
  }

  handleDisconnect(websocket: WebSocket): void {

  }

  @WebSocketServer()
  @SubscribeMessage('newMessage')
  handleNewMessages(@MessageBody() message: string) {
    console.log(message);

    this.server.emit('reply', 'broadcasting...');
  }
}
