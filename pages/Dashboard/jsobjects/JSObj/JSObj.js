export default {
	truncateString(originalString, maxLength) {
		// Limit text size for title
		if (originalString.length > maxLength) {
			return originalString.substring(0, maxLength - 3) + ' ...';
		} else {
			return originalString;
		}
	},
	aStorePag() {
		// removeValue("preArtPag")
		let artPag = appsmith.store.preArtPag || {};
		if (!artPag.hasOwnProperty(List1.pageNo)) {
			artPag[List1.pageNo-1] = ArtworksList.data._links.self.href
			storeValue("preArtPag", artPag);
		}
	},
	gStorePag() {
		// removeValue("preGenePag")
		let genePag = appsmith.store.preGenePag || {};
		if (!genePag.hasOwnProperty(List2.pageNo)) {
			genePag[List2.pageNo-1] = GenesList.data._links.self.href
			storeValue("preGenePag", genePag);
		}
	}
};