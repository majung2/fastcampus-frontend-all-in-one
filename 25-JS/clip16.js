for (let i = 0, j = 2 ; i < 5 ; i++, j = j*j){
    console.log(i, j);
}

for (let i = 0; i < 5 ; i++){
    console.log(i);
    if (i > 2){
        break;
    }
    console.log('안녕하세요', i);
}

for (let i = 0 ; i < 5 ; i++){
    console.log(i);
    if (i < 2){
        continue;
    }
    console.log('안녕하세요', i);
}

for (;;){
    console.log('안녕하세요~');
    if (Math.random() * 100 > 90){
        break;
    }
}