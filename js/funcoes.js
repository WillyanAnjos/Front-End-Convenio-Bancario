    //Daqui pra baixo, ficou bom :)    
    
    //Carrega tudo quando o documento estiver pronto
    $(document).ready(function () {

        //Setar fundo de opções
        $('.item_inicio').css('background-image', 'url(./imgs/select.png)');
        $('.item_dados').css('background-image', 'url(./imgs/no-select-item-2.png)');
        $('.item_boleto').css('background-image', 'url(./imgs/no-select-item-2.png)');
        $('.item_retorno').css('background-image', 'url(./imgs/no-select-item-2.png)');
        $('.item_fim').css('background-image', 'url(./imgs/no-select-item-2.png)');

        //Esconder as perguntas
        $('#btn_prox_inicio').toggle();
        $('#mensagem_alert').toggle();

        //Tela inicio
        //$('#tela_Inicio').hide();
        $('#perg2').toggle();
        $('#perg3').toggle();

        //Tela Dados
        $('#tela_Dados').hide();
        $('#dado_perg1').hide();
        $('#dado_perg2').hide();

        //Tela Boleto
        $('#tela_Boleto').hide();

        //Tela Retorno
        $('#tela_Retorno').hide();

        //Sub-Telas de ok e Erro
        $('#tela_Ok_Retorno').hide();
        $('#tela_Ok').hide();
        $('#tela_Erro_Retorno').hide();

        //Tela de transição
        $('#tela_Fim').hide();

        //Tela para demonstrar o resultado
        $('#tela_Configurar').hide();


        //*******************************
        //Função sim da primeira pergunta
        //*******************************
        var camp1;
        $('#perg1_sim').click(function () {
            camp1 = !camp1;
            $('#perg2').toggle();
            $("#mensagem_alert").hide();
        });
        //Função não da primeira pergunta
        $('#perg1_não').click(function () {
            //$('#mensagem_alert').toggle();
            cancelarTudo();
            camp1 = false;
        });


        //*******************************
        //Função sim da segunda pergunta
        //*******************************
        var camp2;
        $('#perg2_sim').click(function () {
            camp2 = !camp2;
            $('#perg3').toggle();
            $("#mensagem_alert").hide();
        });
        //Função não da primeira pergunta
        $('#perg2_nao').click(function () {
            //$('#mensagem_alert').toggle();
            cancelarTudo();
            camp2 = false;
        });



        //Variaveis para check
        var c1, c2, c3;

        //Btn check1
        $('#check1').click(function () {
            c1 = !c1;
            verificarCheck();

            $("#mensagem_alert").hide();
        });

        //Btn check2
        $('#check2').click(function () {
            c2 = !c2;
            verificarCheck();
            $("#mensagem_alert").hide();
        });

        //Btn check3
        $('#check3').click(function () {
            c3 = !c3;
            verificarCheck();
            $("#mensagem_alert").hide();
        });

        $('#btn_prox_inicio').click(function () {
            botaoProximo();
        });

        //Função para esconder tudo e mostrar mensagem de alerta
        function cancelarTudo() {
            $("#mensagem_alert").toggle();
            $("#perg2").hide();
            $("#perg3").hide();
            $('#btn_prox_inicio').hide();
        }

        //Função que verifica todos os checks para ativar o botão próximo
        function verificarCheck() {
            if (c1 == true || c2 == true || c3 == true) {
                $('#btn_prox_inicio').show();
            } else {
                $('#btn_prox_inicio').hide();
            }
        }
        //Função para validar se todos os campos foram preenchidos
        function botaoProximo() {
            if (camp1 == true && camp2 == true) {
                if (c1 == true || c2 == true || c3 == true) {
                    $('#tela_Inicio').hide();
                    $('#tela_Dados').show();
                    $('#dado_perg1').show();
                    setarDados();
                }
            }
        }
        //Funções para setar imagem de opções
        function setarInicio() {
            $('.item_inicio').css('background-image', 'url(./imgs/select.png)');
            $('.item_dados').css('background-image', 'url(./imgs/no-select-item-2.png)');
            $('.item_boleto').css('background-image', 'url(./imgs/no-select-item-2.png)');
            $('.item_retorno').css('background-image', 'url(./imgs/no-select-item-2.png)');
            $('.item_fim').css('background-image', 'url(./imgs/no-select-item-2.png)');
        }

        function setarDados() {
            $('.item_inicio').css('background-image', 'url(./imgs/no-select-item.png)');
            $('.item_dados').css('background-image', 'url(./imgs/select.png)');
            $('.item_boleto').css('background-image', 'url(./imgs/no-select-item-2.png)');
            $('.item_retorno').css('background-image', 'url(./imgs/no-select-item-2.png)');
            $('.item_fim').css('background-image', 'url(./imgs/no-select-item-2.png)');
        }

        function setarBoleto() {
            $('.item_inicio').css('background-image', 'url(./imgs/no-select-item.png)');
            $('.item_dados').css('background-image', 'url(./imgs/no-select-item.png)');
            $('.item_boleto').css('background-image', 'url(./imgs/select.png)');
            $('.item_retorno').css('background-image', 'url(./imgs/no-select-item-2.png)');
            $('.item_fim').css('background-image', 'url(./imgs/no-select-item-2.png)');
        }

        function setarRetorno() {
            $('.item_inicio').css('background-image', 'url(./imgs/no-select-item.png)');
            $('.item_dados').css('background-image', 'url(./imgs/no-select-item.png)');
            $('.item_boleto').css('background-image', 'url(./imgs/no-select-item.png)');
            $('.item_retorno').css('background-image', 'url(./imgs/select.png)');
            $('.item_fim').css('background-image', 'url(./imgs/no-select-item-2.png)');
        }

        function setarFim() {
            $('.item_inicio').css('background-image', 'url(./imgs/no-select-item-2.png)');
            $('.item_dados').css('background-image', 'url(./imgs/no-select-item-2.png)');
            $('.item_boleto').css('background-image', 'url(./imgs/no-select-item-2.png)');
            $('.item_retorno').css('background-image', 'url(./imgs/no-select-item-2.png)');
            $('.item_fim').css('background-image', 'url(./imgs/select.png)');
        }

        //TELA DADOS
        //*******************************
        $('.card_dado').click(function () {
            $('#dado_perg2').show();
            $('#dado_perg1').hide();
            //setarBoleto();
        });
        $('#btn_proximo_Dados').click(function () {
            $('#dado_perg2').hide();
            $('#dado_perg1').hide();
            $('#tela_Dados').hide();
            $('#tela_Boleto').show();
            setarBoleto();
            //setarRetorno();

        });

        //TELA RETORNO
        $('#btn_Proximo_Boleto').click(function () {
            $('#tela_Boleto').hide();
            $('#tela_Retorno').show();
            setarRetorno();
            //setarFim();
        });

        //TELA FIM
        $('#btn_retorno_arquivo').click(function () {
            $('#tela_Retorno').hide();
            //$('#tela_Erro_Retorno').show();
            $('#tela_Ok_Retorno').show();
            setarFim();
            $('#botoes').hide();
        });


        $('#btn_Proximo_Retorno').click(function () {
            setarFim();
            $('#tela_Ok_Retorno').hide();
            $('#tela_Boleto').hide();
            $('#tela_Retorno').hide();

            $('#tela_Ok').show();
            chamarTempo();
        });
        //Função para criar um delay de transição
        function chamarTempo() {
            $('#botoes').hide();
            $('#tela_Ok').fadeOut();
            $('#tela_Fim').fadeIn(1000);
            
        }

        $('#btn_adicionar_novo_convenio').click(function () {
            $('#tela_Fim').hide();
            $('#botoes').hide();
            $('#tela_Configurar').show();
        });

        $('#btn_erro_retorno_alterar').click(function () {
            $('#tela_Retorno').show();
            $('#tela_Erro_Retorno').hide();
        });
        $('#btn_erro_retorno_conven').click(function () {
            $('#tela_Retorno').hide();
            $('#tela_Erro_Retorno').hide();
            $('#tela_Dados').show();
            $('#dado_perg2').show();
        });
        //Botão para resetar tudo
        $('#btn_configurar').click(function () {
            resetarTudo();
        });

        //Função que reseta tudo e volta para o inicio
        function resetarTudo(){
            setarInicio();
            //Esconder as perguntas
            $('#botoes').show();
            $('#btn_prox_inicio').toggle();
            $('#mensagem_alert').toggle();

            //Tela inicio
            $('#tela_Inicio').show();
            $('#perg2').toggle();
            $('#perg3').toggle();

            //Tela Dados
            $('#tela_Dados').hide();
            $('#dado_perg1').hide();
            $('#dado_perg2').hide();

            //Tela Boleto
            $('#tela_Boleto').hide();

            //Tela Retorno
            $('#tela_Retorno').hide();

            $('#tela_Ok_Retorno').hide();
            $('#tela_Ok').hide();
            $('#tela_Erro_Retorno').hide();

            $('#tela_Fim').hide();
            $('#tela_Configurar').hide();

            camp1 = camp2 = false;
            c1 = c2 = c3 = false;
            $("#mensagem_alert").hide();
            $('#perg1_sim').prop('checked', false);
            $('#perg1_não').prop('checked', false);
            $('#perg2_sim').prop('checked', false);
            $('#perg2_nao').prop('checked', false);

            $('#check1').prop('checked', false);
            $('#check2').prop('checked', false);
            $('#check3').prop('checked', false);

            /*
            $('#txt_nome').text('');
            $('#txt_cpf').text('');
            $('#txt_ende').text('');
            $('#txt_complem').text('');
            $('#txt_nume').text('');
            $('#txt_bairro').text('');
            $('#txt_cep').text('');

            $('#nome').text('');
            $('#agencia').text('');
            $('#dv').text('');
            $('#conta').text('');
            */
        }

    });