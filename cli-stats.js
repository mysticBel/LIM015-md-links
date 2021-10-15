const totalLinks = (array) => {
    const  total = array.length;
    return stats = `Total : ${total}`
  };
  

const uniqueLinks = (array) => {
    const unique = [...new Set(array.map(link => link.href))];
    return stats = `Unique : ${unique.length}`;
    
}

const brokenLinks = (array) => {
    const broken = array.filter((link) => link.status === 'Fail ' || link.status > 400 || link.status < 199 )
    return statsBroken = `Broken : ${broken.length}`;
}

const helpMsg = `
█████████████████████████████████████████████████████████████
███████████             Welcome to             ██████████████
███████████ █▀▄▀█ █▀▀▄ ░░ █░░ ░▀░ █▀▀▄ █░█ █▀▀ ██████████████
███████████ █░▀░█ █░░█ ▀▀ █░░ ▀█▀ █░░█ █▀▄ ▀▀█ ██████████████
███████████ ▀░░░▀ ▀▀▀░ ░░ ▀▀▀ ▀▀▀ ▀░░▀ ▀░▀ ▀▀▀▒██████████████
█████████████████████████████████████████████████████████████
█░░░░░░██░░░░░░█░░░░░░░░░░░░░░█░░░░░░█████████░░░░░░░░░░░░░░█
█░░▄▀░░██░░▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀░░█████████░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░██░░▄▀░░█░░▄▀░░░░░░░░░░█░░▄▀░░█████████░░▄▀░░░░░░▄▀░░█
█░░▄▀░░██░░▄▀░░█░░▄▀░░█████████░░▄▀░░█████████░░▄▀░░██░░▄▀░░█
█░░▄▀░░░░░░▄▀░░█░░▄▀░░░░░░░░░░█░░▄▀░░█████████░░▄▀░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀░░█████████░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░▄▀░░█░░▄▀░░░░░░░░░░█░░▄▀░░█████████░░▄▀░░░░░░░░░░█
█░░▄▀░░██░░▄▀░░█░░▄▀░░█████████░░▄▀░░█████████░░▄▀░░█████████
█░░▄▀░░██░░▄▀░░█░░▄▀░░░░░░░░░░█░░▄▀░░░░░░░░░░█░░▄▀░░█████████
█░░▄▀░░██░░▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀░░█████████
█░░░░░░██░░░░░░█░░░░░░░░░░░░░░█░░░░░░░░░░░░░░█░░░░░░█████████
█████████████████████████████████████████████████████████████ 
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░                                                   ░░░░░
░░░░░          (ɔ*w*)ɔ ♥ need some help ?, ...          ░░░░░
░░░░░                     Try:                          ░░░░░
░░░░░   --validate (or --v)  --> shows an array with    ░░░░░
░░░░░                            links and status       ░░░░░
░░░░░                                                   ░░░░░
░░░░░    --stats (or --s)     --> total and unique      ░░░░░
░░░░░                                links              ░░░░░
░░░░░                                                   ░░░░░
░░░░░    --validate --stats       total , unique        ░░░░░
░░░░░             or          -->   and broken links    ░░░░░
░░░░░          (--v --s)                                ░░░░░
░░░░░                                                   ░░░░░
░░░░░    --help (or --h)      -->  u r here ! uwu'      ░░░░░
░░░░░                                                   ░░░░░
░░░░░                                                   ░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░▄▄▄▄█▀▀▀░░░░░░░░░░░░▀▀██░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░▄███▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█▄▄▄░░░░░░░░   . . .   ░░░
░░░░░░▄▀▀░█░░░░▀█▄▀▄▀██████░▀█▄▀▄▀████▀░░░░░░░░  best     ░░░
░░░░░░█░░░█░░░░░░▀█▄█▄███▀░░░░▀▀▀▀▀▀▀░▀▀▄░░░░░░ whishes !!░░░
░░░░░░█░░░█░▄▄▄░░░░░░░░░░░░░░░░░░░░░▀▀░░░█░░░░░   . . .   ░░░
░░░░░░█░░░▀█░░█░░░░▄░░░░▄░░░░░▀███▀░░░░░░░█░░░░░░░░░░░░░░░░░░
░░░░░░█░░░░█░░▀▄░░░░░░▄░░░░░░░░░█░░░░░░░░█▀▄░░░░░░░░░░░░░░░░░
░░░░░░░▀▄▄▀░░░░░▀▀▄▄▄░░░░░░░▄▄▄▀░▀▄▄▄▄▄▀▀░░█░░░░░░░░░░░░░░░░░
░░░░░░░█▄░░░░░░░░░░░░▀▀▀▀▀▀▀░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░░░░
░░░░░░░░█░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▄██░░░░░░░░░░░░░░░░░░░
░░░░░░░░▀█▄░░░░░░░░░░░░░░░░░░░░░░░░░▄▀▀░░░▀█░░░░░░░░░░░░░░░░░

`

