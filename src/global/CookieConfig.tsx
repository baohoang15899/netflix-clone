export const setCookie = (name: string, value: any, days: number) => {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // convert daytime into millisecond
        expires = "; expires=" + date.toUTCString(); // convert to UTC(giờ tiêu chuẩn quốc tế)
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/"; // set cookie
}

export const getCookie = (name: string) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';'); // convert to array split by ;
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length); // nếu value ko có tên, mà có khoảng trống ở đầu thì substring từ 1
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length); //nếu value có tên sub từ length của tên đến hết giá trị
    }
    return null;
}

export const removeCookie = (name:string) =>{
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}