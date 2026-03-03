import express from "express";

const app = express();
const PORTA = 3000;

app.use(express.json());

// Array em memória
const tarefas = [
  { id: 1, titulo: "Estudar Node", concluida: false },
  { id: 2, titulo: "Fazer API", concluida: false }
];

// ROTA GET
app.get("/tarefas", (req, res) => {
  res.status(200).json(tarefas);
});

// ROTA POST
app.post("/tarefas", (req, res) => {
  const { titulo } = req.body;

  // Validação
  if (!titulo || titulo.trim() === "") {
    return res.status(400).json({ erro: "Título é obrigatório." });
  }

  const novaTarefa = {
    id: tarefas.length + 1,
    titulo,
    concluida: false
  };

  tarefas.push(novaTarefa);

  res.status(201).json(novaTarefa);
});

app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});
