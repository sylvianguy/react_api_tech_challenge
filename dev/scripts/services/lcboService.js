import { ajax } from 'jquery';

let api_key = `MDpmODI3ZTg2Mi05OTdiLTExZTctOTYwMi04YjEyYmJmZmZkMTQ6eTVaSG9aUEtQWXZlMHJUTFZiYzRzRkJrYXUyVkMzMHBHd0Ew`;
	
export default {

	getProducts(data) {
		return ajax({
			url: `http://lcboapi.com/products`,
			method: 'GET',
			dataType: 'jsonp',
			header: {
				access_key: api_key
			},
			data
		})
	},
	getInventories(data) {
		return ajax({
			url: `http://lcboapi.com/inventories`,
			method: 'GET',
			dataType: 'jsonp',
			header: {
				access_key: api_key
			},
			data
		})
	},
	getStores(data) {
		return ajax({
			url: `http://lcboapi.com/stores`,
			method: 'GET',
			dataType: 'jsonp',
			header: {
				access_key: api_key
			},
			data
		})
	},
}