import { Injectable } from '@nestjs/common';
import { IMessage } from '@exps/api-interfaces';

@Injectable()
export class AppService {
	getData(): IMessage {
		return { message: 'Welcome to SoulfulBackend!' };
	}
}
