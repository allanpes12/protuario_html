(function () {
  "use strict";

  // Catálogo declarativo de referências. As imagens continuam sendo carregadas
  // somente quando o consumidor atribuir um destes caminhos a um elemento.
  window.CHECKLIST_IMAGE_GROUPS = {
    cirurgico: {
      abertura: [
        "imagens/checklist/Cirurgico/0.1-Identificação e Abertura.png",
        "imagens/checklist/Cirurgico/1.1-CNS.jpg",
        "imagens/checklist/Cirurgico/1.2-Carteira convênios/carteirinha bradesco.png",
        "imagens/checklist/Cirurgico/1.2-Carteira convênios/carteirinha Cassi.png",
        "imagens/checklist/Cirurgico/1.2-Carteira convênios/carteirinha hapvida.png"
      ],
      contrato: [
        "imagens/checklist/Cirurgico/2-Contrato Prestacao Serviço/0.png"
      ],
      "termo-esclarecimento": [
        "imagens/checklist/Cirurgico/3-Termo de Esclarecimento e Responsabilidade/0.png"
      ],
      "documento-paciente": [
        "imagens/checklist/Cirurgico/4-Documento com foto.PNG"
      ],
      "documento-responsavel": [
        "imagens/checklist/Cirurgico/4.1-Documento com foto - Copia.PNG"
      ],
      "consentimento-cirurgico": [
        "imagens/checklist/Cirurgico/5-Termo de Consentimento Cirurgico/0.png"
      ],
      amputacao: [
        "imagens/checklist/Cirurgico/6-Formulario de amputacao/0.png",
        "imagens/checklist/Cirurgico/6.1-Formulario de amputaçao - incineração/0.png",
        "imagens/checklist/Cirurgico/6.2-Formulario de amputaçao - sepultamento/0.png"
      ],
      obito: [
        "imagens/checklist/Cirurgico/7-Declaraçao de Obito/0.png",
        "imagens/checklist/Cirurgico/7-Declaraçao de Obito/1.png"
      ],
      "guia-operadora": [
        "imagens/checklist/Cirurgico/10-Guia de solicitação de internação - convenio.jpg"
      ],
      anamnese: [
        "imagens/checklist/Cirurgico/11-Anamnese.png"
      ],
      "sumario-alta": [
        "imagens/checklist/Cirurgico/12-Sumario resumo alta.png"
      ],
      "apac-hemoterapia": [
        "imagens/checklist/Cirurgico/13-Apac sangue/0.png",
        "imagens/checklist/Cirurgico/13-Apac sangue/1.png"
      ],
      "evolucao-medica": [
        "imagens/checklist/Cirurgico/14-Evolução medica/0.png"
      ],
      "prescricao-medica": [
        "imagens/checklist/Cirurgico/15-Prescriçao Medica/0.png",
        "imagens/checklist/Cirurgico/15-Prescriçao Medica/1.png"
      ],
      "descricao-cirurgica": [
        "imagens/checklist/Cirurgico/16-Descricao cirurgica.png"
      ],
      "relatorio-anestesia": [
        "imagens/checklist/Cirurgico/17-Relatorio anestesista/0.png",
        "imagens/checklist/Cirurgico/17-Relatorio anestesista/1.png"
      ],
      "avaliacao-pre-anestesica": [
        "imagens/checklist/Cirurgico/18-Relatorio aval. pré anestesica/0.png"
      ],
      "produtos-aviso-cirurgia": [
        "imagens/checklist/Cirurgico/19-Relatorio de produtos - aviso cirurgia/0.png"
      ],
      srpa: [
        "imagens/checklist/Cirurgico/20- Ficha de acomp. SRPA/0.png",
        "imagens/checklist/Cirurgico/20- Ficha de acomp. SRPA/1.png"
      ],
      "enfermagem-perioperatoria": [
        "imagens/checklist/Cirurgico/21-Enfermagem perioperatoria/0.png",
        "imagens/checklist/Cirurgico/21-Enfermagem perioperatoria/1.png"
      ],
      "cirurgia-segura": [
        "imagens/checklist/Cirurgico/22-Cirurgia segura/0.png"
      ],
      "integrador-quimico": [
        "imagens/checklist/Cirurgico/23-Formulario integrador quimico/0.png"
      ],
      opme: [
        "imagens/checklist/Cirurgico/24-Formulario de OPME/0.png"
      ],
      "exames-laboratoriais": [
        "imagens/checklist/Cirurgico/26-Exames laboratoriais/0.png",
        "imagens/checklist/Cirurgico/26-Exames laboratoriais/1.png",
        "imagens/checklist/Cirurgico/26-Exames laboratoriais/2.png",
        "imagens/checklist/Cirurgico/26-Exames laboratoriais/3.png"
      ],
      "evolucao-enfermagem": [
        "imagens/checklist/Cirurgico/27-Evolucao enfermagem registro diario/0.png"
      ],
      "anotacao-enfermagem": [
        "imagens/checklist/Cirurgico/28-Anotaçao de enfermagem/0.png",
        "imagens/checklist/Cirurgico/28-Anotaçao de enfermagem/1.png"
      ]
    },

    clinico: {
      abertura: [
        "imagens/checklist/Clinico/0.1-Identificação e Abertura.png",
        "imagens/checklist/Clinico/1.1-CNS.jpg",
        "imagens/checklist/Clinico/1.2-Carteira convênios/carteirinha bradesco.png",
        "imagens/checklist/Clinico/1.2-Carteira convênios/carteirinha Cassi.png",
        "imagens/checklist/Clinico/1.2-Carteira convênios/carteirinha hapvida.png"
      ],
      contrato: [
        "imagens/checklist/Clinico/2-Contrato Prestacao Serviço/0.png"
      ],
      "termo-esclarecimento": [
        "imagens/checklist/Clinico/3-Termo de Esclarecimento e Responsabilidade/0.png"
      ],
      "documento-paciente": [
        "imagens/checklist/Clinico/4-Documento com foto.PNG"
      ],
      "documento-responsavel": [
        "imagens/checklist/Clinico/4.1-Documento com foto - Copia.PNG"
      ],
      obito: [
        "imagens/checklist/Clinico/7-Declaraçao de Obito/0.png",
        "imagens/checklist/Clinico/7-Declaraçao de Obito/1.png"
      ],
      "guia-operadora": [
        "imagens/checklist/Clinico/10-Guia de solicitação de internação - convenio.jpg"
      ],
      anamnese: [
        "imagens/checklist/Clinico/11-Anamnese.png"
      ],
      "sumario-alta": [
        "imagens/checklist/Clinico/12-Sumario resumo alta.png"
      ],
      "apac-hemoterapia": [
        "imagens/checklist/Clinico/13-Apac sangue/0.png",
        "imagens/checklist/Clinico/13-Apac sangue/1.png"
      ],
      "evolucao-medica": [
        "imagens/checklist/Clinico/14-Evolução medica/0.png"
      ],
      "prescricao-medica": [
        "imagens/checklist/Clinico/15-Prescriçao Medica/0.png",
        "imagens/checklist/Clinico/15-Prescriçao Medica/1.png"
      ],
      "evolucao-enfermagem": [
        "imagens/checklist/Clinico/17-Evolucao enfermagem registro diario/0.png"
      ],
      "anotacao-enfermagem": [
        "imagens/checklist/Clinico/18-Anotaçao de enfermagem/0.png",
        "imagens/checklist/Clinico/18-Anotaçao de enfermagem/1.png"
      ],
      fisioterapia: [
        "imagens/checklist/Clinico/20-Evolução fisioterapia/0.png",
        "imagens/checklist/Clinico/20-Evolução fisioterapia/1.png"
      ]
    },

    "clinico-rn": {
      abertura: [
        "imagens/checklist/Clinico RN/0.1-Identificação e Abertura.png",
        "imagens/checklist/Clinico RN/1.1-CNS.jpg",
        "imagens/checklist/Clinico RN/1.2-Carteira convênios/carteirinha bradesco.png",
        "imagens/checklist/Clinico RN/1.2-Carteira convênios/carteirinha Cassi.png",
        "imagens/checklist/Clinico RN/1.2-Carteira convênios/carteirinha hapvida.png"
      ],
      contrato: [
        "imagens/checklist/Clinico RN/2-Contrato Prestacao Serviço/0.png"
      ],
      "termo-esclarecimento": [
        "imagens/checklist/Clinico RN/3-Termo de Esclarecimento e Responsabilidade/0.png"
      ],
      "documento-paciente": [
        "imagens/checklist/Clinico RN/4-Documento com foto.PNG"
      ],
      "documento-responsavel": [
        "imagens/checklist/Clinico RN/4.1-Documento com foto - Copia.PNG"
      ],
      obito: [
        "imagens/checklist/Clinico RN/8-Declaraçao de Obito/0.png",
        "imagens/checklist/Clinico RN/8-Declaraçao de Obito/1.png"
      ],
      "guia-operadora": [
        "imagens/checklist/Clinico RN/12-Guia de solicitação de internação - convenio.jpg"
      ],
      anamnese: [
        "imagens/checklist/Clinico RN/13-Anamnese.png"
      ],
      "sumario-alta": [
        "imagens/checklist/Clinico RN/14-Sumario resumo alta RN.png"
      ],
      "identificacao-rn": [
        "imagens/checklist/Clinico RN/15-Evolução de Enfermagem c registro do pezinho e Ficha de identificação/0.png"
      ],
      "recepcao-rn": [
        "imagens/checklist/Clinico RN/16-Ficha de recepção RN/0.png",
        "imagens/checklist/Clinico RN/16-Ficha de recepção RN/1.png"
      ],
      "admissao-uti": [
        "imagens/checklist/Clinico RN/17-Ficha admissao Uti neo/0.png",
        "imagens/checklist/Clinico RN/17-Ficha admissao Uti neo/1.png"
      ],
      "evolucao-medica-rn": [
        "imagens/checklist/Clinico RN/18-Evolução Médica do RN/0.png"
      ],
      "prescricao-rn": [
        "imagens/checklist/Clinico RN/19-Prescrição do RN/0.png"
      ],
      fisioterapia: [
        "imagens/checklist/Clinico RN/20-Evolução fisioterapia/0.png",
        "imagens/checklist/Clinico RN/20-Evolução fisioterapia/1.png"
      ],
      "evolucao-enfermagem": [
        "imagens/checklist/Clinico RN/21-Evoluçao de enfermagem RN/0.png",
        "imagens/checklist/Clinico RN/21-Evoluçao de enfermagem RN/1.png"
      ],
      "anotacao-enfermagem": [
        "imagens/checklist/Clinico RN/22-Anotaçao de enfermagem RN/0.png"
      ],
      "exames-laboratoriais": [
        "imagens/checklist/Clinico RN/23-Exames laboratoriais RN/0.png"
      ]
    },

    obstetrico: {
      abertura: [
        "imagens/checklist/Obstetrico/0.1-Identificação e Abertura.png",
        "imagens/checklist/Obstetrico/1.1-CNS.jpg",
        "imagens/checklist/Obstetrico/1.2-Carteira convênios/carteirinha bradesco.png",
        "imagens/checklist/Obstetrico/1.2-Carteira convênios/carteirinha Cassi.png",
        "imagens/checklist/Obstetrico/1.2-Carteira convênios/carteirinha hapvida.png"
      ],
      contrato: [
        "imagens/checklist/Obstetrico/2-Contrato Prestacao Serviço/0.png"
      ],
      "termo-esclarecimento": [
        "imagens/checklist/Obstetrico/3-Termo de Esclarecimento e Responsabilidade/0.png"
      ],
      "documento-paciente": [
        "imagens/checklist/Obstetrico/4-Documento com foto.PNG"
      ],
      "documento-responsavel": [
        "imagens/checklist/Obstetrico/4.1-Documento com foto - Copia.PNG"
      ],
      "consentimento-cirurgico": [
        "imagens/checklist/Obstetrico/5-Termo de Consentimento Cirurgico/0.png"
      ],
      obito: [
        "imagens/checklist/Obstetrico/7-Declaraçao de Obito/0.png",
        "imagens/checklist/Obstetrico/7-Declaraçao de Obito/1.png"
      ],
      "declaracao-nascido-vivo": [
        "imagens/checklist/Obstetrico/8-Declaração-de-Nascido-Vivo.jpg"
      ],
      "certidao-nascimento": [
        "imagens/checklist/Obstetrico/9-certidao-de-nascimento.jpg"
      ],
      "laudo-aih": [
        "imagens/checklist/Obstetrico/10-Laudo de Solic. AIH.jpg"
      ],
      "guia-operadora": [
        "imagens/checklist/Obstetrico/12-Guia de solicitação de internação - convenio.jpg"
      ],
      anamnese: [
        "imagens/checklist/Obstetrico/13-Anamnese.png"
      ],
      "sumario-alta": [
        "imagens/checklist/Obstetrico/14-Sumario resumo alta.png"
      ],
      "apac-hemoterapia": [
        "imagens/checklist/Obstetrico/15-Apac sangue/0.png",
        "imagens/checklist/Obstetrico/15-Apac sangue/1.png"
      ],
      "evolucao-medica": [
        "imagens/checklist/Obstetrico/16-Evolução medica/0.png"
      ],
      "prescricao-medica": [
        "imagens/checklist/Obstetrico/17-Prescriçao Medica/0.png",
        "imagens/checklist/Obstetrico/17-Prescriçao Medica/1.png"
      ],
      "partograma-descricao": [
        "imagens/checklist/Obstetrico/18-Partograma/0001.png",
        "imagens/checklist/Obstetrico/18-Partograma/0002.png",
        "imagens/checklist/Obstetrico/18-Descricao cirurgica.png"
      ],
      "planejamento-familiar": [
        "imagens/checklist/Obstetrico/Planejamento Familiar/0001.png",
        "imagens/checklist/Obstetrico/Planejamento Familiar/0002.png",
        "imagens/checklist/Obstetrico/Planejamento Familiar/0003.png",
        "imagens/checklist/Obstetrico/Planejamento Familiar/0004.png"
      ],
      "relatorio-anestesia": [
        "imagens/checklist/Obstetrico/19-Relatorio anestesista/0.png",
        "imagens/checklist/Obstetrico/19-Relatorio anestesista/1.png"
      ],
      "avaliacao-pre-anestesica": [
        "imagens/checklist/Obstetrico/20-Relatorio aval. pré anestesica/0.png"
      ],
      "produtos-aviso-cirurgia": [
        "imagens/checklist/Obstetrico/21-Relatorio de produtos - aviso cirurgia/0.png"
      ],
      srpa: [
        "imagens/checklist/Obstetrico/22- Ficha de acomp. SRPA/0.png",
        "imagens/checklist/Obstetrico/22- Ficha de acomp. SRPA/1.png"
      ],
      "enfermagem-perioperatoria": [
        "imagens/checklist/Obstetrico/23-Enfermagem perioperatoria/0.png",
        "imagens/checklist/Obstetrico/23-Enfermagem perioperatoria/1.png"
      ],
      "cirurgia-segura": [
        "imagens/checklist/Obstetrico/24-Cirurgia segura/0.png"
      ],
      "integrador-quimico": [
        "imagens/checklist/Obstetrico/25-Formulario integrador quimico/0.png"
      ],
      "exames-laboratoriais": [
        "imagens/checklist/Obstetrico/26-Exames laboratoriais/0.png",
        "imagens/checklist/Obstetrico/26-Exames laboratoriais/1.png",
        "imagens/checklist/Obstetrico/26-Exames laboratoriais/2.png",
        "imagens/checklist/Obstetrico/26-Exames laboratoriais/3.png"
      ],
      cardiotocografia: [
        "imagens/checklist/Obstetrico/28-Cardiotoco.png"
      ],
      "evolucao-enfermagem": [
        "imagens/checklist/Obstetrico/29-Evolucao enfermagem registro diario/0.png"
      ],
      "anotacao-enfermagem": [
        "imagens/checklist/Obstetrico/30-Anotaçao de enfermagem/0.png",
        "imagens/checklist/Obstetrico/30-Anotaçao de enfermagem/1.png"
      ],
      "sumario-rn": [
        "imagens/checklist/Obstetrico/31-Sumario resumo RN.png"
      ],
      "identificacao-rn": [
        "imagens/checklist/Obstetrico/32-Evolução de Enfermagem c registro do pezinho e Ficha de identificação/0.png"
      ],
      "recepcao-rn": [
        "imagens/checklist/Obstetrico/33-Ficha de recepção RN/0.png",
        "imagens/checklist/Obstetrico/33-Ficha de recepção RN/1.png"
      ],
      "evolucao-medica-rn": [
        "imagens/checklist/Obstetrico/34-Evolução Médica do RN/0.png"
      ],
      "prescricao-rn": [
        "imagens/checklist/Obstetrico/35-Prescrição do RN/0.png"
      ],
      "evolucao-enfermagem-rn": [
        "imagens/checklist/Obstetrico/36-Evoluçao de enfermagem RN/0.png",
        "imagens/checklist/Obstetrico/36-Evoluçao de enfermagem RN/1.png"
      ],
      "anotacao-enfermagem-rn": [
        "imagens/checklist/Obstetrico/37-Anotaçao de enfermagem RN/0.png"
      ],
      "exames-laboratoriais-rn": [
        "imagens/checklist/Obstetrico/38-Exames laboratoriais RN/0.png"
      ]
    },

    pa: {
      abertura: [
        "imagens/checklist/Pronto Atendimento/0.1-Identificação e Abertura.png",
        "imagens/checklist/Pronto Atendimento/1.1-CNS.jpg",
        "imagens/checklist/Pronto Atendimento/1.2-Carteira convênios/carteirinha bradesco.png",
        "imagens/checklist/Pronto Atendimento/1.2-Carteira convênios/carteirinha Cassi.png",
        "imagens/checklist/Pronto Atendimento/1.2-Carteira convênios/carteirinha hapvida.png"
      ],
      contrato: [
        "imagens/checklist/Pronto Atendimento/2-Contrato Prestacao Serviço/0.png"
      ],
      "termo-esclarecimento": [
        "imagens/checklist/Pronto Atendimento/3-Termo de Esclarecimento e Responsabilidade/0.png"
      ],
      "documento-paciente": [
        "imagens/checklist/Pronto Atendimento/4-Documento com foto.PNG"
      ],
      "documento-responsavel": [
        "imagens/checklist/Pronto Atendimento/4.1-Documento com foto - Copia.PNG"
      ],
      obito: [
        "imagens/checklist/Pronto Atendimento/7-Declaraçao de Obito/0.png",
        "imagens/checklist/Pronto Atendimento/7-Declaraçao de Obito/1.png"
      ],
      "guia-operadora": [
        "imagens/checklist/Pronto Atendimento/10-Guia de solicitação de internação - convenio.jpg"
      ],
      "ficha-risco": [
        "imagens/checklist/Pronto Atendimento/11-Ficha de acolhimento e classificação de risco.png"
      ],
      anamnese: [
        "imagens/checklist/Pronto Atendimento/12-Anamnese.png"
      ],
      "evolucao-medica": [
        "imagens/checklist/Pronto Atendimento/16-Evolução medica/0.png"
      ],
      "prescricao-medica": [
        "imagens/checklist/Pronto Atendimento/17-Prescriçao Medica/0.png",
        "imagens/checklist/Pronto Atendimento/17-Prescriçao Medica/1.png"
      ],
      "exames-laboratoriais": [
        "imagens/checklist/Pronto Atendimento/26-Exames laboratoriais/0.png",
        "imagens/checklist/Pronto Atendimento/26-Exames laboratoriais/1.png",
        "imagens/checklist/Pronto Atendimento/26-Exames laboratoriais/2.png",
        "imagens/checklist/Pronto Atendimento/26-Exames laboratoriais/3.png"
      ],
      "evolucao-enfermagem": [
        "imagens/checklist/Pronto Atendimento/29-Evolucao enfermagem registro diario/0.png"
      ],
      "anotacao-enfermagem": [
        "imagens/checklist/Pronto Atendimento/30-Anotaçao de enfermagem/0.png",
        "imagens/checklist/Pronto Atendimento/30-Anotaçao de enfermagem/1.png"
      ]
    },

    "ambulatorial-consulta": {
      abertura: [
        "imagens/checklist/Ambulatorio Consulta Especialidades/0.1-Identificação e Abertura.png",
        "imagens/checklist/Ambulatorio Consulta Especialidades/1.1-CNS.jpg"
      ],
      sisreg: [
        "imagens/checklist/Ambulatorio Consulta Especialidades/3-Guia de Aut. SISREG.png"
      ],
      anamnese: [
        "imagens/checklist/Ambulatorio Consulta Especialidades/4-Anamnese.png"
      ]
    },

    "ambulatorial-exames": {
      abertura: [
        "imagens/checklist/Ambulatorio exames/0.1-Identificação e Abertura.png",
        "imagens/checklist/Ambulatorio exames/1.1-CNS.jpg",
        "imagens/checklist/Ambulatorio exames/1.2-Carteira convênios/carteirinha bradesco.png",
        "imagens/checklist/Ambulatorio exames/1.2-Carteira convênios/carteirinha Cassi.png",
        "imagens/checklist/Ambulatorio exames/1.2-Carteira convênios/carteirinha hapvida.png"
      ],
      sisreg: [
        "imagens/checklist/Ambulatorio exames/9-Guia de Aut. SISREG.png"
      ],
      apac: [
        "imagens/checklist/Ambulatorio exames/formulario-apac-laudo.jpg"
      ]
    },

    "ambulatorial-cirurgia": {
      abertura: [
        "imagens/checklist/Ambulatorio de cirurgias ambulatoriais/0.1-Identificação e Abertura.png",
        "imagens/checklist/Ambulatorio de cirurgias ambulatoriais/1.1-CNS.jpg",
        "imagens/checklist/Ambulatorio de cirurgias ambulatoriais/1.2-Carteira convênios/carteirinha bradesco.png",
        "imagens/checklist/Ambulatorio de cirurgias ambulatoriais/1.2-Carteira convênios/carteirinha Cassi.png",
        "imagens/checklist/Ambulatorio de cirurgias ambulatoriais/1.2-Carteira convênios/carteirinha hapvida.png"
      ],
      contrato: [
        "imagens/checklist/Ambulatorio de cirurgias ambulatoriais/2-Contrato Prestacao Serviço/0.png"
      ],
      "termo-esclarecimento": [
        "imagens/checklist/Ambulatorio de cirurgias ambulatoriais/3-Termo de Esclarecimento e Responsabilidade/0.png"
      ],
      "documento-paciente": [
        "imagens/checklist/Ambulatorio de cirurgias ambulatoriais/4-Documento com foto.PNG"
      ],
      "documento-responsavel": [
        "imagens/checklist/Ambulatorio de cirurgias ambulatoriais/4-Documento com foto.PNG"
      ],
      "consentimento-cirurgico": [
        "imagens/checklist/Ambulatorio de cirurgias ambulatoriais/5-Termo de Consentimento Cirurgico/0.png"
      ],
      apac: [
        "imagens/checklist/Ambulatorio de cirurgias ambulatoriais/9-Formulario-apac-laudo.jpg"
      ],
      sisreg: [
        "imagens/checklist/Ambulatorio de cirurgias ambulatoriais/10-Guia de Aut. SISREG.png"
      ],
      anamnese: [
        "imagens/checklist/Ambulatorio de cirurgias ambulatoriais/12-Anamnese.png"
      ],
      "sumario-alta": [
        "imagens/checklist/Ambulatorio de cirurgias ambulatoriais/13-Sumario resumo alta.png"
      ],
      "evolucao-medica": [
        "imagens/checklist/Ambulatorio de cirurgias ambulatoriais/14-Evolução medica/0.png"
      ],
      "descricao-cirurgica": [
        "imagens/checklist/Ambulatorio de cirurgias ambulatoriais/15-Descricao cirurgica.png"
      ],
      "enfermagem-perioperatoria": [
        "imagens/checklist/Ambulatorio de cirurgias ambulatoriais/16-Enfermagem perioperatoria/0.png",
        "imagens/checklist/Ambulatorio de cirurgias ambulatoriais/16-Enfermagem perioperatoria/1.png"
      ],
      "cirurgia-segura": [
        "imagens/checklist/Ambulatorio de cirurgias ambulatoriais/17-Cirurgia segura/0.png"
      ],
      opme: [
        "imagens/checklist/Ambulatorio de cirurgias ambulatoriais/18-Formulario de OPME/0.png"
      ],
      "evolucao-enfermagem": [
        "imagens/checklist/Ambulatorio de cirurgias ambulatoriais/19-Evolucao enfermagem registro diario/0.png"
      ],
      "anotacao-enfermagem": [
        "imagens/checklist/Ambulatorio de cirurgias ambulatoriais/20-Anotaçao de enfermagem/0.png"
      ]
    },

    uti: {
      abertura: [
        "imagens/checklist/UTI/0.1-Identificação e Abertura.png",
        "imagens/checklist/UTI/1.1-CNS.jpg",
        "imagens/checklist/UTI/1.2-Carteira convênios/carteirinha bradesco.png",
        "imagens/checklist/UTI/1.2-Carteira convênios/carteirinha Cassi.png",
        "imagens/checklist/UTI/1.2-Carteira convênios/carteirinha hapvida.png"
      ],
      contrato: [
        "imagens/checklist/UTI/2-Contrato Prestacao Serviço/0.png"
      ],
      "termo-esclarecimento": [
        "imagens/checklist/UTI/3-Termo de Esclarecimento e Responsabilidade/0.png"
      ],
      "documento-paciente": [
        "imagens/checklist/UTI/4-Documento com foto.PNG"
      ],
      "documento-responsavel": [
        "imagens/checklist/UTI/4.1-Documento com foto - Copia.PNG"
      ],
      "laudo-aih": [
        "imagens/checklist/UTI/8-Laudo de Solic. AIH.jpg"
      ],
      "guia-operadora": [
        "imagens/checklist/UTI/10-Guia de solicitação de internação - convenio.jpg"
      ],
      anamnese: [
        "imagens/checklist/UTI/11-Anamnese.png"
      ],
      "sumario-alta": [
        "imagens/checklist/UTI/12-Sumario resumo alta.png"
      ],
      "apac-hemoterapia": [
        "imagens/checklist/UTI/13-Apac sangue/0.png",
        "imagens/checklist/UTI/13-Apac sangue/1.png"
      ],
      "evolucao-medica": [
        "imagens/checklist/UTI/14-Evolução medica/0.png"
      ],
      "prescricao-medica": [
        "imagens/checklist/UTI/15-Prescriçao Medica/0.png",
        "imagens/checklist/UTI/15-Prescriçao Medica/1.png"
      ],
      "descricao-cirurgica": [
        "imagens/checklist/UTI/Descricao cirurgica .png"
      ],
      "evolucao-enfermagem": [
        "imagens/checklist/UTI/17-Evolucao enfermagem registro diario/0.png"
      ],
      "anotacao-enfermagem": [
        "imagens/checklist/UTI/18-Anotaçao de enfermagem/0.png",
        "imagens/checklist/UTI/18-Anotaçao de enfermagem/1.png"
      ],
      opme: [
        "imagens/checklist/UTI/18-Formulario de OPME/0.png"
      ],
      fisioterapia: [
        "imagens/checklist/UTI/20-Evolução fisioterapia/0.png",
        "imagens/checklist/UTI/20-Evolução fisioterapia/1.png"
      ],
      "exames-laboratoriais": [
        "imagens/checklist/UTI/26-Exames laboratoriais/0.png",
        "imagens/checklist/UTI/26-Exames laboratoriais/1.png",
        "imagens/checklist/UTI/26-Exames laboratoriais/2.png",
        "imagens/checklist/UTI/26-Exames laboratoriais/3.png"
      ]
    },

    oncologico: {
      abertura: [
        "imagens/checklist/Oncologia/0.1-Identificação e Abertura.png",
        "imagens/checklist/Oncologia/1.1-CNS.jpg"
      ],
      "documento-paciente": [
        "imagens/checklist/Oncologia/2.1-Documento com foto.PNG"
      ],
      "admissao-tratamento": [
        "imagens/checklist/Oncologia/Admissão de tratamento Oncologico/0001.png",
        "imagens/checklist/Oncologia/Admissão de tratamento Oncologico/0002.png",
        "imagens/checklist/Oncologia/Admissão de tratamento Oncologico/0003.png",
        "imagens/checklist/Oncologia/Admissão de tratamento Oncologico/0004.png",
        "imagens/checklist/Oncologia/Admissão de tratamento Oncologico/0005.png",
        "imagens/checklist/Oncologia/Admissão de tratamento Oncologico/0006.png"
      ],
      anatomopatologico: [
        "imagens/checklist/Oncologia/Laudo de Exame Anatomo Patologico/0001.png",
        "imagens/checklist/Oncologia/Laudo de Exame Anatomo Patologico/0002.png"
      ],
      "imuno-histoquimico": [
        "imagens/checklist/Oncologia/Relatorio Imunoistoquimico.png"
      ],
      "exames-imagem": [
        "imagens/checklist/Oncologia/Exames de Imagem RX US TC/0001.png",
        "imagens/checklist/Oncologia/Exames de Imagem RX US TC/0002.png",
        "imagens/checklist/Oncologia/Exames de Imagem RX US TC/0003.png",
        "imagens/checklist/Oncologia/Exames de Imagem RX US TC/0004.png"
      ],
      "evolucao-medica": [
        "imagens/checklist/Oncologia/evolução medica/0001.png",
        "imagens/checklist/Oncologia/evolução medica/0002.png",
        "imagens/checklist/Oncologia/evolução medica/0003.png"
      ],
      "prescricao-medica": [
        "imagens/checklist/Oncologia/Prescrição medica.png",
        "imagens/checklist/Oncologia/Prescriçaõ  medica.png"
      ],
      "controle-frequencia": [
        "imagens/checklist/Oncologia/Controle de Frequencia Individual.png"
      ],
      "retirada-medicamento": [
        "imagens/checklist/Oncologia/Declaração de Retirada.png"
      ],
      "evolucao-enfermeiro": [
        "imagens/checklist/Oncologia/Evolução de Enfermagem.png"
      ],
      "anotacao-enfermagem": [
        "imagens/checklist/Oncologia/Anotação de Enfermagem.png"
      ],
      "evolucao-farmacia": [
        "imagens/checklist/Oncologia/Evolução da farmacia.png"
      ],
      "baixa-medicamento": [
        "imagens/checklist/Oncologia/Formulario baixa de medicamento.png"
      ]
    }
  };
})();
