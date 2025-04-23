# develop stage
# Usa una imagen base de Node.js  
FROM node:18.17.0-alpine3.18
# Establece el directorio de trabajo  
WORKDIR /app

# Copia los archivos package.json y package-lock.json 
COPY package\*.json ./  
# Instala las dependencias  
RUN npm install 
# Copia el resto del código de la aplicación  
COPY . .  
# Construye la aplicación  
RUN npm run build  
# Expone el puerto en el que la aplicación se ejecutará  
EXPOSE 5173
# Comando para iniciar la aplicación  
CMD \["npm", "run", "dev"\]
