const _0xd8d4f3=_0x5e7a;(function(_0x4ed1c1,_0x12cf3a){const _0x5784c5=_0x5e7a,_0x287f92=_0x4ed1c1();while(!![]){try{const _0x439eee=-parseInt(_0x5784c5(0xe0))/0x1+-parseInt(_0x5784c5(0xc8))/0x2*(parseInt(_0x5784c5(0xd2))/0x3)+-parseInt(_0x5784c5(0xe1))/0x4*(parseInt(_0x5784c5(0xdf))/0x5)+-parseInt(_0x5784c5(0xcc))/0x6+parseInt(_0x5784c5(0xc7))/0x7*(parseInt(_0x5784c5(0xbb))/0x8)+parseInt(_0x5784c5(0xc1))/0x9*(parseInt(_0x5784c5(0xca))/0xa)+-parseInt(_0x5784c5(0xc0))/0xb*(-parseInt(_0x5784c5(0xd1))/0xc);if(_0x439eee===_0x12cf3a)break;else _0x287f92['push'](_0x287f92['shift']());}catch(_0x8b9b75){_0x287f92['push'](_0x287f92['shift']());}}}(_0x2ba8,0xb9542),require(_0xd8d4f3(0xcb))[_0xd8d4f3(0xbc)]());const {Pool}=require('pg');let s=require(_0xd8d4f3(0xd6));var dbUrl=s[_0xd8d4f3(0xc9)]?s[_0xd8d4f3(0xc9)]:_0xd8d4f3(0xd9);const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig);async function createAntilienTable(){const _0x43da6d=_0xd8d4f3,_0x836b76=await pool[_0x43da6d(0xc5)]();try{await _0x836b76['query'](_0x43da6d(0xde)),console[_0x43da6d(0xbe)](_0x43da6d(0xbf));}catch(_0x336f7f){console[_0x43da6d(0xb9)]('Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27antilien\x27:',_0x336f7f);}finally{_0x836b76[_0x43da6d(0xcf)]();}}createAntilienTable();async function ajouterOuMettreAJourJid(_0x55dabb,_0x112bff){const _0x510f22=_0xd8d4f3,_0x5c72e4=await pool[_0x510f22(0xc5)]();try{const _0x5f50db=await _0x5c72e4[_0x510f22(0xc3)](_0x510f22(0xbd),[_0x55dabb]),_0x791161=_0x5f50db['rows'][_0x510f22(0xd7)]>0x0;_0x791161?await _0x5c72e4['query'](_0x510f22(0xba),[_0x112bff,_0x55dabb]):await _0x5c72e4[_0x510f22(0xc3)](_0x510f22(0xd3),[_0x55dabb,_0x112bff,_0x510f22(0xc4)]),console[_0x510f22(0xbe)](_0x510f22(0xc6)+_0x55dabb+_0x510f22(0xce));}catch(_0x262db5){console[_0x510f22(0xb9)]('Erreur\x20lors\x20de\x20l\x27ajout\x20ou\x20de\x20la\x20mise\x20à\x20jour\x20du\x20JID\x20dans\x20la\x20table\x20,',_0x262db5);}finally{_0x5c72e4[_0x510f22(0xcf)]();}};function _0x5e7a(_0x1e30ef,_0x37e7ea){const _0x2ba829=_0x2ba8();return _0x5e7a=function(_0x5e7afb,_0x915322){_0x5e7afb=_0x5e7afb-0xb9;let _0x199363=_0x2ba829[_0x5e7afb];return _0x199363;},_0x5e7a(_0x1e30ef,_0x37e7ea);}async function mettreAJourAction(_0x30b9f9,_0x26a81e){const _0x3960b8=_0xd8d4f3,_0x2ca9b7=await pool[_0x3960b8(0xc5)]();try{const _0x579aed=await _0x2ca9b7['query']('SELECT\x20*\x20FROM\x20antilien\x20WHERE\x20jid\x20=\x20$1',[_0x30b9f9]),_0x11b8a0=_0x579aed[_0x3960b8(0xe3)][_0x3960b8(0xd7)]>0x0;_0x11b8a0?await _0x2ca9b7[_0x3960b8(0xc3)](_0x3960b8(0xd4),[_0x26a81e,_0x30b9f9]):await _0x2ca9b7[_0x3960b8(0xc3)]('INSERT\x20INTO\x20antilien\x20(jid,\x20etat,\x20action)\x20VALUES\x20($1,\x20$2,\x20$3)',[_0x30b9f9,_0x3960b8(0xd0),_0x26a81e]),console[_0x3960b8(0xbe)](_0x3960b8(0xd8)+_0x30b9f9+_0x3960b8(0xd5));}catch(_0x5d2c4b){console['error']('Erreur\x20lors\x20de\x20la\x20mise\x20à\x20jour\x20de\x20l\x27action\x20pour\x20le\x20JID\x20dans\x20la\x20table\x20\x20:',_0x5d2c4b);}finally{_0x2ca9b7[_0x3960b8(0xcf)]();}};async function verifierEtatJid(_0x5001a0){const _0x180c21=_0xd8d4f3,_0x180fd3=await pool[_0x180c21(0xc5)]();try{const _0x47ddb1=await _0x180fd3['query']('SELECT\x20etat\x20FROM\x20antilien\x20WHERE\x20jid\x20=\x20$1',[_0x5001a0]);if(_0x47ddb1['rows'][_0x180c21(0xd7)]>0x0){const _0x5d786a=_0x47ddb1['rows'][0x0][_0x180c21(0xe2)];return _0x5d786a===_0x180c21(0xc2);}else return![];}catch(_0x409974){return console[_0x180c21(0xb9)](_0x180c21(0xdb),_0x409974),![];}finally{_0x180fd3[_0x180c21(0xcf)]();}};async function recupererActionJid(_0x4d728a){const _0x211f50=_0xd8d4f3,_0x5612c4=await pool[_0x211f50(0xc5)]();try{const _0x26b369=await _0x5612c4[_0x211f50(0xc3)](_0x211f50(0xda),[_0x4d728a]);if(_0x26b369['rows'][_0x211f50(0xd7)]>0x0){const _0x5530a6=_0x26b369[_0x211f50(0xe3)][0x0][_0x211f50(0xdd)];return _0x5530a6;}else return _0x211f50(0xc4);}catch(_0x212e68){return console[_0x211f50(0xb9)](_0x211f50(0xcd),_0x212e68),_0x211f50(0xc4);}finally{_0x5612c4[_0x211f50(0xcf)]();}};module[_0xd8d4f3(0xdc)]={'mettreAJourAction':mettreAJourAction,'ajouterOuMettreAJourJid':ajouterOuMettreAJourJid,'verifierEtatJid':verifierEtatJid,'recupererActionJid':recupererActionJid};function _0x2ba8(){const _0x1b95d7=['1865QQsydJ','305404BRQiqQ','11860kwVpmk','etat','rows','error','UPDATE\x20antilien\x20SET\x20etat\x20=\x20$1\x20WHERE\x20jid\x20=\x20$2','394088WSnsxv','config','SELECT\x20*\x20FROM\x20antilien\x20WHERE\x20jid\x20=\x20$1','log','La\x20table\x20\x27antilien\x27\x20a\x20été\x20créée\x20avec\x20succès.','11pwIHEJ','2529evtluL','oui','query','supp','connect','JID\x20','7NAMwKK','550lgPSkQ','DATABASE_URL','29350zmXhyr','dotenv','6195180RyMuPB','Erreur\x20lors\x20de\x20la\x20récupération\x20de\x20l\x27action\x20du\x20JID\x20dans\x20la\x20table\x20:','\x20ajouté\x20ou\x20mis\x20à\x20jour\x20avec\x20succès\x20dans\x20la\x20table\x20\x27antilien\x27.','release','non','31459068yuIQnL','3192pfxNnk','INSERT\x20INTO\x20antilien\x20(jid,\x20etat,\x20action)\x20VALUES\x20($1,\x20$2,\x20$3)','UPDATE\x20antilien\x20SET\x20action\x20=\x20$1\x20WHERE\x20jid\x20=\x20$2','\x20dans\x20la\x20table\x20\x27antilien\x27.','../set','length','Action\x20mise\x20à\x20jour\x20avec\x20succès\x20pour\x20le\x20JID\x20','postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9','SELECT\x20action\x20FROM\x20antilien\x20WHERE\x20jid\x20=\x20$1','Erreur\x20lors\x20de\x20la\x20vérification\x20de\x20l\x27état\x20du\x20JID\x20dans\x20la\x20table\x20','exports','action','\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20antilien\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20jid\x20text\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20etat\x20text,\x0a\x20\x20\x20\x20\x20\x20\x20\x20action\x20text\x0a\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20'];_0x2ba8=function(){return _0x1b95d7;};return _0x2ba8();}