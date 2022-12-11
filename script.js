let alunos = [
    {nome: 'Ana', nota1: 10, nota2: 10},
    {nome: 'Joao', nota1: 5, nota2: 8},
    {nome: 'Nicolas', nota1: 10, nota2: 0},
    {nome: 'Isabela', nota1: 4, nota2: 6}
]

const calcMedia = (aluno) => ((aluno.nota1 + aluno.nota2) / 2).toFixed(2)

for(let i = 0; i < alunos.length; i++) {
    let media = calcMedia(alunos[i])
    let nome = alunos[i].nome
    alert(
        `
        A média do(a) aluno(a) ${nome} é: ${media}
        ${media >= 7 ? `Parabéns ${nome}! você foi aprovado(a) no concurso!` : `Não foi dessa vez ${nome}! Tente novamente ano que vem!`}
        `
    )
}