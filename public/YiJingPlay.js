
/* Elements */
const linhasContainer = document.getElementById("linescontainer"),
hexinfoa = document.getElementById("hexinfoa"),
hexinfob = document.getElementById("hexinfob"),
hextitle = document.getElementById("hextitle"),
thextitle = document.getElementById("thextitle"),
Yang = "Yang", Yin = "Yin", dYin = "dYin", dYang = "dYang";

thextitle.textContent = "\nHexagrama Transmutado";
hextitle.textContent = "\n Hexagrama Original";
hexinfoa.textContent = "\n Descrição breve do Hexagrama Original";
hexinfob.textContent = "\n Descrição breve do Hexagrama Transmutado";
/* Lista de Hexagramas + Listas*/
const hexagramaLista = [
    { sequence: ["Yang", "Yang", "Yang", "Yang", "Yang", "Yang"], title: "H1. 乾 (Qián) - O Criativo", description: `H1. 乾 (Qián) - O Criativo\n\nO Criativo é o Primeiro.`},
    { sequence: ["Yin", "Yin", "Yin", "Yin", "Yin", "Yin"], title: "H2. 坤 (Kūn) - O Receptivo", description:"H2. 坤 (Kūn) - O Receptivo"},
    { sequence: ["Yang", "Yin", "Yin", "Yin", "Yang", "Yin"], title: "H3. 屯 (Zhūn) - A Dificuldade Inicial", description:"H3. 屯 (Zhūn) - A Dificuldade Inicial"},
    { sequence: ["Yin", "Yang", "Yin", "Yin", "Yin", "Yang"], title: "H4. 蒙 (Méng) - A Inexperiência", description:"H4. 蒙 (Méng) - A Inexperiência"},
    { sequence: ["Yang", "Yang", "Yang", "Yin", "Yang", "Yin"], title: "H5. 需 (Xū) - A Espera", description:"H5. 需 (Xū) - A Espera"},
    { sequence: ["Yin", "Yang", "Yin", "Yang", "Yang", "Yang"], title: "H6. 訟 (Sòng) - O Conflito", description:"H6. 訟 (Sòng) - O Conflito" },
    { sequence: ["Yin", "Yang", "Yin", "Yin", "Yin", "Yin"], title: "H7. 師 (Shī) - O Exército", description:"H7. 師 (Shī) - O Exército" },
    { sequence: ["Yin", "Yin", "Yin", "Yin", "Yang", "Yin"], title: "H8. 比 (Bǐ) - A União", description:"H8. 比 (Bǐ) - A União" },
    { sequence: ["Yang", "Yang", "Yang", "Yin", "Yang", "Yang"], title: "H9. 小畜 (Xiǎo Chù) - O Poder de Domesticação do Pequeno", description:"omesticação do Pequeno" },
    { sequence: ["Yang", "Yang", "Yin", "Yang", "Yang", "Yang"], title: "H10. 履 (Lǚ) - A Conduta", description: "10. 履 (Lǚ) - A Conduta" },
    { sequence: ["Yang", "Yang", "Yang", "Yin", "Yin", "Yin"], title: "H11. 泰 (Tài) - A Paz", description:"H11. 泰 (Tài) - A Paz" },
    { sequence: ["Yin", "Yin", "Yin", "Yang", "Yang", "Yang"], title: "H12. 否 (Pǐ) - A Estagnação", description:" 否 (Pǐ) - A Estagnação" },
    { sequence: ["Yang", "Yin", "Yang", "Yang", "Yang", "Yang"], title: "H13. 同人 (Tóng Rén) - A Comunidade com os Homens", description:"munidade com os Homens" },
    { sequence: ["Yang", "Yang", "Yang", "Yang", "Yin", "Yang"], title: "H14. 大有 (Dà Yǒu) - A Grande Colheita", description:"u) - A Grande Colheita" },
    { sequence: ["Yin", "Yin", "Yang", "Yin", "Yin", "Yin"], title: "H15. 謙 (Qiān) - A Modéstia", description:" 謙 (Qiān) - A Modéstia" },
    { sequence: ["Yin", "Yin", "Yin", "Yang", "Yin", "Yin"], title: "H16. 豫 (Yù) - O Entusiasmo", description:" 豫 (Yù) - O Entusiasmo" },
    { sequence: ["Yang", "Yin", "Yin", "Yang", "Yang", "Yin"], title: "H17. 隨 (Suí) - O Seguimento", description:"隨 (Suí) - O Seguimento" },
    { sequence: ["Yin", "Yang", "Yang", "Yin", "Yin", "Yang"], title: "H18. 蠱 (Gǔ) - O Trabalho sobre o Que está Estragado", description:"e o Que está Estragado" },
    { sequence: ["Yang", "Yang", "Yin", "Yin", "Yin", "Yin"], title: "H19. 臨 (Lín) - A Aproximação", description:" (Lín) - A Aproximação" },
    { sequence: ["Yin", "Yin", "Yin", "Yin", "Yang", "Yang"], title: "H20. 觀 (Guān) - A Contemplação", description:"Guān) - A Contemplação" },
    { sequence: ["Yang", "Yin", "Yin", "Yang", "Yin", "Yang"], title: "H21. 噬嗑 (Shì Kè) - A Mordida Transformadora", description:"Mordida Transformadora" },
    { sequence: ["Yang", "Yin", "Yang", "Yin", "Yin", "Yang"], title: "H22. 賁 (Bì) - A Graça", description:"H22. 賁 (Bì) - A Graça" },
    { sequence: ["Yin", "Yin", "Yin", "Yin", "Yin", "Yang"], title: "H23. 剝 (Bō) - A Desintegração", description:"(Bō) - A Desintegração" },
    { sequence: ["Yang", "Yin", "Yin", "Yin", "Yin", "Yin"], title: "H24. 復 (Fù) - O Retorno", description:"24. 復 (Fù) - O Retorno" },
    { sequence: ["Yang", "Yin", "Yin", "Yang", "Yang", "Yang"], title: "H25. 無妄 (Wú Wàng) - A Inocência", description:"Wú Wàng) - A Inocência" },
    { sequence: ["Yang", "Yang", "Yang", "Yin", "Yin", "Yang"], title: "H26. 大畜 (Dà Chù) - O Poder de Domesticação do Grande", description:"Domesticação do Grande" },
    { sequence: ["Yang", "Yin", "Yin", "Yin", "Yin", "Yang"], title: "H27. 頤 (Yí) - A Nutrição", description:"7. 頤 (Yí) - A Nutrição" },
    { sequence: ["Yin", "Yang", "Yang", "Yang", "Yang", "Yin"], title: "H28. 大過 (Dà Guò) - A Preponderância do Grande", description:"eponderância do Grande" },
    { sequence: ["Yin", "Yang", "Yin", "Yin", "Yang", "Yin"], title: "H29. 坎 (Kǎn) - O Abismo", description:"29. 坎 (Kǎn) - O Abismo" },
    { sequence: ["Yang", "Yin", "Yang", "Yang", "Yin", "Yang"], title: "H30. 離 (Lí) - A Aderência", description:". 離 (Lí) - A Aderência" },
    { sequence: ["Yin", "Yin", "Yang", "Yang", "Yang", "Yin"], title: "H31. 咸 (Xián) - A Influência", description:" (Xián) - A Influência" },
    { sequence: ["Yin", "Yang", "Yang", "Yang", "Yin", "Yin"], title: "H32. 恆 (Héng) - A Duração", description:". 恆 (Héng) - A Duração" },
    { sequence: ["Yin", "Yin", "Yang", "Yang", "Yang", "Yang"], title: "H33. 遯 (Dùn) - A Retirada", description:". 遯 (Dùn) - A Retirada" },
    { sequence: ["Yang", "Yang", "Yang", "Yang", "Yin", "Yin"], title: "H34. 大壯 (Dà Zhuàng) - O Grande Poder", description:"uàng) - O Grande Poder" },
    { sequence: ["Yin", "Yin", "Yin", "Yang", "Yin", "Yang"], title: "H35. 晉 (Jìn) - O Progresso", description:" 晉 (Jìn) - O Progresso" },
    { sequence: ["Yang", "Yin", "Yang", "Yin", "Yin", "Yin"], title: "H36. 明夷 (Míng Yí) - O Escurecimento da Luz", description:"O Escurecimento da Luz" },
    { sequence: ["Yang", "Yin", "Yang", "Yin", "Yang", "Yang"], title: "H37. 家人 (Jiā Rén) - A Família", description:" (Jiā Rén) - A Família" },
    { sequence: ["Yang", "Yang", "Yin", "Yang", "Yin", "Yang"], title: "H38. 睽 (Kuí) - A Oposição", description:". 睽 (Kuí) - A Oposição" },
    { sequence: ["Yin", "Yin", "Yang", "Yin", "Yang", "Yin"], title: "H39. 蹇 (Jiǎn) - O Impedimento", description:"(Jiǎn) - O Impedimento" },
    { sequence: ["Yin", "Yang", "Yin", "Yang", "Yin", "Yin"], title: "H40. 解 (Xiè) - A Libertação", description:"解 (Xiè) - A Libertação" },
    { sequence: ["Yang", "Yang", "Yin", "Yin", "Yin", "Yang"], title: "H41. 損 (Sǔn) - A Diminuição", description:"損 (Sǔn) - A Diminuição" },
    { sequence: ["Yang", "Yin", "Yin", "Yin", "Yang", "Yang"], title: "H42. 益 (Yì) - O Aumento", description:"42. 益 (Yì) - O Aumento" },
    { sequence: ["Yang", "Yang", "Yang", "Yang", "Yang", "Yin"], title: "H43. 夬 (Guài) - A Decisão", description:". 夬 (Guài) - A Decisão" },
    { sequence: ["Yin", "Yang", "Yang", "Yang", "Yang", "Yang"], title: "H44. 姤 (Gòu) - O Encontrar", description:" 姤 (Gòu) - O Encontrar" },
    { sequence: ["Yin", "Yin", "Yin", "Yang", "Yang", "Yin"], title: "H45. 萃 (Cuì) - A Reunião", description:"5. 萃 (Cuì) - A Reunião" },
    { sequence: ["Yin", "Yang", "Yang", "Yin", "Yin", "Yin"], title: "H46. 升 (Shēng) - A Ascensão", description:"升 (Shēng) - A Ascensão" },
    { sequence: ["Yin", "Yang", "Yin", "Yang", "Yang", "Yin"], title: "H47. 困 (Kùn) - A Angústia", description:". 困 (Kùn) - A Angústia" },
    { sequence: ["Yin", "Yang", "Yang", "Yin", "Yang", "Yin"], title: "H48. 井 (Jǐng) - O Poço", description:"H48. 井 (Jǐng) - O Poço" },
    { sequence: ["Yang", "Yin", "Yang", "Yang", "Yang", "Yin"], title: "H49. 革 (Gé) - A Revolução", description:". 革 (Gé) - A Revolução" },
    { sequence: ["Yin", "Yang", "Yang", "Yang", "Yin", "Yang"], title: "H50. 鼎 (Dǐng) - O Caldeirão", description:"鼎 (Dǐng) - O Caldeirão" },
    { sequence: ["Yang", "Yin", "Yin", "Yang", "Yin", "Yin"], title: "H51. 震 (Zhèn) - O Incitar", description:"1. 震 (Zhèn) - O Incitar" },
    { sequence: ["Yin", "Yin", "Yang", "Yin", "Yin", "Yang"], title: "H52. 艮 (Gèn) - A Quietude", description:". 艮 (Gèn) - A Quietude" },
    { sequence: ["Yin", "Yin", "Yang", "Yin", "Yang", "Yang"], title: "H53. 漸 (Jiàn) - O Desenvolvimento Gradual", description:"esenvolvimento Gradual" },
    { sequence: ["Yang", "Yang", "Yin", "Yang", "Yin", "Yin"], title: "H54. 歸妹 (Guī Mèi) - A Donzela Casadora", description:") - A Donzela Casadora" },
    { sequence: ["Yang", "Yin", "Yang", "Yang", "Yin", "Yin"], title: "H55. 豐 (Fēng) - A Abundância", description:" (Fēng) - A Abundância" },
    { sequence: ["Yin", "Yin", "Yang", "Yang", "Yin", "Yang"], title: "H56. 旅 (Lǚ) - A Peregrinação", description:" (Lǚ) - A Peregrinação" },
    { sequence: ["Yin", "Yang", "Yang", "Yin", "Yang", "Yang"], title: "H57. 巽 (Xùn) - A Suavidade", description:" 巽 (Xùn) - A Suavidade" },
    { sequence: ["Yang", "Yang", "Yin", "Yang", "Yang", "Yin"], title: "H58. 兌 (Duì) - A Satisfação", description:"兌 (Duì) - A Satisfação" },
    { sequence: ["Yin", "Yang", "Yin", "Yin", "Yang", "Yang"], title: "H59. 渙 (Huàn) - A Dissolução", description:" (Huàn) - A Dissolução" },
    { sequence: ["Yang", "Yang", "Yin", "Yin", "Yang", "Yin"], title: "H60. 節 (Jié) - A Moderação", description:" 節 (Jié) - A Moderação" },
    { sequence: ["Yang", "Yang", "Yin", "Yin", "Yang", "Yang"], title: "H61. 中孚 (Zhōng Fú) - A Verdade Interior", description:") - A Verdade Interior" },
    { sequence: ["Yin", "Yin", "Yang", "Yang", "Yin", "Yin"], title: "H62. 小過 (Xiǎo Guò) - A Preponderância do Pequeno", description:"ponderância do Pequeno" },
    { sequence: ["Yang", "Yin", "Yang", "Yin", "Yang", "Yin"], title: "H63. 既濟 (Jì Jì) - Depois da Conclusão", description:" - Depois da Conclusão" },
    { sequence: ["Yin", "Yang", "Yin", "Yang", "Yin", "Yang"], title: "H64. 未濟 (Wèi Jì) - Antes da Conclusão", description:") - Antes da Conclusão" }
];
let hexagrama = [], hexagramaT = [];
const gendLista = [{gend: Yang, illgend: Yang, tgend: Yang},{gend: Yin, illgend: Yin, tgend: Yin},
                    {gend: Yin, illgend: dYin, tgend: Yang}, {gend: Yang, illgend: dYang, tgend: Yin}];
