var fs = require('fs');

// Will add a file read at some point, removed it in a old version and forgot to add it back :/
let str = `Clones: Clone Trooper, Recruits: Clone Recruit, 
Doom Company: Doom Company Trooper, Doom Company: Doom Company Specialist, Doom Company: Doom Company Heavy, Doom Company: Doom Company Medic, Doom Company: Doom Company Commander,
Bomb Squad: Bomb Squad Trooper, Bomb Squad: Bomb Squad Specialist, Bomb Squad: Bomb Squad Heavy, Bomb Squad: Bomb Squad Medic, Bomb Squad: Bomb Squad Commander,
Coruscant Guards: Coruscant Guard, Coruscant Guards: Coruscant Guard Medic, Coruscant Guards: Coruscant Guard Commander,
ARC Troopers: ARC Trooper, ARC Troopers: ARC Heavy, ARC Troopers: ARC Specialist, ARC Troopers: ARC Medic, ARC Troopers: ARC Commander,
501st Legion: 501st Trooper, 501st Legion: 501st Specialist, 501st Legion: 501st Heavy, 501st Legion: 501st Medic, 501st Legion: 501st Legion Commander,
41st Elite Corps: 41st Trooper, 41st Elite Corps: 41st Specialist, 41st Elite Corps: 41st Heavy, 41st Elite Corps: 41st Medic, 41st Elite Corps: 41st Elite Corps Commander,
21st Nova Corps: 21st Trooper, 21st Nova Corps: 21st Specialist, 21st Nova Corps: 21st Heavy, 21st Nova Corps: 21st Medic, 21st Nova Corps: 21st Nova Corps Commander,
212th Attack Battalion: 212th Trooper, 212th Attack Battalion: 212th Specialist, 212th Attack Battalion: 212th Heavy, 212th Attack Battalion: 212th Medic, 212th Attack Battalion: 212th Attack Battalion Commander,
104th Battalion: 104th Trooper, 104th Battalion: 104th Specialist, 104th Battalion: 104th Heavy, 104th Battalion: 104th Medic, 104th Battalion: 104th Battalion Commander,
74th Medical Regiment: 74th Trooper, 74th Medical Regiment: 74th Specialist, 74th Medical Regiment: 74th Heavy, 74th Medical Regiment: 74th Medic, 74th Medical Regiment: 74th Medical Regiment Commander,
Republic Commandos: Fixer, Republic Commandos: Boss, Republic Commandos: Sev, Republic Commandos: Scorch,
Jedi Order: Jedi Master, Jedi Order: Jedi Knight, Jedi Order: Jedi Padawan, Jedi Order: Jedi Youngling, Jedi Order: Grand Master Yoda, Jedi Order: Mace Windu, Jedi Order: Shaak Ti, Jedi Order: Obi-Wan Kenobi, Jedi Order: Anakin Skywalker, Jedi Order: Tiplar, Jedi Order: Tiplee, Jedi Order: Plo Koon, Jedi Order: Jocasta Nu, Jedi Order: Cin Drallig, Jedi Order: Quinlan Vos, Jedi Order: Aayla Secura, Jedi Order: Kit Fisto, Jedi Order: Ki-Adi-Mundi, Jedi Order: Luminara Unduli, Jedi Order: Adi Gallia, Jedi Order: Beth Koth, Jedi Order: Saesee Tiin, Jedi Order: Ima-Gun Di, Jedi Order: Sin Tachi, Jedi Order: Ahsoka Tano, Jedi Order: Barriss Offee
`

var out = (name, cat) => `
${cat.trim().toLocaleUpperCase().replace(/\[0-9|\]|\-\'/gm, '').replace(/\s|\-/gm,'_')}_${name.trim().toLocaleUpperCase().replace(/\[|\]|\-\'/gm, '').replace(/\s|\-/gm,'_')} = DarkRP.createJob("${name.trim()}", {
\tcolor = Color(255, 255, 255, 255),
\tmodel = {
\t\t"models/player/Group03/Female_01.mdl",
\t\t"models/player/Group03/Female_02.mdl"
\t},
\tdescription = [[${name.trim()}]],
\tweapons = {"weapon_p2282"},
\tcommand = "${name.trim().toLocaleLowerCase().replace(/(\s)/gm, "_")}",
\tmax = 0.7,
\tsalary = 45,
\tadmin = 0,
\tvote = false,
\thasLicense = false,
\tcategory = "${cat.trim()}"
})
`

for (var data of str.split(',')) {
  var [cat, job] = data.split(':');
  console.log(out(job, cat));
  fs.appendFile('out/jobs.lua', out(job, cat), function (err) {
    if (err) throw err;
  });
}
console.log("Done!");