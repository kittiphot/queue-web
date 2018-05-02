import { PrintqueueModule } from './Printqueue.module';
import { PrintqueueComponent } from './Printqueue.component';



describe('PrintqueueModule', () => {
    let PrintqueueModule: PrintqueueModule;

    beforeEach(() => {
        PrintqueueModule = new PrintqueueModule();
    });

    it('should create an instance', () => {
        expect(PrintqueueModule).toBeTruthy();
    });
});
