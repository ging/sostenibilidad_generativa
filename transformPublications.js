const fs = require("fs");
const Cite = require('citation-js')

fs.readFile("constants/publications.bib", function(err, buf) {
  	let bib = buf.toString();//.replace(/@\w*{(\w*)/,(a)=>a+Math.floor(10000*Math.random()))
  	let output = new Cite(bib).format('bibliography', {
	  format: 'html',
	  template: 'apa',
	  lang: 'en-US',
	  prepend (entry) {
	  	let {id, issued, DOI, type, title, volume, page} = entry;
	  	if (DOI && !DOI.match(/http/)) {
	  		DOI = "https://doi.org/" + DOI;
	  	}
		//get container-title from entry (journal name)
		let journal = entry['container-title'];
		//get year from issued
		let year;
		let month;
		if (issued && issued['date-parts']) {
			year = issued['date-parts'][0][0];
			if (issued['date-parts'][0][1]) {
				month = issued['date-parts'][0][1];
			}
		}
		//get author names from entry, separated by comma and adding "and" before the last one
		let author = entry.author.map((a, i) => {
			if (i === entry.author.length - 1) {
				if (entry.author.length === 1) {
					return a.given + " " + a.family
				} 
				return "and " + a.given + " " + a.family;
			} 
			return a.given + " " + a.family;
			
		}).join(", ");		
	

	    return `{  
	    		${(issued && issued['date-parts']) ? ('"date": ' + '[' + issued['date-parts'] + "]," ): "" }
	    		${ DOI ? ('"doi": "' + DOI + '",'): "" }
	    		${ type ? ('"category": "' + type + '",'): "" }
				${ type ? ('"author": "' + author + '",'): "" }
				${ type ? ('"title": "' + title + '",'): "" }
				${ type ? ('"journal": "' + journal + '",'): "" }
				${ type ? ('"year": "' + year + '",'): "" }
				${ type ? ('"month": "' + month + '",'): "" }
				${ type ? ('"volume": "' + volume + '",'): "" }
				${ type ? ('"pages": "' + page + '",'): "" }
	    		"content": "`
	  },
	  append: () => '"},'

	});
	output = output.replace(/<div data-csl-entry-id=".*" class="csl-entry">/gim,"")
	output = output.replace(/<\/div>/gim,"");
	output = output.replace('<div class="csl-bib-body">',"");
	output = output.replace(/,([^,]*)$/,"$1");
	output = "["+output+"]";
	const str = JSON.parse(output).sort(function(a, b){
		if (a.date && b.date) {
			return b.date[0] - a.date[0]
		} else if (a.date) {
			return -1;
		} else if (b.date) {
			return 1;
		} else {
			return 0;
		}
	});

	let final_str = "export const publications = " + JSON.stringify(str) + ";";

	fs.writeFile('constants/publications.js', final_str, (err) => {
		if (err) throw err;
	});
});

