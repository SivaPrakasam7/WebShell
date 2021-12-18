export const Functions: { [key: string]: (data: string[]) => void } = {
  tag: (tag) =>
    `[...new Set(document.querySelectorAll('${tag[0]}'))].map((item) =>Object.assign(item.textContent?.trim().length? { text:item.textContent?.trim() }: {},...[...new Set(item.attributes)].map((attr) => ({[attr.nodeName]: attr.value})).filter((item) => Object.values(item)[0].length))).filter((item) => Object.keys(item).length)`,
};
