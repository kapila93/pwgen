var length = 8;
var selection = [];

capitals = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
symbols = ['!', '@', '#', '$', '%', '^', '&', '*'];

prefs = {
	use_caps: true,
	caps_len: 2,
	use_nums: true,
	nums_len: 2,
	use_alpha: true,
	alpha_len: 2,
	use_syms: false,
	syms_len: 1
}

counter = {
	capitals: 0,
	numbers: 0,
	alphabets: 0,
	symbols: 0
}

function gen () {
	getSelection ();
	var password = '';
	for (var i = 0; i < length; i++) {
		password = password + getChar ();
	}
	return password;
}

function getChar () {
	return selection[Math.floor(Math.random() * selection.length)];
}

function getSelection () {
	selection = [];
	if (prefs.use_caps)
		selection = selection.concat(capitals);
	if (prefs.use_nums)
		selection = selection.concat(numbers);
	if (prefs.use_alpha)
		selection = selection.concat(alphabets);
	if (prefs.use_syms)
		selection = selection.concat(symbols);
}