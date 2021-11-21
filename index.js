//Quantity of each coin in the porfolio
var Qeth = 1.24133539;
var Qada = 257.783247;
var Qcro = 241.71956849;
var Qiotx = 298.96954546;
var Qctsi = 22.83121849;
var Qalgo = 4.934944;
var Qshib = 63730.4937054;
var Qpla = 0.606979;
var Qjasmy = 08.61235002;
var Qstorj = 0.71411577;
var Qnkn = 2.28403438;
var Qtribe = 1.12501413;
var Qmana = 0.26813637;
var Qenj = 0.34020824;
var Qcvc = 2.1443495;
var Qrlc = 0.234642803;
var Qskl = 2.84614876;
var Qogn = 0.90783661;
var Qzrx = 0.81990528;
var Qfet = 1.27276485;
var Qcgld = 0.1642237;
var Qbat = 0.83817775; 
var Qrly = 1.49128228;
var Qren = 0.98973323;
var Qtru = 1.6448038;

//price as of start (11/20/21 2am PST) of each coin
var $eth = 4297.54;
var $ada = 1.89;
var $cro = 0.57;
var $iotx = 0.27;
var $ctsi = 1.03;
var $algo = 1.83;
var $shib = 0.00004870;
var $pla = 2.47;
var $jasmy = 0.16;
var $storj = 2.13;
var $nkn = 0.56;
var $tribe = 1.08;
var $mana = 4.01;
var $enj = 3.77;
var $cvc = 0.54;
var $rlc = 4.10;
var $skl = 0.33;
var $ogn = 1.12;
var $zrx = 1.16;
var $fet = 0.76;
var $cgld = 5.43;
var $bat = 1.14; 
var $rly = 0.54;
var $ren = 0.83;
var $tru = 0.47;

//holding of each coins values
var eth = (Qeth*$eth);
var ada = (Qada*$ada)
var cro = (Qcro*$cro);
var iotx = (Qiotx*$iotx);
var ctsi = (Qctsi*$ctsi);
var algo = (Qalgo*$algo);
var shib = (Qshib*$shib);
var pla = (Qpla*$pla);
var jasmy = (Qjasmy*$jasmy);
var storj = (Qstorj*$storj);
var nkn = (Qnkn*$nkn);
var tribe = (Qtribe*$tribe);
var mana = (Qmana*$mana);
var enj = (Qenj*$enj);
var cvc = (Qcvc*$cvc);
var rlc = (Qrlc*$rlc);
var skl = (Qskl*$skl);
var ogn = (Qogn*$ogn);
var zrx = (Qzrx*$zrx);
var fet = (Qfet*$fet);
var cgld = (Qcgld*$cgld);
var bat = (Qbat*($bat)); 
var rly = (Qrly*$rly);
var ren = (Qren*$ren);
var tru = (Qtru*$tru);

//total value of all assets
var totalValue = (eth+ada+cro+iotx+ctsi+algo+shib+pla+storj+nkn+tribe+enj+mana+cvc+rlc+ogn+skl+fet+zrx+bat+cgld+rly+ren+tru).toFixed(2);
document.getElementById('totalValue').textContent = totalValue;

