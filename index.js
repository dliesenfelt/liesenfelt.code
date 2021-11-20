//Quantity of each coin in the porfolio
var Qeth = 1.24133539;
var Qada = 287;
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
var $ada = 1.87;
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

//
document.getElementById('ETH').textContent = eth
document.getElementById('$eth').textContent = $eth
document.getElementById('Qeth').textContent = Qeth
//
document.getElementById('ADA').textContent = ada
document.getElementById('$ada').textContent = $ada
document.getElementById('Qada').textContent = Qada
console.log(ada,Qada,$ada)
//
document.getElementById('CRO').textContent = cro
document.getElementById('$cro').textContent = $cro
document.getElementById('Qcro').textContent = Qcro
//
document.getElementById('IOTX').textContent = iotx
document.getElementById('$iotx').textContent = $iotx
document.getElementById('Qiotx').textContent = Qiotx
//
document.getElementById('CTSI').textContent = ctsi
document.getElementById('$ctsi').textContent = $ctsi
document.getElementById('Qctsi').textContent = Qctsi
//
document.getElementById('ALGO').textContent = algo
document.getElementById('$algo').textContent = $algo
document.getElementById('Qalgo').textContent = Qalgo
//
document.getElementById('SHIB').textContent = shib
document.getElementById('$shib').textContent = $shib
document.getElementById('Qshib').textContent = Qshib
//
document.getElementById('PLA').textContent = pla
document.getElementById('$pla').textContent = $pla
document.getElementById('Qpla').textContent = Qpla
//
document.getElementById('JASMY').textContent = jasmy
document.getElementById('$jasmy').textContent = $jasmy
document.getElementById('Qjasmy').textContent = Qjasmy
//
document.getElementById('STORJ').textContent = storj
document.getElementById('$storj').textContent = $storj
document.getElementById('Qstorj').textContent = Qstorj
//
document.getElementById('NKN').textContent = nkn
document.getElementById('$nkn').textContent = $nkn
document.getElementById('Qnkn').textContent = Qnkn
//
document.getElementById('TRIBE').textContent = tribe
document.getElementById('$tribe').textContent = $tribe
document.getElementById('Qtribe').textContent = Qtribe
//
document.getElementById('ENJ').textContent = enj
document.getElementById('$enj').textContent = $enj
document.getElementById('Qenj').textContent = Qenj
//
document.getElementById('MANA').textContent = mana
document.getElementById('$mana').textContent = $mana
document.getElementById('Qmana').textContent = Qmana
//
document.getElementById('CVC').textContent = cvc
document.getElementById('$cvc').textContent = $cvc
document.getElementById('Qcvc').textContent = Qcvc
//
document.getElementById('RLC').textContent = rlc
document.getElementById('$rlc').textContent = $rlc
document.getElementById('Qrlc').textContent = Qrlc
//
document.getElementById('OGN').textContent = ogn
document.getElementById('$ogn').textContent = $ogn
document.getElementById('Qogn').textContent = Qogn
//
document.getElementById('SKL').textContent = skl
document.getElementById('$skl').textContent = $skl
document.getElementById('Qskl').textContent = Qskl
//
document.getElementById('FET').textContent = fet
document.getElementById('$fet').textContent = $fet
document.getElementById('Qfet').textContent = Qfet
//
document.getElementById('ZRX').textContent = zrx
document.getElementById('$zrx').textContent = $zrx
document.getElementById('Qzrx').textContent = Qzrx
//
document.getElementById('BAT').textContent = bat
document.getElementById('$bat').textContent = $bat
document.getElementById('Qbat').textContent = Qbat
//
document.getElementById('CGLD').textContent = cgld
document.getElementById('$cgld').textContent = $cgld
document.getElementById('Qcgld').textContent = Qcgld
//
document.getElementById('RLY').textContent = rly
document.getElementById('$rly').textContent = $rly
document.getElementById('Qrly').textContent = Qrly
//
document.getElementById('REN').textContent = ren
document.getElementById('$ren').textContent = $ren
document.getElementById('Qren').textContent = Qren
//
document.getElementById('TRU').textContent = tru
document.getElementById('$tru').textContent = $tru
document.getElementById('Qtru').textContent = Qtru

















