import { Command, flags } from '@oclif/command';
import FileService from '../services/file.service';

export default class Decode extends Command {
    private fileService = new FileService();

    static description = 'docode file - pass file path';

    static flags = {
        help: flags.help({ char: 'h' }),
        path: flags.string({ char: 'p', description: 'file path' })
    };

    static args = [{ name: 'file' }];

    async run() {
        const { args, flags } = this.parse(Decode);
        const path = flags.path ?? '';

        if (!path) {
            return;
        }

        this.fileService.readFile(path).then(data => {
            if (data) {
                this.fileService.decodeFile(data);
            }
        });
    }
}
