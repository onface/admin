function filter (target, selectors) {
	let $target = $(target)
	if (selectors[0] === '@') {
		$target = window[selectors.slice(1)].apply($target.get(0))
		console.log(selectors.slice(1))
	}
	else {
		selectors = selectors.split('&')
		// 第一个选择器开头是 # 或者 . 则不适用 当前元素作为起始元素
		if (/^[#/.]/.test(selectors[0])) {
			$target = $(selectors[0])
			// 移除第一个选择器
			selectors.shift()
		}
		selectors.forEach(function (item, index) {
			if (index%2 === 0) {
				let method = item
				let targetSelector = selectors[index+1]
				$target = $target[method](targetSelector)
			}
		})
	}
	return $target
}

module.exports = filter