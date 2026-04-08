export const randomStringGenerator = (givenLength = 70) => {
    const characters = givenLength > 10 ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" : "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const length = givenLength;
    let randomStr = "";

    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * characters.length);
        randomStr += characters[randomNum];
    }
    return randomStr;
}


export const SuccessResponceHandle = (statusCode, message, data, meta) => {
    return {
      status: statusCode,
      success: true,
      message: message,
      data: data,
      meta: meta,
    };
  };