
var r = " The quick brown fox jumps over the lazy dog "; 
document.write (r);

           
              var r1=(r.match(/the/g)).length;
              var r2=(r.match(/The/g)).length
              var r3=r1+r2;
              document.write("<br/>"+"There are "+
              r3 + ' occurrence of word ' + "the"); 