const msgErrorRoute =`
▒█░░▒█ █▀▀█ █░░█ 　 █░░█ █▀▀█ ▀█░█▀ █▀▀ █▀▀▄ █ ▀▀█▀▀ 　 █▀▀█ █░░█ ▀▀█▀▀ 　 █▀▀█ █▀▀▄ █░░█ 
▒█▄▄▄█ █░░█ █░░█ 　 █▀▀█ █▄▄█ ░█▄█░ █▀▀ █░░█ ░ ░░█░░ 　 █░░█ █░░█ ░░█░░ 　 █▄▄█ █░░█ █▄▄█ 
░░▒█░░ ▀▀▀▀ ░▀▀▀ 　 ▀░░▀ ▀░░▀ ░░▀░░ ▀▀▀ ▀░░▀ ░ ░░▀░░ 　 █▀▀▀ ░▀▀▀ ░░▀░░ 　 ▀░░▀ ▀░░▀ ▄▄▄█ 

█▀▀█ █▀▀█ █░░█ ▀▀█▀▀ █▀▀ ░░ 　 █▀▀█ █▀▀█ 　 ▀▀█▀▀ █░░█ ░▀░ █▀▀ 　 █▀▀█ █▀▀█ █░░█ ▀▀█▀▀ █▀▀ 
█▄▄▀ █░░█ █░░█ ░░█░░ █▀▀ ▄▄ 　 █░░█ █▄▄▀ 　 ░░█░░ █▀▀█ ▀█▀ ▀▀█ 　 █▄▄▀ █░░█ █░░█ ░░█░░ █▀▀ 
▀░▀▀ ▀▀▀▀ ░▀▀▀ ░░▀░░ ▀▀▀ ░█ 　 ▀▀▀▀ ▀░▀▀ 　 ░░▀░░ ▀░░▀ ▀▀▀ ▀▀▀ 　 ▀░▀▀ ▀▀▀▀ ░▀▀▀ ░░▀░░ ▀▀▀ 

█▀▀▄ █▀▀█ █▀▀ █▀▀ █▀▀▄ ▀▀█▀▀ 　 █▀▀ █░█ ░▀░ █▀▀ ▀▀█▀▀ 
█░░█ █░░█ █▀▀ ▀▀█ █░░█ ░░█░░ 　 █▀▀ ▄▀▄ ▀█▀ ▀▀█ ░░█░░ 
▀▀▀░ ▀▀▀▀ ▀▀▀ ▀▀▀ ▀░░▀ ░░▀░░ 　 ▀▀▀ ▀░▀ ▀▀▀ ▀▀▀ ░░▀░░ \n (ɔ*w*)ɔ ---Please, try again --- ♥  `

const msgNotLinks =`
█── ─▀─ █▀▀▄ █─█ █▀▀ 　 █▀▀▄ █▀▀█ ▀▀█▀▀ 　 █▀▀ █▀▀█ █──█ █▀▀▄ █▀▀▄ 　 ▄ ▄▀ 
█── ▀█▀ █──█ █▀▄ ▀▀█ 　 █──█ █──█ ──█── 　 █▀▀ █──█ █──█ █──█ █──█ 　 ─ █─ 
▀▀▀ ▀▀▀ ▀──▀ ▀─▀ ▀▀▀ 　 ▀──▀ ▀▀▀▀ ──▀── 　 ▀── ▀▀▀▀ ─▀▀▀ ▀──▀ ▀▀▀─ 　 ▀ ▀▄`

const commandInvalidMsg =`


█ █▄░█ █░█ ▄▀█ █░░ █ █▀▄   █▀▀ █▀█ █▀▄▀█ █▀▄▀█ ▄▀█ █▄░█ █▀▄   ▀ ░░▄▀
█ █░▀█ ▀▄▀ █▀█ █▄▄ █ █▄▀   █▄▄ █▄█ █░▀░█ █░▀░█ █▀█ █░▀█ █▄▀   ▄ ▄▀░░\n (ɔ*w*)ɔ ---Please, try again --- ♥ `
const helloMsgValidate =   `

▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▀▄▀█ █▀▀▄ ░░ █░░ ░▀░ █▀▀▄ █░█ █▀▀ ▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█░▀░█ █░░█ ▀▀ █░░ ▀█▀ █░░█ █▀▄ ▀▀█ ▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀░░░▀ ▀▀▀░ ░░ ▀▀▀ ▀▀▀ ▀░░▀ ▀░▀ ▀▀▀▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒█░▒▒▒▒▒▒▒▓▒▒▓▒▒▒▒▒▒▒░█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒█░▒▒▓▒▒▒▒▒▒▒▒▄▄▒▓▒▒░█░▄▄▒▒▒▒▒▒▒▒▒▒▒   O   P   T   I   O   N   ▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▀▀▄▄█░▒▒▒▒▒▒▓▒▒▒▒█░░▀▄▄▄▄▄▀░░█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒█░░░░█░▒▒▒▒▒▒▒▒▒▒▒█░░░░░░░░░░░█▒▒▒▒▒▒▒▒▒▒▒▒▒▒  < validate > ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▀▀▄▄█░▒▒▒▒▓▒▒▒▓▒█░░░█▒░░░░█▒░░█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒█░▒▓▒▒▒▒▓▒▒▒█░░░░░░░▀░░░░░█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▄▄█░▒▒▒▓▒▒▒▒▒▒▒█░░█▄▄█▄▄█░░█▒▒▒  Shows href,file,status,OK or Fail,text ▒▒▒▒
▒▒▒▒█░░░█▄▄▄▄▄▄▄▄▄▄█░█▄▄▄▄▄▄▄▄▄█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒█▄▄█░░█▄▄█░░░░░░█▄▄█░░█▄▄█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
`

