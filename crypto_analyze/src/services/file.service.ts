import * as fs from 'fs';
import * as path from 'path';
import * as _ from 'lodash';

const fsPromises = fs.promises;

class FileService {

    public async readFile(filepath: string): Promise<string> {
        return fsPromises.readFile(path.join(filepath), "utf8");
    }

    public analyzeFile(data: any) {
        let conjs: string[] = [];
        let analizedText: any = {};

        data.split(' ').map((elem: string) => {
            elem.length == 1 && !conjs.includes(elem) ? conjs.push(elem) : '';
            elem.split('').map((char: string) => {
                analizedText[char] = analizedText[char] ? analizedText[char] + 1 : 1;
            })
        });

        console.log("Conjs:", conjs);
        console.log("Letters count:", analizedText);
    }

    public decodeFile(data: string) {
        let alphabet: any = {
            "b": "a", "a": "e", "q": "i", "j": "o",
            "v": "z", "k": "n", "s": "l", "e": "s",
            "o": "c", "p": "r", "f": "y", "i": "w",
            "n": "t", "t": "k", "l": "m", "c": "d",
            "g": "p", "u": "j", "z": "u", "h": "b",
            "m": "g", "d": "h", "y": "f", "r": "q",
            "w": "v", "x": "x", " ": " "
        }

        let textConverted: string[] = [];
        data.split('   ').map((word: string) => {
            word.split('').map((char: string) => {
                textConverted.push(alphabet[char]);
            });
            textConverted.push('');
        });

        console.log('Decoded text:\n', textConverted.join(' '));
    }
}


export default FileService;