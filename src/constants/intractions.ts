export const Intractions: { [key: string]: (data: string[]) => void } = {
  videoPlay: (url) =>
    `(()=>{document.body.innerHTML="<video controls autoplay><source src='${url[0]}'></video>"+document.body.innerHTML})()||'Video added to the page'`,
  audioPlay: (url) =>
    `(()=>{document.body.innerHTML="<audio controls autoplay><source src='${url[0]}'></audio>"+document.body.innerHTML})()||'Audio added to the page'`,
  embed: (url) =>
    `(()=>{document.body.innerHTML="<iframe src='${url[0]}?autoplay=1' allow='autoplay' style='height: 100vh;width: 100vw;'></iframe>"+document.body.innerHTML})()||Iframe added to the page`,
  to: (url) => `window.location="${url[0]}"||'Redirection Successfull'`,
};
