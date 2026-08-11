(function () {
  "use strict";

  const item = (id, text, imageGroups, options = {}) => ({
    id,
    text,
    imageGroups: (Array.isArray(imageGroups) ? imageGroups : [imageGroups]).filter(Boolean),
    ...options
  });
  const section = (number, title, items, options = {}) => ({ number, title, items, ...options });
  const stage = (title, description, items) => ({ variant: "stage", title, description, items });

  const documentNotice = "Para documentos com frente e verso, é necessário apresentar a cópia de ambos os lados.";
  const identification = "Anamnese do paciente — Identificação completa: nome, telefone, data de nascimento, CPF, CNS (Cartão Nacional do SUS), endereço, bairro, CEP, nome da mãe, município, médico, convênio e registro do atendimento.";
  const privateTags = ["CONVÊNIOS", "PARTICULARES"];
  const insuranceTags = ["CONVÊNIOS"];
  const susTags = ["SUS / CORESS"];

  window.CHECKLIST_GUIDANCE = [
    "Todos os campos obrigatórios devem estar preenchidos.",
    "Campos de identificação profissional devem estar assinados e carimbados.",
    "Preenchimento manuscrito deve estar com letra legível (se houver).",
    "Evoluções médicas devem ser diárias, compatíveis com os dias de internação.",
    "Conferir se as datas e horários estão corretos e em sequência cronológica."
  ];
  window.CHECKLIST_DOCUMENT_NOTICE = documentNotice;

  window.CHECKLIST_DATA = {
    cirurgico: {
      title: "Prontuário Cirúrgico",
      sections: [
        section(1, "Abertura do Cadastro", [
          item("abertura", identification, "abertura")
        ]),
        section(2, "Termos, declarações e documentos", [
          item("contrato", "Contrato de prestação de serviços médicos e hospitalares assinado pelo paciente e/ou responsável.", "contrato", { tags: privateTags }),
          item("termo-esclarecimento", "Termo de esclarecimento, declaração e responsabilidade assinado pelo paciente e/ou responsável.", "termo-esclarecimento"),
          item("documento-paciente", "Cópia do documento do paciente com foto, contendo número do CPF.", "documento-paciente"),
          item("documento-responsavel", "Se menor de idade, cópia do documento com foto do responsável, contendo número do CPF.", "documento-responsavel"),
          item("consentimento-cirurgico", "Termo de consentimento para intervenção cirúrgica assinado pelo paciente e/ou responsável.", "consentimento-cirurgico"),
          item("amputacao", "Termo de amputação de membro (se houver).", "amputacao"),
          item("obito", "Declaração de óbito (se houver).", "obito")
        ], { notice: documentNotice }),
        section(3, "Registros de autorização", [
          item("guia-operadora", "Guia de Autorização da Operadora.", "guia-operadora", { tags: insuranceTags })
        ]),
        section(4, "Registros assistenciais", [
          item("anamnese", "Anamnese médica.", "anamnese"),
          item("sumario-alta", "Sumário / Resumo de alta hospitalar.", "sumario-alta"),
          item("apac-hemoterapia", "APAC de Hemoterapia + Relatório de Hemotransfusão com indexação das etiquetas (se houver).", "apac-hemoterapia"),
          item("evolucao-medica", "Evoluções médicas subsequentes compatíveis com o tempo de permanência.", "evolucao-medica"),
          item("prescricao-medica", "Prescrições médicas em ordem cronológica.", "prescricao-medica"),
          item("descricao-cirurgica", "Descrição cirúrgica.", "descricao-cirurgica"),
          item("relatorio-anestesia", "Relatório de anestesia.", "relatorio-anestesia"),
          item("avaliacao-pre-anestesica", "Formulário de avaliação pré-anestésica.", "avaliacao-pre-anestesica"),
          item("produtos-aviso-cirurgia", "Relatório de produtos por atendimento / Aviso de cirurgia (folha de gastos).", "produtos-aviso-cirurgia"),
          item("srpa", "Ficha de acompanhamento do paciente na SRPA (Sala de Recuperação Pós-Anestésica).", "srpa"),
          item("enfermagem-trans-operatoria", "Formulário de enfermagem trans-operatório.", "enfermagem-perioperatoria"),
          item("cirurgia-segura", "Formulário Cirurgia segura.", "cirurgia-segura"),
          item("integrador-quimico", "Ficha de Integrador químico.", "integrador-quimico"),
          item("opme", "Formulário de Registro de utilização de OPME com etiquetas e/ou invólucros indexados (se houver).", "opme"),
          item("checklist-pre-operatorio", "Formulário de cirurgia segura — checklist pré-operatório.", "cirurgia-segura"),
          item("exames-laboratoriais", "Imprimir exames laboratoriais (se houver).", "exames-laboratoriais"),
          item("evolucao-enfermagem", "Evolução de enfermagem — registro diário.", "evolucao-enfermagem"),
          item("anotacao-enfermagem", "Anotação de enfermagem — registro diário.", "anotacao-enfermagem")
        ])
      ]
    },

    clinico: {
      title: "Prontuário Clínico",
      sections: [
        section(1, "Abertura do Cadastro", [item("abertura", identification, "abertura")]),
        section(2, "Termos, declarações e documentos", [
          item("contrato", "Contrato de prestação de serviços médicos e hospitalares assinado pelo paciente e/ou responsável.", "contrato", { tags: privateTags }),
          item("termo-esclarecimento", "Termo de esclarecimento, declaração e responsabilidade assinado pelo paciente e/ou responsável.", "termo-esclarecimento"),
          item("documento-paciente", "Cópia do documento do paciente com foto, contendo número do CPF.", "documento-paciente"),
          item("documento-responsavel", "Se menor de idade, cópia do documento com foto do responsável, contendo número do CPF.", "documento-responsavel"),
          item("obito", "Declaração de óbito (se houver).", "obito")
        ], { notice: documentNotice }),
        section(3, "Registros de autorização", [
          item("guia-operadora", "Guia de Autorização da Operadora.", "guia-operadora", { tags: insuranceTags })
        ]),
        section(4, "Registros assistenciais", [
          item("anamnese", "Anamnese médica.", "anamnese"),
          item("sumario-alta", "Sumário / Resumo de alta hospitalar.", "sumario-alta"),
          item("apac-hemoterapia", "APAC de Hemoterapia + Relatório de Hemotransfusão com indexação das etiquetas (se houver).", "apac-hemoterapia"),
          item("evolucao-medica", "Evoluções médicas subsequentes compatíveis com o tempo de permanência.", "evolucao-medica"),
          item("prescricao-medica", "Prescrições médicas em ordem cronológica.", "prescricao-medica"),
          item("exames-laboratoriais", "Imprimir exames laboratoriais (se houver)."),
          item("evolucao-enfermagem", "Evolução de enfermagem — registro diário.", "evolucao-enfermagem"),
          item("anotacao-enfermagem", "Anotação de enfermagem — registro diário.", "anotacao-enfermagem"),
          item("fisioterapia", "Evolução diária de fisioterapia (se houver).", "fisioterapia")
        ])
      ]
    },

    "clinico-rn": {
      title: "Prontuário Cirúrgico — RN",
      sections: [
        section(1, "Abertura do Cadastro", [item("abertura", identification, "abertura")]),
        section(2, "Termos, declarações e documentos", [
          item("contrato", "Contrato de prestação de serviços médicos e hospitalares assinado pelo paciente e/ou responsável.", "contrato", { tags: privateTags }),
          item("termo-esclarecimento", "Termo de esclarecimento, declaração e responsabilidade assinado pelo paciente e/ou responsável.", "termo-esclarecimento"),
          item("documento-paciente", "Cópia do documento do paciente com foto, contendo número do CPF.", "documento-paciente"),
          item("documento-responsavel", "Se menor de idade, cópia do documento com foto do responsável, contendo número do CPF.", "documento-responsavel"),
          item("obito-neonatal", "Declaração de óbito neonatal (se houver).", "obito")
        ], { notice: documentNotice }),
        section(3, "Registros de autorização", [
          item("guia-operadora", "Guia de Autorização da Operadora.", "guia-operadora", { tags: insuranceTags })
        ]),
        section(4, "Registros assistenciais — Recém-Nascido", [
          item("anamnese", "Anamnese médica.", "anamnese"),
          item("sumario-alta", "Sumário / Resumo de alta hospitalar.", "sumario-alta"),
          item("apac-hemoterapia", "APAC de Hemoterapia + Relatório de Hemotransfusão com indexação das etiquetas (se houver)."),
          item("identificacao-rn", "Evolução de enfermagem contendo: Identificação do Recém-Nascido — Folhinha amarela + Pezinho do bebê carimbado.", "identificacao-rn"),
          item("recepcao-rn", "Ficha de recepção do RN.", "recepcao-rn"),
          item("admissao-uti", "Caso o RN venha transferido da UTI: ficha de admissão em UTI.", "admissao-uti"),
          item("evolucao-medica-rn", "Evoluções médicas subsequentes compatíveis com o tempo de permanência.", "evolucao-medica-rn"),
          item("prescricao-rn", "Prescrições médicas em ordem cronológica.", "prescricao-rn"),
          item("exames-laboratoriais", "Imprimir exames laboratoriais (se houver).", "exames-laboratoriais"),
          item("evolucao-enfermagem", "Evolução de enfermagem — registro diário.", "evolucao-enfermagem"),
          item("anotacao-enfermagem", "Anotação de enfermagem — registro diário.", "anotacao-enfermagem"),
          item("fisioterapia", "Evolução diária de fisioterapia (se houver).", "fisioterapia")
        ])
      ]
    },

    obstetrico: {
      title: "Prontuário Obstétrico",
      introNotice: "Caso o bebê fique internado: tirar cópia da identificação do RN (folha amarela), da evolução de enfermagem com registro do pezinho, da ficha de recepção do RN e da 1ª evolução médica — permanecendo na conta da mãe.",
      sections: [
        section(1, "Abertura do Cadastro", [item("abertura", identification, "abertura")]),
        section(2, "Termos, declarações e documentos", [
          item("contrato", "Contrato de prestação de serviços médicos e hospitalares assinado pelo paciente e/ou responsável.", "contrato", { tags: privateTags }),
          item("termo-esclarecimento", "Termo de esclarecimento, declaração e responsabilidade assinado pelo paciente e/ou responsável.", "termo-esclarecimento"),
          item("documento-paciente", "Cópia do documento do paciente com foto, contendo número do CPF.", "documento-paciente"),
          item("documento-responsavel", "Se menor de idade, cópia do documento com foto do responsável, contendo número do CPF.", "documento-responsavel"),
          item("consentimento-cirurgico", "Termo de consentimento para intervenção cirúrgica.", "consentimento-cirurgico"),
          item("declaracao-nascido-vivo", "Declaração de nascido vivo (ficha rosa) — RN.", "declaracao-nascido-vivo"),
          item("certidao-nascimento", "Certidão de nascimento — RN.", "certidao-nascimento"),
          item("obito", "Declaração de óbito (se houver).", "obito"),
          item("obito-neonatal", "Declaração de óbito neonatal (se houver).", "obito")
        ], { notice: documentNotice }),
        section(3, "Registros de autorização", [
          item("guia-operadora", "Guia de Autorização da Operadora.", "guia-operadora", { tags: insuranceTags })
        ]),
        section(4, "Registros assistenciais — Médico e Parto", [
          item("anamnese", "Anamnese médica.", "anamnese"),
          item("sumario-alta", "Sumário / Resumo de alta hospitalar.", "sumario-alta"),
          item("ficha-risco", "Ficha de acolhimento e classificação de risco."),
          item("apac-hemoterapia", "APAC de Hemoterapia + Relatório de Hemotransfusão com indexação das etiquetas (se houver).", "apac-hemoterapia"),
          item("laudo-aih", "Laudo para Solicitação de Autorização de Internação Hospitalar (AIH), quando houver outro procedimento associado ao principal.", "laudo-aih", { note: "Ex.: curetagem uterina, hemorragia pós-parto ou reabordagem cirúrgica por laceração pós-parto realizada." }),
          item("evolucao-medica", "Evoluções médicas compatíveis com o tempo de permanência.", "evolucao-medica"),
          item("prescricao-medica", "Prescrições médicas em ordem cronológica.", "prescricao-medica"),
          item("partograma-descricao", "Partograma (parto normal) e/ou Descrição Cirúrgica (parto cesárea).", "partograma-descricao"),
          item("planejamento-familiar", "Procedimentos: Laqueadura / Vasectomia (se houver).", "planejamento-familiar", { note: "Obrigatório Planejamento Familiar — SUS." }),
          item("relatorio-anestesia", "Relatório de anestesia.", "relatorio-anestesia"),
          item("avaliacao-pre-anestesica", "Formulário de avaliação pré-anestésica.", "avaliacao-pre-anestesica"),
          item("produtos-aviso-cirurgia", "Relatório de produtos por atendimento / Aviso de cirurgia (folha de gastos).", "produtos-aviso-cirurgia"),
          item("srpa", "Ficha de acompanhamento do paciente na SRPA.", "srpa"),
          item("enfermagem-perioperatoria", "Enfermagem perioperatória.", "enfermagem-perioperatoria"),
          item("cirurgia-segura", "Formulário Cirurgia segura.", "cirurgia-segura"),
          item("integrador-quimico", "Ficha de integrador químico.", "integrador-quimico"),
          item("exames-laboratoriais", "Imprimir exames laboratoriais.", "exames-laboratoriais"),
          item("cardiotocografia", "Cardiotocografia fetal (se houver).", "cardiotocografia"),
          item("evolucao-enfermagem", "Evolução de enfermagem — registro diário.", "evolucao-enfermagem"),
          item("anotacao-enfermagem", "Anotação de enfermagem — registro diário.", "anotacao-enfermagem")
        ]),
        section(5, "Registros assistenciais — Recém-Nascido (RN)", [
          item("identificacao-rn", "Evolução de enfermagem contendo: Identificação do RN — Folhinha amarela + Pezinho do bebê carimbado.", "identificacao-rn"),
          item("recepcao-rn", "Ficha de recepção do RN.", "recepcao-rn"),
          item("sumario-rn", "Sumário de alta do RN.", "sumario-rn"),
          item("evolucao-medica-rn", "Evolução médica do RN.", "evolucao-medica-rn"),
          item("prescricao-rn", "Prescrição do recém-nascido.", "prescricao-rn"),
          item("exames-laboratoriais-rn", "Imprimir exames laboratoriais do RN (se houver).", "exames-laboratoriais-rn"),
          item("registros-enfermagem-rn", "Evolução de enfermagem / anotação de enfermagem — registro diário.", ["evolucao-enfermagem-rn", "anotacao-enfermagem-rn"])
        ])
      ]
    },

    pa: {
      title: "Pronto Atendimento (PA)",
      sections: [
        section(1, "Abertura do Cadastro", [item("abertura", identification, "abertura")]),
        section(2, "Termos, declarações e documentos", [
          item("contrato", "Contrato de prestação de serviços médicos e hospitalares assinado pelo paciente e/ou responsável.", "contrato", { tags: privateTags }),
          item("termo-esclarecimento", "Termo de esclarecimento, declaração e responsabilidade assinado pelo paciente e/ou responsável.", "termo-esclarecimento"),
          item("documento-paciente", "Cópia do documento do paciente com foto, contendo número do CPF.", "documento-paciente"),
          item("documento-responsavel", "Se menor de idade, cópia do documento com foto do responsável, contendo número do CPF.", "documento-responsavel"),
          item("obito", "Declaração de óbito (se houver).", "obito")
        ], { notice: documentNotice }),
        section(3, "Registros de autorização", [
          item("guia-operadora", "Guia de Autorização da Operadora.", "guia-operadora", { tags: insuranceTags })
        ]),
        section(4, "Registros assistenciais", [
          item("anamnese", "Anamnese médica.", "anamnese"),
          item("ficha-risco", "Ficha de acolhimento e classificação de risco.", "ficha-risco"),
          item("evolucao-medica", "Evoluções médicas compatíveis com o tempo de permanência e em ordem cronológica.", "evolucao-medica"),
          item("prescricao-medica", "Prescrições médicas em ordem cronológica.", "prescricao-medica"),
          item("prescricao-alta", "Prescrição de alta médica.", "prescricao-medica"),
          item("descricao-cirurgica", "Descrição cirúrgica (se houver — pequenos procedimentos)."),
          item("evolucao-enfermagem", "Evolução de enfermagem — registro diário.", "evolucao-enfermagem"),
          item("anotacao-enfermagem", "Anotação de enfermagem — registro diário.", "anotacao-enfermagem"),
          item("exames-laboratoriais", "Imprimir exames laboratoriais (se houver).", "exames-laboratoriais")
        ])
      ]
    },

    "ambulatorial-consulta": {
      title: "Ambulatorial — Consulta",
      sections: [
        section(1, "Abertura do Cadastro", [item("abertura", identification, "abertura")]),
        section(2, "Registros de autorização", [
          item("sisreg", "Guia de Autorização SISREG.", "sisreg", { tags: susTags })
        ]),
        section(3, "Registros assistenciais", [
          item("anamnese", "Anamnese médica.", "anamnese")
        ])
      ]
    },

    "ambulatorial-exames": {
      title: "Ambulatorial — Exames",
      sections: [
        section(1, "Abertura do Cadastro", [item("abertura", identification, "abertura")]),
        section(2, "Registros de autorização", [
          item("guia-operadora", "Guia de Autorização da Operadora.", null, { tags: insuranceTags }),
          item("sisreg", "Guia de Autorização SISREG.", "sisreg", { tags: susTags }),
          item("solicitacao-exames", "Solicitação médica de exames."),
          item("apac", "Autorização de Procedimentos Ambulatoriais de Alta Complexidade — APAC autorizada para tomografia computadorizada, ressonância magnética, endoscopia e colonoscopia.", "apac", { tags: susTags })
        ]),
        section(3, "Registros assistenciais", [
          item("laudo-imagem", "Laudo do exame de imagem.")
        ])
      ]
    },

    "ambulatorial-cirurgia": {
      title: "Ambulatorial — Cirurgia Ambulatorial",
      sections: [
        section(1, "Abertura do Cadastro", [item("abertura", identification, "abertura")]),
        section(2, "Termos, declarações e documentos", [
          item("contrato", "Contrato de prestação de serviços médicos e hospitalares assinado pelo paciente e/ou responsável.", "contrato", { tags: privateTags }),
          item("termo-esclarecimento", "Termo de esclarecimento, declaração e responsabilidade assinado pelo paciente e/ou responsável.", "termo-esclarecimento"),
          item("documento-paciente", "Cópia do documento do paciente com foto, contendo número do CPF.", "documento-paciente"),
          item("documento-responsavel", "Se menor de idade, cópia do documento com foto do responsável, contendo número do CPF.", "documento-responsavel"),
          item("consentimento-cirurgico", "Termo de consentimento para intervenção cirúrgica assinado pelo paciente e/ou responsável.", "consentimento-cirurgico")
        ], { notice: documentNotice }),
        section(3, "Registros de autorização", [
          item("apac", "Autorização de Procedimentos Ambulatoriais de Alta Complexidade — APAC autorizada.", "apac", { tags: susTags }),
          item("sisreg", "Guia de Autorização SISREG.", "sisreg", { tags: susTags })
        ]),
        section(4, "Registros assistenciais", [
          item("anamnese", "Anamnese médica.", "anamnese"),
          item("sumario-alta", "Sumário / Resumo de alta hospitalar.", "sumario-alta"),
          item("evolucao-medica", "Evolução médica.", "evolucao-medica"),
          item("descricao-cirurgica", "Descrição cirúrgica.", "descricao-cirurgica"),
          item("enfermagem-trans-operatoria", "Formulário de enfermagem trans-operatório.", "enfermagem-perioperatoria"),
          item("cirurgia-segura", "Formulário Cirurgia segura.", "cirurgia-segura"),
          item("integrador-quimico", "Ficha de integrador químico (se houver)."),
          item("opme", "Formulário de Registro de utilização de OPME com etiquetas e/ou invólucros indexados (se houver).", "opme"),
          item("evolucao-enfermagem", "Evolução de enfermagem — registro diário.", "evolucao-enfermagem"),
          item("anotacao-enfermagem", "Anotação de enfermagem — registro diário.", "anotacao-enfermagem"),
          item("exames-laboratoriais", "Imprimir exames laboratoriais (se houver).")
        ])
      ]
    },

    uti: {
      title: "Unidade Intensiva (UTI)",
      sections: [
        section(1, "Abertura do Cadastro", [item("abertura", identification, "abertura")]),
        section(2, "Termos, declarações e documentos", [
          item("contrato", "Contrato de prestação de serviços médicos e hospitalares assinado pelo paciente e/ou responsável.", "contrato", { tags: privateTags }),
          item("termo-esclarecimento", "Termo de esclarecimento, declaração e responsabilidade assinado pelo paciente e/ou responsável.", "termo-esclarecimento"),
          item("documento-paciente", "Cópia do documento do paciente com foto, contendo número do CPF.", "documento-paciente"),
          item("documento-responsavel", "Se menor de idade, cópia do documento com foto do responsável, contendo número do CPF.", "documento-responsavel"),
          item("consentimento-cirurgico", "Termo de consentimento para intervenção cirúrgica.")
        ], { notice: documentNotice }),
        section(3, "Registros de autorização", [
          item("guia-operadora", "Guia de Autorização da Operadora.", "guia-operadora", { tags: insuranceTags })
        ]),
        section(4, "Registros assistenciais", [
          item("anamnese", "Anamnese médica.", "anamnese"),
          item("sumario-alta", "Sumário / Resumo de alta hospitalar.", "sumario-alta"),
          item("apac-hemoterapia", "APAC de Hemoterapia + Relatório de Hemotransfusão com indexação das etiquetas (se houver).", "apac-hemoterapia"),
          item("laudo-aih", "Laudo para Solicitação de Autorização de Internação Hospitalar (AIH), quando houver outro procedimento associado ao principal.", "laudo-aih", { note: "Ex.: drenagem torácica ou traqueostomia." }),
          item("evolucao-intensivista", "Evolução médica intensivista — compatível com o tempo de permanência.", "evolucao-medica"),
          item("evolucao-diarista", "Evolução médica diarista — turno diurno e noturno.", "evolucao-medica"),
          item("prescricao-medica", "Prescrições médicas em ordem cronológica.", "prescricao-medica"),
          item("prescricao-hemodialise", "Prescrição de hemodiálise (se houver)."),
          item("descricao-cirurgica", "Descrição cirúrgica, se houver procedimentos.", "descricao-cirurgica", { note: "Ex.: implante de cateter, PICC ou drenagem de tórax." }),
          item("opme", "Formulário de Registro de utilização de OPME com etiquetas e/ou invólucros indexados (se houver).", "opme"),
          item("fisioterapia", "Evolução diária do serviço de fisioterapia.", "fisioterapia"),
          item("evolucao-enfermagem", "Evolução de enfermagem — registro diário.", "evolucao-enfermagem"),
          item("anotacao-enfermagem", "Anotação de enfermagem — registro diário.", "anotacao-enfermagem"),
          item("eletrocardiograma", "Eletrocardiograma (se houver)."),
          item("exames-laboratoriais", "Imprimir exames laboratoriais (se houver).", "exames-laboratoriais")
        ])
      ]
    },

    oncologico: {
      title: "Tratamento Oncológico",
      sections: [
        section(1, "Abertura do Cadastro", [item("abertura", identification)]),
        section(2, "Termos, declarações e documentos", [
          item("documento-paciente", "Cópia do documento do paciente com foto, contendo número do CPF (se houver).")
        ], { notice: documentNotice }),
        section(3, "Registros assistenciais — Início de Tratamento", [
          item("admissao-tratamento", "Admissão de tratamento oncológico."),
          item("anatomopatologico", "Laudo de exame anatomopatológico."),
          item("imuno-histoquimico", "Relatório imuno-histoquímico (se houver)."),
          item("exames-imagem", "Ressonância magnética, tomografia computadorizada ou ultrassonografia (se houver).")
        ]),
        stage("Tratamento Ativo", "Período em que o paciente permanece em acompanhamento e recebendo terapia oncológica, conforme o plano terapêutico estabelecido pela equipe médica, podendo ocorrer semanalmente, a cada 15 dias, 30 dias ou 90 dias. Nos casos de tratamento semanal, o controle de frequência deverá ser entregue ao final de cada mês.", [
          item("evolucao-medica", "Evolução médica (se houver)."),
          item("prescricao-medica", "Prescrições médicas em ordem cronológica."),
          item("controle-frequencia", "Controle de frequência individual de quimioterapia."),
          item("retirada-medicamento", "Declaração de retirada de medicamento."),
          item("evolucao-enfermeiro", "Evolução do enfermeiro."),
          item("anotacao-enfermagem", "Anotação de enfermagem."),
          item("evolucao-farmacia", "Evolução da farmácia (se houver)."),
          item("exames-laboratoriais", "Imprimir exames laboratoriais."),
          item("baixa-medicamento", "Formulário de baixa de medicamento.")
        ]),
        stage("Seguimento (acompanhamento)", "Paciente que permanece em acompanhamento pela equipe de Oncologia para monitoramento da evolução clínica.", [
          item("consulta-medica", "Consulta médica."),
          item("exames-seguimento", "Imprimir exames laboratoriais e de imagem (se houver).")
        ])
      ]
    }
  };
})();