/* Funções nomear e descrever hex, endereçar botões, adicionar linha, adicionar linha aleatória, ilustrar linhas e resetar */
function hextitleFunction() {
    const HEXAGRAMAJOGADO = hexagramaLista.find(hex => 
        JSON.stringify(hex.sequence) === JSON.stringify(hexagrama));
    const HEXAGRAMATRANSMUTADO = hexagramaLista.find(hexT => 
        JSON.stringify(hexT.sequence) === JSON.stringify(hexagramaT));
    hextitle.textContent = "\n" + HEXAGRAMAJOGADO.title;
    thextitle.textContent = "\n" + HEXAGRAMATRANSMUTADO.title;
    hexinfoa.textContent = "\n" + HEXAGRAMAJOGADO.title;
    hexinfob.textContent = "\n" + HEXAGRAMATRANSMUTADO.title;
}

/* Adiciona evento de clique para cada botão */
const yang_btn = document.getElementById("Yang").addEventListener("click", function() {linhaUpdate(Yang, Yang, Yang)}),
yin_btn = document.getElementById("Yin").addEventListener("click", function() {linhaUpdate(Yin, Yin, Yin)}),
dYang_btn = document.getElementById("DYang").addEventListener("click", function() {linhaUpdate(dYang, dYang, Yin)}),
dYin_btn = document.getElementById("DYin").addEventListener("click", function() {linhaUpdate(dYin, dYin, Yang)}),
Yi_btn = document.getElementById("Yi").addEventListener("click", function() {randomUpdate()}),
reset_btn = document.getElementById("Reset").addEventListener("click", function() {reset()});

