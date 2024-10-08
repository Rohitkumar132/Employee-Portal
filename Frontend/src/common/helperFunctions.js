/**
 * Converts a list of files into FormData and attaches it to an instance.
 *
 * @param {Array} list - Array of files or subarrays of files.
 * @param {FormData} instance - FormData instance to append files to.
 * @param {string} name - Name to use as a prefix for the file keys in FormData.
 * @returns {FormData} - The FormData instance with attached files.
 */
export const fileListToFormData = (list = [], instance, name = "") => {
    const attach = list.flat();

    attach.forEach((item, ind) => {
        instance?.set(`${name}[${ind}]`, item);
    });

    instance?.set("attachment", isEmpty(list) ? "0" : "1");
    return instance;
};

/**
 * Converts an object into FormData, handling arrays by converting them to JSON strings.
 *
 * @param {Object} obj - Object to be converted to FormData.
 * @param {FormData} instance - FormData instance to append the object to.
 * @returns {FormData} - The FormData instance with appended key-value pairs.
 */
export const objectToFormData = (obj = {}, instance) => {
    Object.entries(obj).forEach(([key, value]) => {
        instance?.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
    });
    return instance;
};
