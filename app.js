"use strict";

const container = document.querySelector('.content')

const createFlower = () => {
  const flower = document.createElement('span')
  flower.className = 'flower'

  const minSize = 60
  const maxSize = 100

  let flowerSize = Math.random() * (maxSize - minSize) + minSize

  flower.style.width = flowerSize + 'px'
  flower.style.height = flowerSize + 'px'

  flower.style.left = Math.random() * 100 + '%'

  container.appendChild(flower)

  setTimeout(() => {
    flower.remove()
  }, 10000)
}

setInterval(createFlower, 100)
