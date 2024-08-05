const cooldowns: {[index: string]: boolean} = {}

export function cooldown(cd_codename: string, cd_time: number, callback: Function) {
  console.log(cooldowns[cd_codename])
  if(!cooldowns[cd_codename]) {
    callback()
    cooldowns[cd_codename] = true
    setTimeout(restore_cd, cd_time * 1000, cd_codename)
  }
}

export function restore_cd(cd_codename: string) {
  cooldowns[cd_codename] = false;
}