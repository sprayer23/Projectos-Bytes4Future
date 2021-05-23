"use strict";

function umOuOutro(boolean1, boolean2, boolean3) {
  // escreve aqui a função
  return boolean1 && !boolean2 && !boolean3 || !boolean1 && boolean2 && !boolean3 || !boolean1 && !boolean2 && boolean3;
}