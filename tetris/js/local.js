function Local() {
  let game = new Tetris()
  game.gameEl = document.querySelector('.wrap')
  game.nextEl = document.querySelector('.next')
  document.querySelector('.control').addEventListener('click', function() {
    let target = event.target
    let key = target.getAttribute('data-key')
    switch (key) {
      case 'up':
        game.up()
        break
      case 'down':
        game.down()
        break
      case 'left':
        game.left()
        break
      case 'right':
        game.right()
        break
      case 'rotate':
        game.rotate()
        break
    }
  })
  game.init()
}