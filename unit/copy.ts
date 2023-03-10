// copy 复制函数
export const copyText = (copyTxt: string) => {
    // 新版复制文本方案，只支持localhost / https /127.0.0.1 
    if (navigator.clipboard && window.isSecureContext) {
        return navigator?.clipboard?.writeText(copyTxt)
    } else {
        let textArea = document.createElement("textarea");
        textArea.value = copyTxt;
        textArea.style.position = "absolute";
        textArea.style.opacity = '0';
        textArea.style.transform = "translate(-200%, -200%)";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((res, rej) => {
            document.execCommand('copy') ? res(null) : rej();
            textArea.remove();
        });
    }
}