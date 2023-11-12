
/**
 * 参数处理
 *
 * @param {*} params  参数
 */
export function tansParams(params: { [x: string]: any }) {
	let result = "";
	for (const propName of Object.keys(params)) {
		const value = params[propName];
		var part = encodeURIComponent(propName) + "=";
		if (value !== null && value !== "" && typeof value !== "undefined") {
			if (typeof value === "object") {
				for (const key of Object.keys(value)) {
					// prettier-ignore
					if (value[key] !== null && value !== "" && typeof value[key] !== "undefined") {
                        let params = propName + "[" + key + "]";
                        var subPart = encodeURIComponent(params) + "=";
                        result += subPart + encodeURIComponent(value[key]) + "&";
                    }
				}
			} else {
				result += part + encodeURIComponent(value) + "&";
			}
		}
	}
	return result;
}


// 验证是否为blob格式
export const blobValidate = async (data: any) => {
	let b = false;
	try {
		const text = await data.text();
		JSON.parse(text);
		b = false;
	} catch (error) {
		b = true;
	}
	return b;
};
