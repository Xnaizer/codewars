function colorOf(r,g,b){
  return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`
}


console.log(colorOf(255,0,0));