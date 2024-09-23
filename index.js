function countCharacter (str, char) {
  return (str.match(new RegExp(char, 'g')) || []).length
}

function repeatCounter () {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question('Input a string: ', str => {
    readline.question('Input a character: ', char => {
      if (str.length !== 0) {
        const count = countCharacter(str, char)
        console.log(`The character '${char}' appears ${count} times in the string.`)
        readline.close()
      } else {
        console.log('The string is null')
        readline.close()
      }
    })
  })
}
repeatCounter()
module.exports = { countCharacter, repeatCounter }