const helloMsgStats =   `

▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▀▄▀█ █▀▀▄ ░░ █░░ ░▀░ █▀▀▄ █░█ █▀▀ ▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█░▀░█ █░░█ ▀▀ █░░ ▀█▀ █░░█ █▀▄ ▀▀█ ▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀░░░▀ ▀▀▀░ ░░ ▀▀▀ ▀▀▀ ▀░░▀ ▀░▀ ▀▀▀▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒█░▒▒▒▒▒▒▒▓▒▒▓▒▒▒▒▒▒▒░█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒█░▒▒▓▒▒▒▒▒▒▒▒▄▄▒▓▒▒░█░▄▄▒▒▒▒▒▒▒▒▒▒▒   O   P   T   I   O   N   ▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▀▀▄▄█░▒▒▒▒▒▒▓▒▒▒▒█░░▀▄▄▄▄▄▀░░█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒█░░░░█░▒▒▒▒▒▒▒▒▒▒▒█░░░░░░░░░░░█▒▒▒▒▒▒▒▒▒▒▒▒▒▒   <  stats  >  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▀▀▄▄█░▒▒▒▒▓▒▒▒▓▒█░░░█▒░░░░█▒░░█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒█░▒▓▒▒▒▒▓▒▒▒█░░░░░░░▀░░░░░█▒▒▒▒▒   Show Total and Unique links  ▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▄▄█░▒▒▒▓▒▒▒▒▒▒▒█░░█▄▄█▄▄█░░█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒█░░░█▄▄▄▄▄▄▄▄▄▄█░█▄▄▄▄▄▄▄▄▄█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒█▄▄█░░█▄▄█░░░░░░█▄▄█░░█▄▄█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
`
const helloMsgValidateAndStats =   `

▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▀▄▀█ █▀▀▄ ░░ █░░ ░▀░ █▀▀▄ █░█ █▀▀ ▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█░▀░█ █░░█ ▀▀ █░░ ▀█▀ █░░█ █▀▄ ▀▀█ ▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀░░░▀ ▀▀▀░ ░░ ▀▀▀ ▀▀▀ ▀░░▀ ▀░▀ ▀▀▀▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒█░▒▒▒▒▒▒▒▓▒▒▓▒▒▒▒▒▒▒░█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒█░▒▒▓▒▒▒▒▒▒▒▒▄▄▒▓▒▒░█░▄▄▒▒▒▒▒▒▒▒▒▒▒   O   P   T   I   O   N   ▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▀▀▄▄█░▒▒▒▒▒▒▓▒▒▒▒█░░▀▄▄▄▄▄▀░░█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒█░░░░█░▒▒▒▒▒▒▒▒▒▒▒█░░░░░░░░░░░█▒▒▒▒▒▒▒▒▒▒▒  < validate & stats > ▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▀▀▄▄█░▒▒▒▒▓▒▒▒▓▒█░░░█▒░░░░█▒░░█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒█░▒▓▒▒▒▒▓▒▒▒█░░░░░░░▀░░░░░█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▄▄█░▒▒▒▓▒▒▒▒▒▒▒█░░█▄▄█▄▄█░░█▒▒▒▒  Show Total,Unique and broken links  ▒▒▒▒▒▒
▒▒▒▒█░░░█▄▄▄▄▄▄▄▄▄▄█░█▄▄▄▄▄▄▄▄▄█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒█▄▄█░░█▄▄█░░░░░░█▄▄█░░█▄▄█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
`


const footerMsg =   `
༻✦༺༻✧༺༻✦༺༻✦༺༻✧༺༻✦༺༻✦༺༻✧༺༻✦༺༻✦༺༻✧༺༻✦༺༻✦༺༻✧༺༻✦༺༻✦༺༻✧༺༻✧༺༻✦༺༻✦༺༻✧༺༻✦༺༻✦༺༻✧༺༻✦༺༻✦༺༻✧
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒     ✭・.・✫・゜・。. thanks for using md-links .・。.・゜✭・.・✫・゜・。    ▒▒  
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀`

module.exports = {
    totalLinks,
    uniqueLinks,
    brokenLinks,
    helpMsg,
    footerMsg,
    helloMsgValidate,
    helloMsgStats,
    helloMsgValidateAndStats,
    msgErrorRoute,
    msgNotLinks,
    commandInvalidMsg
}


// how to ge line number of error example
// function getErrorObject(){
//     try { throw Error('') } catch(err) { return err; }
// }

// var err = getErrorObject();
// var caller_line = err.stack.split("\n")[4];
// var index = caller_line.indexOf("at ");
// var clean = caller_line.slice(index+2, caller_line.length);