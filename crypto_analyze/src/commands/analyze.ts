import { Command, flags } from '@oclif/command';
import FileService from '../services/file.service';

export default class Analyze extends Command {
  private fileService = new FileService();
  private loadedFile = '';

  static description = 'analyze file - pass whole path to file';

  static flags = {
    help: flags.help({ char: 'h' }),
    path: flags.string({ char: 'p', description: 'file path' })
  };

  static args = [{ name: 'file' }];

  async run() {
    const { args, flags } = this.parse(Analyze);
    const path = flags.path ?? '';

    if (!path) {
      return;
    }

    this.fileService.readFile(path).then(data => {
      if (data) {
        this.fileService.analyzeFile(data);
      }
    });
  }
}
