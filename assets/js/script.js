/*!
 * Jeferson Luckas - Hora de respirar
 * 
 * Copyright (c) 2020 Jeferson Luckas
 * Released under the MIT license
 * https://github.com/JefersonLucas/hora-de-respirar/blob/master/LICENSE
 *
 */

let tempo = 10;
	
let cronometro = setInterval(function() {
	
	tempo--;
		
	tempo = tempo < 0 ? tempo = 9 : tempo;

	document.getElementById("ansiedade").innerHTML = tempo <= 3 && tempo >= 1 ? "Expire" : "Inspire";

}, 1000);