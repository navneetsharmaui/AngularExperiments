import { async, TestBed } from '@angular/core/testing';
import { TodoListShellModule } from './todo-list-shell.module';

describe('TodoListShellModule', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [TodoListShellModule],
		}).compileComponents();
	}));

	it('should create', () => {
		expect(TodoListShellModule).toBeDefined();
	});
});
