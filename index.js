// 显示一个提醒消息
alert('中秋将至，愿您诸事顺遂！');

// 当文档内容完全加载和解析完成后执行以下函数
document.addEventListener('DOMContentLoaded', () => {
    // 获取页面上 ID 为 'countdown' 的元素，用于显示倒计时
    const countdownElement = document.getElementById('countdown');

    // 定义更新倒计时的函数
    function updateCountdown() {
        const now = new Date();
        const year = now.getFullYear();
        const targetDate = new Date(year, 8, 17, 0, 0, 0); // 目标日期：9月17号的0点
        
        // 如果当前时间已经超过目标日期
        if (now > targetDate) {
            countdownElement.innerHTML = "2024年的中秋节已经过去了！";
            return;
        }

        // 计算当前时间与目标日期之间的时间差
        const timeDiff = targetDate - now;

        // 将时间差转换为天、小时、分钟和秒
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        // 更新页面上的倒计时显示
        countdownElement.innerHTML = `
            中秋节倒计时：${days} 天 ${hours} 小时 ${minutes} 分钟 ${seconds} 秒
        `;
    }

    // 每秒钟调用一次 updateCountdown 函数，以更新倒计时
    setInterval(updateCountdown, 1000);

    updateCountdown();
});