function linhaUpdate(illgend, gend, tgend) {
    if(hexagrama.length < 6) {
        hexagrama.push(gend);
        hexagramaT.push(tgend);
        addLinhas(illgend);
        addLinhasT(tgend);
        console.log("Hexagrama Raíz:" + hexagrama);
        console.log("Hexagrama Transmutado:" + hexagramaT)
    }
    if(hexagrama.length == 6){
        hextitleFunction();
    }
}
function randomUpdate() {
    let rndInd = Math.floor(Math.random() * 4);
    let rndgendInd = gendLista[rndInd];
    let rndgend = rndgendInd.gend;
    let rndillgend = rndgendInd.illgend;
    let rndgendt = rndgendInd.tgend;
    linhaUpdate(rndillgend, rndgend, rndgendt);
}

function addLinhas(illgend){                  
    let linhaTrack = (hexagrama.length);
    let divLinha = document.createElement('div');
    divLinha.classList.add(`linha`, `linha${linhaTrack}`, illgend);
    linhasContainer.appendChild(divLinha);
}
function addLinhasT(tgend){                  
    let linhaTrackT = (hexagramaT.length);
    let divLinhaT = document.createElement('div');
    divLinhaT.classList.add(`Tlinha`, `Tlinha${linhaTrackT}`, tgend);
    linhasContainer.appendChild(divLinhaT);
}
let hexati = [];


function reset(){                           /* Reinicia os elementos */
    const divLinhas = document.querySelectorAll('.linha');
    const divLinhasT = document.querySelectorAll('.Tlinha');
    divLinhasT.forEach(div => div.remove());
    divLinhas.forEach(div => div.remove());
    thextitle.textContent = "\n Hexagrama Transmutado";
    hextitle.textContent = "\n Hexagrama Original";
    hexinfoa.textContent = "\n Descrição breve do Hexagrama Original";
    hexinfob.textContent = "\n Descrição breve do Hexagrama Transmutado";
    hexagrama = [];
    hexagramaT = [];
}

