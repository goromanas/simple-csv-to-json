const csvFilePath = 'example.csv'
const csv = require('csvtojson')
const fs = require('fs')

const generateTimeHash = () => Date.now()

csv({ delimiter: ';' })
  .fromFile(csvFilePath)
  .then(jsonObj => {
    fs.writeFile(`parsed-${generateTimeHash()}.json`, JSON.stringify(jsonObj), err => {
      if (err) {
        console.error('Failed')
        return
      }
      console.info('Done')
    })
  })
