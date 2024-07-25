const goLinks = {
	// settings
	'add': 'https://github.com/GetOutSports/go/edit/main/go-links.js',
	'new': 'add',
	'edit': 'add',
	
	'home': 'https://getout.sport/'
	// add more shortcuts as needed
  };
  
  function redirect() {
	const basePath = 'liteLinker'; // repository name
	let path = window.location.pathname.substr(1); // get the part after the initial slash
	
	if (path.startsWith(basePath)) {
	  path = path.substr(basePath.length + 1); // +1 to account for the slash
	}
  
	const redirectURL = goLinks[path];
	if (redirectURL) {
	  window.location.href = redirectURL;
	} else {
	  document.body.innerHTML = 'Go link not found. <a href="go.getout.sport/add">go.getout.sport/add</a>';
	}
  }