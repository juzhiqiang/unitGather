// 缓动滚动到页面顶部
export const scrollTop = (): void => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

// 滚动到页面底部
export const scrollBottom = (): void => {
  window.scrollTo({
    top: document.documentElement.offsetHeight,
    left: 0,
    behavior: "smooth",
  });
};

// 将指定内容滚动到可视区
export const scrollView = (element: HTMLElement) => {
  element.scrollIntoView({
    behavior: "smooth",
  });
};
