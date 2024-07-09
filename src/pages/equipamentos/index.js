export const TIPO_EQUIPAMENTO = {
    ARMA: 10,
    ARMADURA: 20,
    ESCUDO: 30,
    ROUPA: 40,
    ACESSORIO: 50
}

TIPO_EQUIPAMENTO.OPTIONS = [
    { label : 'Arma', value: TIPO_EQUIPAMENTO.ARMA, color: 'red',  oreder: 10 },
    { label : 'Armadura', value: TIPO_EQUIPAMENTO.ARMADURA, color: 'green',  oreder: 20 },
    { label : 'escudo', value: TIPO_EQUIPAMENTO.ESCUDO, color: 'purple',  oreder: 30 },
    { label : 'Acessorio', value: TIPO_EQUIPAMENTO.ACESSORIO, color: 'yellow',  oreder: 50 },
]

export const TIPO_MAOS = {
    UMA: 10,
    DUAS: 20
}

TIPO_MAOS.OPTIONS = [
    { label : 'Uma Mão', value: TIPO_MAOS.UMA, color: 'red',  oreder: 10 },
    { label : 'Duas Mãos', value: TIPO_MAOS.DUAS, color: 'gree',  oreder: 20 },
]

export const PESO = {
    LEVE: 10,
    MEDIA: 20,
    PESADA: 30,
}

PESO.OPTIONS = [
    { label : 'Leve', value: PESO.LEVE, color: 'green',  oreder: 10 },
    { label : 'Media', value: PESO.MEDIA, color: 'Yellow',  oreder: 10 },
    { label : 'Pesado', value: PESO.PESADA, color: 'red',  oreder: 10 },
]




