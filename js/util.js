function createElement (...array){
   return array.map(el => document.createElement(el))
}