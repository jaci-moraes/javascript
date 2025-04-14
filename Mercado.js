const meuDinheiroFísico = 50;
const meuCartão = 100;
const valorMercado = 80;

const dinheiroSuficiente = meuDinheiroFísico > valorMercado;
const limiteSuficiente = meuCartão > valorMercado;

const possoPagar = dinheiroSuficiente || limiteSuficiente;

console.log(possoPagar);