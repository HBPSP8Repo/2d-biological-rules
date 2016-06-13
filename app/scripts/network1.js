$.getJSON("data/rules.json", function( gephiJSON ) {
	var parserOptions = {
	  edges: {
	    inheritColors: false
	  },
	  nodes: {
	    fixed: true,
	    parseColor: false
	  }
	}
	var parsed = vis.network.convertGephi(gephiJSON, parserOptions);

	var data = {
	  nodes: parsed.nodes,
	  edged: parsed.edges
	};
	var options = {};

	var container = document.getElementById('network1');
	var network = new vis.Network(container, data, options);
});
