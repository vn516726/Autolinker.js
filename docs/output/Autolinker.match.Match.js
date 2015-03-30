Ext.data.JsonP.Autolinker_match_Match({"tagname":"class","name":"Autolinker.match.Match","autodetected":{},"files":[{"filename":"Match.js","href":"Match.html#Autolinker-match-Match"}],"abstract":true,"members":[{"name":"matchedText","tagname":"cfg","owner":"Autolinker.match.Match","id":"cfg-matchedText","meta":{"required":true}},{"name":"constructor","tagname":"method","owner":"Autolinker.match.Match","id":"method-constructor","meta":{}},{"name":"getAnchorHref","tagname":"method","owner":"Autolinker.match.Match","id":"method-getAnchorHref","meta":{"abstract":true}},{"name":"getAnchorText","tagname":"method","owner":"Autolinker.match.Match","id":"method-getAnchorText","meta":{"abstract":true}},{"name":"getMatchedText","tagname":"method","owner":"Autolinker.match.Match","id":"method-getMatchedText","meta":{}},{"name":"getType","tagname":"method","owner":"Autolinker.match.Match","id":"method-getType","meta":{"abstract":true}}],"alternateClassNames":[],"aliases":{},"id":"class-Autolinker.match.Match","short_doc":"Represents a match found in an input string which should be Autolinked. ...","component":false,"superclasses":[],"subclasses":["Autolinker.match.Email","Autolinker.match.Hashtag","Autolinker.match.Phone","Autolinker.match.Twitter","Autolinker.match.Url"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Autolinker.match.Email' rel='Autolinker.match.Email' class='docClass'>Autolinker.match.Email</a></div><div class='dependency'><a href='#!/api/Autolinker.match.Hashtag' rel='Autolinker.match.Hashtag' class='docClass'>Autolinker.match.Hashtag</a></div><div class='dependency'><a href='#!/api/Autolinker.match.Phone' rel='Autolinker.match.Phone' class='docClass'>Autolinker.match.Phone</a></div><div class='dependency'><a href='#!/api/Autolinker.match.Twitter' rel='Autolinker.match.Twitter' class='docClass'>Autolinker.match.Twitter</a></div><div class='dependency'><a href='#!/api/Autolinker.match.Url' rel='Autolinker.match.Url' class='docClass'>Autolinker.match.Url</a></div><h4>Files</h4><div class='dependency'><a href='source/Match.html#Autolinker-match-Match' target='_blank'>Match.js</a></div></pre><div class='doc-contents'><p>Represents a match found in an input string which should be Autolinked. A Match object is what is provided in a\n<a href=\"#!/api/Autolinker-cfg-replaceFn\" rel=\"Autolinker-cfg-replaceFn\" class=\"docClass\">replaceFn</a>, and may be used to query for details about the match.</p>\n\n<p>For example:</p>\n\n<pre><code>var input = \"...\";  // string with URLs, Email Addresses, and Twitter Handles\n\nvar linkedText = <a href=\"#!/api/Autolinker-method-link\" rel=\"Autolinker-method-link\" class=\"docClass\">Autolinker.link</a>( input, {\n    replaceFn : function( autolinker, match ) {\n        console.log( \"href = \", match.getAnchorHref() );\n        console.log( \"text = \", match.getAnchorText() );\n\n        switch( match.getType() ) {\n            case 'url' : \n                console.log( \"url: \", match.getUrl() );\n\n            case 'email' :\n                console.log( \"email: \", match.getEmail() );\n\n            case 'twitter' :\n                console.log( \"twitter: \", match.getTwitterHandle() );\n        }\n    }\n} );\n</code></pre>\n\n<p>See the <a href=\"#!/api/Autolinker\" rel=\"Autolinker\" class=\"docClass\">Autolinker</a> class for more details on using the <a href=\"#!/api/Autolinker-cfg-replaceFn\" rel=\"Autolinker-cfg-replaceFn\" class=\"docClass\">replaceFn</a>.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Required config options</h3><div id='cfg-matchedText' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Match'>Autolinker.match.Match</span><br/><a href='source/Match.html#Autolinker-match-Match-cfg-matchedText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-cfg-matchedText' class='name expandable'>matchedText</a> : String<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'><p>The original text that was matched.</p>\n</div><div class='long'><p>The original text that was matched.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Match'>Autolinker.match.Match</span><br/><a href='source/Match.html#Autolinker-match-Match-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Autolinker.match.Match-method-constructor' class='name expandable'>Autolinker.match.Match</a>( <span class='pre'>cfg</span> ) : <a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Autolinker.match.Match</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : Object<div class='sub-desc'><p>The configuration properties for the Match instance, specified in an Object (map).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Autolinker.match.Match</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAnchorHref' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Match'>Autolinker.match.Match</span><br/><a href='source/Match.html#Autolinker-match-Match-method-getAnchorHref' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-getAnchorHref' class='name expandable'>getAnchorHref</a>( <span class='pre'></span> ) : String<span class=\"signature\"><span class='abstract' >abstract</span></span></div><div class='description'><div class='short'>Returns the anchor href that should be generated for the match. ...</div><div class='long'><p>Returns the anchor href that should be generated for the match.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAnchorText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Match'>Autolinker.match.Match</span><br/><a href='source/Match.html#Autolinker-match-Match-method-getAnchorText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-getAnchorText' class='name expandable'>getAnchorText</a>( <span class='pre'></span> ) : String<span class=\"signature\"><span class='abstract' >abstract</span></span></div><div class='description'><div class='short'>Returns the anchor text that should be generated for the match. ...</div><div class='long'><p>Returns the anchor text that should be generated for the match.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMatchedText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Match'>Autolinker.match.Match</span><br/><a href='source/Match.html#Autolinker-match-Match-method-getMatchedText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-getMatchedText' class='name expandable'>getMatchedText</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the original text that was matched. ...</div><div class='long'><p>Returns the original text that was matched.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Match'>Autolinker.match.Match</span><br/><a href='source/Match.html#Autolinker-match-Match-method-getType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-getType' class='name expandable'>getType</a>( <span class='pre'></span> ) : String<span class=\"signature\"><span class='abstract' >abstract</span></span></div><div class='description'><div class='short'>Returns a string name for the type of match that this class represents. ...</div><div class='long'><p>Returns a string name for the type of match that this class represents.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"abstract":true}});