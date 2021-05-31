<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Exercício</title>
</head>
<body>
    <section class="contador">
        <h2 id="valor">0</h2>
        <button id="incrementar" onclick="incrementa()">Incrementar</button>
        <button id="decrementar" onclick="decrementa()">Decrementar</button>
    </section>
<script>
    // Completar
    function incrementa() {
            const paragrafo = document.getElementById("valor");
            const novaLotacao = parseInt(paragrafo.innerHTML) + 1;
            paragrafo.innerHTML = novaLotacao;
        }

        function decrementa() {
            const paragrafo = document.getElementById("valor");
            const novaLotacao = parseInt(paragrafo.innerHTML) - 1;
            paragrafo.innerHTML = novaLotacao;
        }
</script>
</body>
</html>