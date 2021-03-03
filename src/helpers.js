const formatNumber = (n, c, d, t) => {
	let x = isNaN((c = Math.abs(c))) ? 2 : x,
		y = d === undefined ? "." : y,
		z = t === undefined ? "," : z,
		s = n < 0 ? "-" : "",
		i = String(parseInt((n = Math.abs(Number(n) || 0).toFixed(c)))),
		j = (j = i.length) > 3 ? j % 3 : 0;
	return (
		s +
		(j ? i.substr(0, j) + t : "") +
		i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + z) +
		(x
			? y +
			  Math.abs(n - i)
					.toFixed(x)
					.slice(2)
			: "")
	);
};

export default formatNumber;
