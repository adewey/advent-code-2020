export const sledValidation = (password) => {
    if (!password) return;
    const regex = /^(\d+)-(\d+)\s(.):\s(.+)$/;
    //              min   max    char  password
    const [_, min, max, char, passwd] = password.match(regex);
    const filteredChars = passwd.match(new RegExp(char, "g")) || [];
    return filteredChars.length >= min && filteredChars.length <= max;
}

export const tobogganValidation = (password) => {
    if (!password) return;
    const regex = /^(\d+)-(\d+)\s(.):\s(.+)$/;
    //              pos1  pos2   char  password
    const [_, pos1, pos2, char, passwd] = password.match(regex);
    const char1 = passwd[pos1 - 1];
    const char2 = passwd[pos2 - 1];
    return (char1 === char && char1 !== char2) || (char2 === char && char1 !== char2);
}

export default (passwordList, validator = sledValidation) => passwordList.filter(password => validator(password)).length
