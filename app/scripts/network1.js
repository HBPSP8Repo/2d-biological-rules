var container = document.getElementById('network1');

var data = null;

var parserOptions = {
  edges: {
    inheritColors: false
  },
  nodes: {
    fixed: true,
    parseColor: false
  }
}

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

$.getJSON("data/rules.json", function( gephiJSON ) {
	
	var parsed = vis.network.convertGephi(gephiJSON, parserOptions);

	data = {
	  nodes: parsed.nodes,
	  edges: parsed.edges
	};

	var network = new vis.Network(container, data, options);
	network.on("selectNode", handleSelectNode);
});

handleSelectNode = function( obj ) {
	nodeId = obj.nodes[0];
	node = getNode(nodeId);
	alert(node.label);
}

getNode = function( nodeId ) {
	for(var i=0, l=data.nodes.length; i<l; i++) {
		if(data.nodes[i].id == nodeId) {
			return data.nodes[i];
		}
	}
}
