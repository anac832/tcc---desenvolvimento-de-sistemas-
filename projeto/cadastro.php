<?php 
if ($_POST) {
  require './database/conexao.php';

  $nome = $_POST['nome'] ?? '';
  $email = $_POST['email'] ?? '';
  $senha = $_POST['senha'] ?? '';
  $telefone = $_POST['telefone'] ?? '';

  // validações basicas 
  if(empty($nome) || empty($email) || empty($senha) || empty($telefone)) {
    $mensagem = "Preencha todos os campos obrigatórios";
    $tipo = "erro";
  } else {
    try {
      // query para inserir usuario
      $sql = "INSERT INTO usuarios (nome, email, senha, telefone) VALUES (?, ?, ?, ?)";
      $stmt = $pdo->prepare($sql);

      // criptografa a senha
      $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

      // executa a query
      $stmt->execute([$nome, $email, $senhaHash, $telefone]);

      $mensagem = "Cadastro realizado com sucesso!";
      $tipo = "sucesso";

    } catch (\Throwable $th) {
      $mensagem = "erro!".$th;
    }
  }



}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cadastro</title>
  <link rel="stylesheet" href="css/cadastro.css"> 
</head>
<body>
  <div class="form-container">
    <h2>Cadastre-se</h2>
    <?php 
    echo $mensagem ?? '';
    ?>

    <form method='post' action="/tcc/projeto/cadastro.php">
      <label for="nome">Nome completo</label>
      <input type="text" id="nome" name="nome" placeholder="Maria silva">

      <label for="email">E-mail comercial</label>
      <input type="email" id="email" name="email" placeholder="nome@gmail.com">

      <label for="senha">Senha</label>
      <input type="password" id="senha" name="senha" placeholder=" Minimo 5 caracteres">

      <label for="telefone">Número de telefone celular</label>
      <input type="tel" id="telefone" name="telefone" placeholder="(12) 88888-7777">

      <button type="submit" class="btn-primary">Inscrever-se</button>
    </form>
  </div>
</body>
</html>


