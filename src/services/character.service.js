const { getDomFromURL, getTextContent} = require('./src/utils/dom.utils')

const url = `https://secure.tibia.com/community/?subtopic=characters&name=hue+proliferator`
const dom = getDomFromURL(url)

dom.then(dom =>{
  const playerNameSelector = `#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(2)`
  const playerName = getTextContent(dom, playerNameSelector)
  console.log(playerName)
})
