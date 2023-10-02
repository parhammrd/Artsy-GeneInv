export default {
	truncateString(originalString, maxLength) {
		if (originalString.length > maxLength) {
			return originalString.substring(0, maxLength - 3) + ' ...';
		} else {
			return originalString;
		}
	}
};