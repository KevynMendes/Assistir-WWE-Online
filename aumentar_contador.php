<?php
$contador_file = 'contagem.txt';
$visualizacoes = intval(file_get_contents($contador_file));
$visualizacoes++;
file_put_contents($contador_file, $visualizacoes);
echo $visualizacoes;
?>
