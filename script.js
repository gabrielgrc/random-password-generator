const lowercaseChars = getChars(true)
const uppercaseChars = getChars(false)
const numbers = getNumbers()
const special = ["!", "@", "#", "%", "^", "*", "&", "(", ")", "-", "_"] 

function getPasswordLength() {
    const length = document.getElementById("length").value
    return Number(length)
}

function getPassordProperties() {
    const ids = ["lowercase", "uppercase", "numbers", "special"]
    const properties = {}

    for (const id of ids) {
        const element = document.getElementById(id)
        properties[id] = element.checked
    }

    return properties
}

function buildCharactersSet(properties) {
    const characters = []
    if (properties.lowercase) characters.push(...lowercaseChars)
    if (properties.uppercase) characters.push(...uppercaseChars)
    if (properties.numbers) characters.push(...numbers)
    if (properties.special) characters.push(...special)

    return characters
}

function createRandomPassword(length, characters) {
    const pwd = []
    for (let i = 0; i < length; i++) {
        const randomIdx = Math.floor(Math.random() * characters.length)
        const char = characters[randomIdx]
        pwd.push(char)
    }
    return pwd.join("")
}

function displayPassword(password) {
    document.getElementById("password").innerHTML = `<p>${password}</p>`
}

function getChars(lowercase = true, Uppercase) {
    const start = lowercase ? 97 : 65
    let chars = []

    for (let i = start; i < start + 26; i++) {
        chars.push(String.fromCharCode(i))
    }

    return chars
}

function getNumbers() {
    const nums = []

    for (let i = 0; i< 10; i++) {
        nums.push(i)
    }

    return nums
}

function generatePassword() {
    const length = getPasswordLength()
    const properties = getPassordProperties()

    const characters = buildCharactersSet(properties)
    if (characters.length === 0) {
        return alert("You must select at least one set of characters.")
    }

    const password = createRandomPassword(length, characters)
    displayPassword(password)
}
