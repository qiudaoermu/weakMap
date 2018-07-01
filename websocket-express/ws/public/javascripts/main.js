$(() => {
    const socket = io.connect('http://localhost:3003')
    socket.on('open', () => {
        console.log('已链接')
        socket.send('客户端链接成功😀')
    })
    socket.on('test', (json) => {
          console.log('test', json)
    })
})
