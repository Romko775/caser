import {Injectable} from '@angular/core';

@Injectable()
export class CaseService {

  private transliterate(letter) {
    // small letters
    if (letter === 'q') {
      return 'й';
    }
    if (letter === 'w') {
      return 'ц';
    }
    if (letter === 'e') {
      return 'у';
    }
    if (letter === 'r') {
      return 'к';
    }
    if (letter === 't') {
      return 'е';
    }
    if (letter === 'y') {
      return 'н';
    }
    if (letter === 'u') {
      return 'г';
    }
    if (letter === 'i') {
      return 'ш';
    }
    if (letter === 'o') {
      return 'щ';
    }
    if (letter === 'p') {
      return 'з';
    }
    if (letter === '[') {
      return 'х';
    }
    if (letter === ']') {
      return 'ї';
    }
    if (letter === 'a') {
      return 'ф';
    }
    if (letter === 's') {
      return 'і';
    }
    if (letter === 'd') {
      return 'в';
    }
    if (letter === 'f') {
      return 'а';
    }
    if (letter === 'g') {
      return 'п';
    }
    if (letter === 'h') {
      return 'р';
    }
    if (letter === 'j') {
      return 'о';
    }
    if (letter === 'k') {
      return 'л';
    }
    if (letter === 'l') {
      return 'д';
    }
    if (letter === ';') {
      return 'ж';
    }
    if (letter === '\'') {
      return 'є';
    }
    if (letter === '\\') {
      return 'ґ';
    }
    if (letter === 'z') {
      return 'я';
    }
    if (letter === 'x') {
      return 'ч';
    }
    if (letter === 'c') {
      return 'с';
    }
    if (letter === 'v') {
      return 'м';
    }
    if (letter === 'b') {
      return 'и';
    }
    if (letter === 'n') {
      return 'т';
    }
    if (letter === 'm') {
      return 'ь';
    }
    if (letter === ',') {
      return 'б';
    }
    if (letter === '.') {
      return 'ю';
    }
    if (letter === '/') {
      return '.';
    }

    // big letters
    if (letter === 'Q') {
      return 'Й';
    }
    if (letter === 'W') {
      return 'Ц';
    }
    if (letter === 'E') {
      return 'У';
    }
    if (letter === 'R') {
      return 'К';
    }
    if (letter === 'T') {
      return 'Е';
    }
    if (letter === 'Y') {
      return 'Н';
    }
    if (letter === 'U') {
      return 'Г';
    }
    if (letter === 'I') {
      return 'Ш';
    }
    if (letter === 'O') {
      return 'Щ';
    }
    if (letter === 'P') {
      return 'З';
    }
    if (letter === '{') {
      return 'Х';
    }
    if (letter === '}') {
      return 'Ї';
    }
    if (letter === 'A') {
      return 'Ф';
    }
    if (letter === 'S') {
      return 'І';
    }
    if (letter === 'D') {
      return 'В';
    }
    if (letter === 'F') {
      return 'А';
    }
    if (letter === 'G') {
      return 'П';
    }
    if (letter === 'H') {
      return 'Р';
    }
    if (letter === 'J') {
      return 'О';
    }
    if (letter === 'K') {
      return 'Л';
    }
    if (letter === 'L') {
      return 'Д';
    }
    if (letter === ':') {
      return 'Ж';
    }
    if (letter === '"') {
      return 'Є';
    }
    if (letter === '|') {
      return 'Ґ';
    }
    if (letter === 'Z') {
      return 'Я';
    }
    if (letter === 'X') {
      return 'Ч';
    }
    if (letter === 'C') {
      return 'С';
    }
    if (letter === 'V') {
      return 'М';
    }
    if (letter === 'B') {
      return 'И';
    }
    if (letter === 'N') {
      return 'Т';
    }
    if (letter === 'M') {
      return 'Ь';
    }
    if (letter === '<') {
      return 'Б';
    }
    if (letter === '>') {
      return 'Ю';
    }
    if (letter === '?') {
      return ',';
    }
    if (letter === '&') {
      return '?';
    } else {
      return letter;
    }
  }

  getTransliteration(val: string): string {
    return val.split('').map(l => this.transliterate(l)).join('');
  }

}
