import { writeFileSync } from "fs";

console.log("Start Write")
writeFileSync("file.py", 
"My name is John" +
"from crontab import CronTab" +

"# Inicializar cron" +
"cron = CronTab(user='tu_usuario')" +

"# Añadir nuevo trabajo cron" +
"job = cron.new(command='/usr/bin/python3 /ruta/a/tu/script.py')" +

"# Establecer el tiempo: cada día a las 6:00" +
"job.setall('0 6 * * *')" +

"# Escribir el trabajo cron en el crontab" +
"cron.write()"

, {
 flag: "w"
})
console.log("End Write")