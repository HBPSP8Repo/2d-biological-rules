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
	label = node.label;
	color = node.color.background;
	
	$("#noInfoText").remove();
	$("#nodeInfoText").empty();

    var url = undefined;
    var cat = undefined;

    if(color == 'rgb(255,255,128)')
    {
    	// Genetic
    	cat = "Genetic"
        url = 'http://www.genecards.org/cgi-bin/carddisp.pl?gene=' + encodeURIComponent(label.match("\\[(.*)\\]")[1]);
    }
    else if (color == 'rgb(128,255,128)')
    {
    	// Brain Anatomy
    	cat = "Brain Anatomy"
        url = 'http://google.com/search?q=' + encodeURIComponent(label);
    }
    else if (color == 'rgb(255,153,0)')
    {
    	// Brain Metabolism
    	cat = "Brain Metabolism"
        url = 'http://google.com/search?q=' + encodeURIComponent(label);
    }
    else if (color == 'rgb(255,128,128)')
    {
    	// AD
    	cat = "AD"
        url = 'http://google.com/search?q=' + encodeURIComponent(label);
    }
    else if (color == 'rgb(0,102,255)')
    {
    	// Control
    	cat = "Control"
        url = 'http://google.com/search?q=' + encodeURIComponent(label);
    }
    else if (color == 'rgb(0,204,204)')
    {
    	// CSF Protein
    	cat = "CSF Protein"
        url = 'http://google.com/search?q=' + encodeURIComponent(label);
    }
    else if (color == 'rgb(204,0,255)')
    {
    	// Blood Protein
    	cat = "Blood Protein"
        url = 'http://google.com/search?q=' + encodeURIComponent(label);
    }
    else
    {
    	// Unknown
    	cat = "Unknown"
        url = 'http://google.com/search?q=' + encodeURIComponent(label);   
    }

    $("#nodeInfoText").append("Name: "+label+"<br/>")
    .append("Category: "+cat+"<br/>")
    .append("<a target=\"_blank\" href=\""+url+"\">More...<a/>");
}

getNode = function( nodeId ) {
	for(var i=0, l=data.nodes.length; i<l; i++) {
		if(data.nodes[i].id == nodeId) {
			return data.nodes[i];
		}
	}
}
