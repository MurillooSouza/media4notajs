alert("Write as 4 notas utilizando números de 0 a 10");

let n1= prompt("First Nota: ");
let n2= prompt("Second Nota: ");
let n3= prompt("Third Nota: ");
let n4= prompt("Fourth Nota: ");
let res= (Number(n1) + Number(n2) + Number(n3) + Number(n4)) / 4;


if(n1>10.0 || n2>10.0 || n3>10.0 || n4>10.0)
alert("Digite notas entre 0 e 10");

else if(n1<0.0 || n2<0.0 || n3<0.0 || n4<0.0)
alert("Digite somente notas entre 0 e 10");

else if(res<5.0)
alert(`Você ficou com média ${res} res: reprovado`);

else if(res>5.0 && res<7.0)
alert(`Você ficou com média ${res} res: recuperação`);

else if(res>7.0)
alert(`Você ficou com média ${res} res: aprovado`); 