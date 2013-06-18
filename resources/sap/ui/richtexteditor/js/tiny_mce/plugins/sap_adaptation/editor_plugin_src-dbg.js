(function() {
	
	tinymce.create('tinymce.plugins.SapAdaptationPlugin', {
		
		getInfo : function() {
			return {
				longname : 'SAP Adaptation Plugin',
				author : 'SAP AG',
				authorurl : 'http://www.sap.com',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		}
		
	});
	
	// Register plugin & require the language pack
	tinymce.PluginManager.add('sap_adaptation', tinymce.plugins.SapAdaptationPlugin);
	tinymce.PluginManager.requireLangPack('sap_adaptation');
	
})();