//ETH
document.getElementById('ETH').textContent = (Math.round(eth * 100) / 100).toFixed(2)
document.getElementById('$eth').textContent = $eth
document.getElementById('Qeth').textContent = Qeth
//ADA
document.getElementById('ADA').textContent = (Math.round(ada * 100) / 100).toFixed(2)
document.getElementById('$ada').textContent = $ada
document.getElementById('Qada').textContent = Qada
//CRO
document.getElementById('CRO').textContent = (Math.round(cro * 100) / 100).toFixed(2)
document.getElementById('$cro').textContent = $cro
document.getElementById('Qcro').textContent = Qcro
//IOTX
document.getElementById('IOTX').textContent = (Math.round(iotx * 100) / 100).toFixed(2)
document.getElementById('$iotx').textContent = $iotx
document.getElementById('Qiotx').textContent = Qiotx
//CTSI
document.getElementById('CTSI').textContent = (Math.round(ctsi * 100) / 100).toFixed(2)
document.getElementById('$ctsi').textContent = $ctsi
document.getElementById('Qctsi').textContent = Qctsi
//ALGO
document.getElementById('ALGO').textContent = (Math.round(algo * 100) / 100).toFixed(2)
document.getElementById('$algo').textContent = $algo
document.getElementById('Qalgo').textContent = Qalgo
//SHIB
document.getElementById('SHIB').textContent = (Math.round(shib * 100) / 100).toFixed(2)
document.getElementById('$shib').textContent = $shib
document.getElementById('Qshib').textContent = Qshib
//PLA
document.getElementById('PLA').textContent = (Math.round(pla * 100) / 100).toFixed(2)
document.getElementById('$pla').textContent = $pla
document.getElementById('Qpla').textContent = Qpla
//JASMY
document.getElementById('JASMY').textContent = (Math.round(jasmy * 100) / 100).toFixed(2)
document.getElementById('$jasmy').textContent = $jasmy
document.getElementById('Qjasmy').textContent = Qjasmy
//STORJ
document.getElementById('STORJ').textContent = (Math.round(storj * 100) / 100).toFixed(2)
document.getElementById('$storj').textContent = $storj
document.getElementById('Qstorj').textContent = Qstorj
//NKN
document.getElementById('NKN').textContent = (Math.round(nkn * 100) / 100).toFixed(2)
document.getElementById('$nkn').textContent = $nkn
document.getElementById('Qnkn').textContent = Qnkn
//TRIBE
document.getElementById('TRIBE').textContent = (Math.round(tribe * 100) / 100).toFixed(2)
document.getElementById('$tribe').textContent = $tribe
document.getElementById('Qtribe').textContent = Qtribe
//ENJ
document.getElementById('ENJ').textContent = (Math.round(enj * 100) / 100).toFixed(2)
document.getElementById('$enj').textContent = $enj
document.getElementById('Qenj').textContent = Qenj
//MANA
document.getElementById('MANA').textContent = (Math.round(mana * 100) / 100).toFixed(2)
document.getElementById('$mana').textContent = $mana
document.getElementById('Qmana').textContent = Qmana
//CVC
document.getElementById('CVC').textContent = (Math.round(cvc * 100) / 100).toFixed(2)
document.getElementById('$cvc').textContent = $cvc
document.getElementById('Qcvc').textContent = Qcvc
//RLC
document.getElementById('RLC').textContent = (Math.round(rlc * 100) / 100).toFixed(2)
document.getElementById('$rlc').textContent = $rlc
document.getElementById('Qrlc').textContent = Qrlc
//OGN
document.getElementById('OGN').textContent = (Math.round(ogn * 100) / 100).toFixed(2)
document.getElementById('$ogn').textContent = $ogn
document.getElementById('Qogn').textContent = Qogn
//SKL
document.getElementById('SKL').textContent = (Math.round(skl * 100) / 100).toFixed(2)
document.getElementById('$skl').textContent = $skl
document.getElementById('Qskl').textContent = Qskl
//FET
document.getElementById('FET').textContent = (Math.round(fet * 100) / 100).toFixed(2)
document.getElementById('$fet').textContent = $fet
document.getElementById('Qfet').textContent = Qfet
//ZRX
document.getElementById('ZRX').textContent = (Math.round(zrx * 100) / 100).toFixed(2)
document.getElementById('$zrx').textContent = $zrx
document.getElementById('Qzrx').textContent = Qzrx
//BAT
document.getElementById('BAT').textContent = (Math.round(bat * 100) / 100).toFixed(2)
document.getElementById('$bat').textContent = $bat
document.getElementById('Qbat').textContent = Qbat
//CGLD
document.getElementById('CGLD').textContent = (Math.round(cgld * 100) / 100).toFixed(2)
document.getElementById('$cgld').textContent = $cgld
document.getElementById('Qcgld').textContent = Qcgld
//RLY
document.getElementById('RLY').textContent = (Math.round(rly * 100) / 100).toFixed(2)
document.getElementById('$rly').textContent = $rly
document.getElementById('Qrly').textContent = Qrly
//REN
document.getElementById('REN').textContent = (Math.round(ren * 100) / 100).toFixed(2)
document.getElementById('$ren').textContent = $ren
document.getElementById('Qren').textContent = Qren
//TRU
document.getElementById('TRU').textContent = (Math.round(tru * 100) / 100).toFixed(2)
document.getElementById('$tru').textContent = $tru
document.getElementById('Qtru').textContent = Qtru

















