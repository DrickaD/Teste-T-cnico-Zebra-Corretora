export const CesarCipher = (text: string, shift: number): string => {
    let hashName = '';
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char.match(/[a-z]/i)) {
        let code = text.charCodeAt(i);
        let limit = char === char.toLowerCase() ? 97 : 65;
        char = String.fromCharCode(((code - limit + shift) % 26) + limit);
      }
      hashName += char;
    }
    return hashName;
  }