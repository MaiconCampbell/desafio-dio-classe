class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = '';

    switch (this.tipo) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'não possui ataque definido';
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplo de uso da classe Heroi
const heroi1 = new Heroi('Gandalf', 1500, 'mago');
heroi1.atacar(); // Saída: O mago atacou usando magia

const heroi2 = new Heroi('Aragorn', 35, 'guerreiro');
heroi2.atacar(); // Saída: O guerreiro atacou usando espada

const heroi3 = new Heroi('Bruce Lee', 32, 'monge');
heroi3.atacar(); // Saída: O monge atacou usando artes marciais

const heroi4 = new Heroi('Hanzo', 28, 'ninja');
heroi4.atacar(); // Saída: O ninja atacou usando shuriken
