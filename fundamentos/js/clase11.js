// estructura de control swith

const USER = prompt('Cuál es tu signo')
console.log(USER)
let message = null
switch (USER) {
  case 'Acuario':
    message = 'Comprenda que sus anhelos no siempre se cumplirán de inmediato. Modere la ansiedad y recuerde que deberá esforzarse aún más para alcanzar sus metas.'
    break;
  case 'Pisis':
    message = 'Póngase firme, ya que su inseguridad conspirará en contra de sus logros. Momento para planificar las metas y tratar de cumplirlas de una manera ordenada.'
  case 'Aries':
    message = 'Prepárese, ya que se le presentará la oportunidad para hacer cambios extremadamente profundos en su vida personal y social. Evite limitarse por miedo'
    break;
  case 'Tauro':
    message = 'Tauros Sepa que la Luna en su signo, le proporcionará esa seguridad que tanto ha estado esperando para enfrentar ciertos obstáculos que son difíciles en su vida.'
    break;
  case 'Geminis':
    message = 'Solo por este día, lo mejor será que evite los pensamientos negativos que surgen a menudo en su cabeza o se deprimirá demasiado. Hágalos a un costado'
    break
  case 'Cancer':
    message = 'Siga manteniendo la confianza en usted mismo, esto le permitirá esquivar todas las dificultades sin demasiado esfuerzo. Continúe encarando las cosas de ese modo.'
    break
  default:
    message = 'No ingresó su signo correctamente o canceló la solicitud!'
}

console.log(message)