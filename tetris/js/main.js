function Tetris() {
  this.gameEl = null
  this.nextEl = null
  this.gameDivs = []
  this.gameMartix = []
  for (let i = 0; i < 20; i ++) {
    let row = []
    for (let j = 0; j < 10; j ++) {
      // row.push(Math.floor(Math.random()*4))
      row.push(0)
    }
    this.gameMartix.push(row)
  }
  this.nextDivs = []
  this.nextMartix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
  
  this.currentSquare = null
  this.nextSquare = null
  
  
  this.render = function() {
    for (let i = 0; i < this.gameMartix.length; i ++) {
      let row = document.createElement('div') 
      row.setAttribute('class', 'row')
      let rowDivs = []
      for (let j = 0; j < this.gameMartix[i].length; j ++) {
        let cell = document.createElement('div')
        cell.setAttribute('class', 'col')
        row.appendChild(cell)
        rowDivs.push(cell)
      }
      this.gameEl.appendChild(row)
      this.gameDivs.push(rowDivs)
    }
  }
  
  this.refresh = function() {
    for (let i = 0; i < this.gameMartix.length; i ++) {
      for (let j = 0; j < this.gameMartix[i].length; j ++) {
        this.gameDivs[i][j].setAttribute('class', 'col type-'+this.gameMartix[i][j])
      }
    }
  }
  
  this.renderNext = function() {
    for (let i = 0; i < this.nextMartix.length; i ++) {
      let row = document.createElement('div') 
      row.setAttribute('class', 'row')
      let rowDivs = []
      for (let j = 0; j < this.nextMartix[i].length; j ++) {
        let cell = document.createElement('div')
        cell.setAttribute('class', 'col')
        row.appendChild(cell)
        rowDivs.push(cell)
      }
      this.nextEl.appendChild(row)
      this.nextDivs.push(rowDivs)
    }
  }
  
  this.refreshNext = function() {
    for (let i = 0; i < this.nextMartix.length; i ++) {
      for (let j = 0; j < this.nextMartix[i].length; j ++) {
        this.nextDivs[i][j].setAttribute('class', 'col type-'+this.nextMartix[i][j])
      }
    }
  }
}
Tetris.prototype.init = function() {
  this.render()
  this.renderNext()
  
  this.currentSquare = new Square()
  this.nextSquare = new Square()
  this.nextMartix = this.nextSquare.martix
  
  this.currentSquare.origin.x = 10
  this.currentSquare.origin.y = 5
  this.setData()
  this.refresh()
  this.refreshNext()
  
}
// 检查方块位置合法性
Tetris.prototype.checkData = function(origin, x, y) {
  if (origin.x + x < 0) {
    // 超出上边界
    return false
  } else if (origin.x + x >= this.gameMartix.length) {
    // 超出下边界
    return false
  } else if (origin.y + y < 0) {
    // 超出左边界
    return false
  } else if (origin.y + y >= this.gameMartix[0].length) {
    // 超出右边界
    return false
  } else if (this.gameMartix[origin.x + x][origin.y + y] === 1) {
    // 碰到方块
    return false
  } else {
    return true
  }
}
// 清除方块数据
Tetris.prototype.clearData = function() {
  let tempMartix = this.currentSquare.martix
  let tempOrigin = this.currentSquare.origin
  console.log(tempOrigin)
  for (let i = 0; i < tempMartix.length; i ++) {
    for (let j = 0; j < tempMartix.length; j ++) {
      // console.log(this.checkData(tempOrigin, i, j))
      if (this.checkData(tempOrigin, i, j)) {
        console.log(1)
        this.gameMartix[tempOrigin.x + i][tempOrigin.y + j] = 0          
      }
    }
  }
}
// 设置方块数据
Tetris.prototype.setData = function() {
  let tempMartix = this.currentSquare.martix
  let tempOrigin = this.currentSquare.origin
  console.log(tempOrigin)
  for (let i = 0; i < tempMartix.length; i ++) {
    for (let j = 0; j < tempMartix.length; j ++) {
      if (this.checkData(tempOrigin, i, j)) {
        this.gameMartix[tempOrigin.x + i][tempOrigin.y + j] = tempMartix[i][j]
      }
    }
  }
} 

Tetris.prototype.up = function() {
}

Tetris.prototype.down = function() {
  this.clearData()
  this.currentSquare.origin.x += 1
  console.log(this.currentSquare.origin)
  this.setData()
  this.refresh()
}

Tetris.prototype.left = function() {
  
}

Tetris.prototype.right = function() {
  
}

Tetris.prototype.rotate = function() {
  
}