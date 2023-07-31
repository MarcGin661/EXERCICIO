const alunos = [
  { nome:"João", nota1: 7, nota2: 8 },
  { nome:"Maria", nota1: 9, nota2: 6 },
  { nome:"Pedro", nota1: 8, nota2: 9 },
  { nome:"Ana", nota1: 6, nota2: 5 },
]

const alunosComMedia = alunos.map(aluno => {
  const media = (aluno.nota1 + aluno.nota2) / 2
  return {nome: aluno.nome, media }
})

alunosComMedia.sort((a, b)=> b.media - a.media) 

console.log (alunosComMedia)