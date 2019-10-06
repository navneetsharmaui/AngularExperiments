import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { IMessage } from '@exps/api-interfaces';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get('hello')
	getData(): IMessage {
		return this.appService.getData();
	}
}
