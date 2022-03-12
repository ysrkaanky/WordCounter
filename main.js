var whiteSpaceless = "";

function counter() {
   let text = $("#text_area").val();
   $("#LC").text(`${text.length} letters`);
   wordCounter = whiteSpaceless.split(" ");
   l = text == "" ? 0 : wordCounter.length;
   $("#WC").text(`${l} words`);
   let withoutSpaces = whiteSpaceless.replaceAll(" ","");
   $("#WWSLC").text(`${withoutSpaces.length} letters`);
}

$("#text_area").on("keyup  propertychange paste change", function () {
   let text = $("#text_area").val();
   window.whiteSpaceless = text.replace(/\s+/g, ' ').trim();
});

function minifier() {
   $("#results").val(whiteSpaceless);
}

function whitespaces(){
   let text = $("#text_area").val();
   text = text.replace(/ +?/g, ' ');
   $("#results").val(text);
}