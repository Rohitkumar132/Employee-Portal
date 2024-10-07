const response = (res, status, message, data = null, code, error = null) => {
    let statusCode = code ? code : status ? 200 : 400;

    if (!status && !data && !code) {
        statusCode = 203;
    }

    const response = {
        status,
        message,
    };

    if (statusCode !== 200 && error) {
        response.error = error;
    } else if (statusCode === 200) {
        response.data = data;
    }

    return res.status(statusCode).json(response);
}

module.exports = response;
