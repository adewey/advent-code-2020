const validators = [
    [ "byr", /* (Birth Year) */ (value) => !isNaN(value) && value >= 1920 && value <= 2002 ],
    [ "iyr", /* (Issue Year) */ (value) => !isNaN(value) && value >= 2010 && value <= 2020 ],
    [ "eyr", /* (Expiration Year) */ (value) => !isNaN(value) && value >= 2020 && value <= 2030 ],
    [ "hgt", /* (Height) */ (value) => {
        const [_, height, unit] = value.match(/^(\d+)(in|cm)$/) || [];
        if (unit === "in") {
            return height >= 59 && height <= 76;
        }
        if (unit === "cm") {
            return height >= 150 && height <= 193
        }
    } ],
    [ "hcl", /* (Hair Color) */ (value) => value.match(/^#[0-9a-f]{6}$/) ],
    [ "ecl", /* (Eye Color) */ (value) => value.match(/^amb|blu|brn|gry|grn|hzl|oth$/) ],
    [ "pid", /* (Passport ID) */ (value) => value.match(/^[0-9]{9}$/) ],
    // "cid", // (Country ID) not required
];

const validPassport = (passport, strict) => validators.every(([identifier, validate]) => strict
    ? passport[identifier] && validate(passport[identifier])
    : passport[identifier])


const formatPassports = (passportFile) => {
    const passports = [];
    let nPassports = 0;
    for (const line of passportFile) {
        if (!line.length) {
            nPassports++;
            continue;
        }
        const pairs = line.split(" ");
        passports[nPassports] = {
            ...passports[nPassports],
            ...pairs.reduce((acc, pair) => {
                const [key, value] = pair.split(":")
                return ({
                    ...acc,
                    [key]: value,
                })
            }, {})
        };
    }
    return passports;
}

export default (passportFile, strict = false) => formatPassports(passportFile).map(passport => !!validPassport(passport, strict)).filter(valid => valid).length;
