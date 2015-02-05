function submit_me(){
	jQuery("#response_area").html("<p style=\"font-size:120%;\">Loading..</p>");
	jQuery.post(
		the_ajax_script.ajaxurl,
		jQuery("#theForm").serialize(),
		function(odata){
			var data = jQuery.parseJSON(odata);
			if(jQuery.isEmptyObject(data))
				var tbl_body = "<p>Oops we could not find a matching result..</p>";
			else{
			var tbl_body = "<table id='result'>";
				jQuery.each(data, function() {
var cols = {country:"Country",name_of_journal:"Name of Journal", print_issn:"Print ISSN", e_issn:"e ISSN", city_of_publication:"City Published", name_of_publishing_company:"Publisher", editor:"Editor", editor_email_address:"Editor email address", language:"Language", since:"Since", isi:"ISI", isi_category:"ISI Category", '5_year_impact_factor':"5 Year Impact Factor", website:"Website"};
					var row1 = "";
					var row2 = "<tr class='journal'><td>";
					jQuery.each(this, function(k , v) {
						if(k!="id"){
							if(k=="name_of_journal"){
		row1 = "<td><div class='outer'><div class='inner'><strong>"+v+": </strong></div><div class='arrow'></div></div></td>";
								tbl_body += "<tr class='name'>"+row1+"</tr>"; 

							}
							else{
								if(v!=null){if(v!=0){
									if(k=="website"){
row2 += '<div class="journal_content"><div class="journal_content_columns"><strong>'+cols[k]+':	</strong></div><div class="journal_content_data"><a href="'+v+'">Click here</a></div></div>';		
	}else
row2 += '<div class="journal_content"><div class="journal_content_columns"><strong>'+cols[k]+':	</strong></div><div class="journal_content_data">'+v+'</div></div>';
								}
}
							}
						}
					})
					row2 += "</td></tr>";
					tbl_body += row2;
				})
				tbl_body += "</table>";
			}
			jQuery("#response_area").html(tbl_body); 
	tableS();
		}
	);

}

 function tableS(){
	jQuery("#result tr.name").show();
	jQuery("#result tr:not(.name)").hide();
	jQuery("#result tr.name").click(function(){
		jQuery(this).next("tr").toggle();
		jQuery(this).find(".arrow").toggleClass("up");
	});
}