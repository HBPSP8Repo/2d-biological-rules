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
	  edges: parsed.edges
	};
	var options = {
	  "nodes": {
	    "shape": "box",
	    "font": {
	    	"color": "black"
	    }
	  },
	  "edges": {
	  	"font": {
	  		"color": "white",
	  		"strokeWidth": 0
	  	}
	  },
	  "interaction": {
            "hover": true
      },
	"physics": {
		"stabilization": {
	      "enabled": false
	    }
	  }
	}

	var container = document.getElementById('network1');
	var network = new vis.Network(container, data, options);
});
